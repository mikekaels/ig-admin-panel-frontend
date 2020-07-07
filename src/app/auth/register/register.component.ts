import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  emailsent = false;
  errorMessage: string;
  verivyEmail: any;

  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    public auth: AuthService,
    public api: ApiService,
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      photoURL: ['', [Validators.required]],
      role: ['ADMIN']
    });
  }

  async register() {
    this.api.loading = true;
    try {
      const res = await this.auth.createUser(this.registerForm.value);
      if (res) {
        this.router.navigate(['/pages']);
        this.api.loading = false;
      }
    } catch (err) {
      this.errorMessage = err.error;
      this.api.loading = false;
    }
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get firstname() {
    return this.registerForm.get('firstname');
  }

  get lastname() {
    return this.registerForm.get('lastname');
  }

  get photoURL() {
    return this.registerForm.get('photoURL');
  }

}
