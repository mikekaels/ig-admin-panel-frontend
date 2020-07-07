import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailSent = false;
  errorMessage: string;
  verifyEmail: any;
  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    public auth: AuthService,
    public api: ApiService,
    public afAuth: AngularFireAuth,
    // public translate: TranslateService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  async onLogin() {
    this.api.loading = true;
    try {
      const res = await this.auth.login(this.loginForm.value);
      // this.auth.updateUserData(credential.user);
      console.log('RES: ', res);
      this.router.navigate(['/pages']);
      this.api.loading = false;
    } catch (err) {
      this.errorMessage = err.message;
      this.api.loading = false;
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  // Dont code below this
}
