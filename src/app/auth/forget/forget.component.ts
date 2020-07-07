import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {

  forgetForm: FormGroup;
  errorMessage: string;
  emailSent = false;

  constructor(
    public fb: FormBuilder,
    public api: ApiService,
    public auth: AuthService,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.forgetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  async forgetPassword() {
    this.api.loading = true;
    try {
      await this.auth.forgetPassword(this.forgetForm.get('email').value);
      this.emailSent = true;
      this.api.loading = false;
    }
    catch (err) {
      this.api.loading = false;
      this.errorMessage = err.code;
    }
  }

  get email() {
    return this.forgetForm.get('email');
  }
}
