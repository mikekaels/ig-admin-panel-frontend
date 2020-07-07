import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {
  NbCardModule,
  NbLayoutModule,
  NbAlertModule,
  NbSpinnerModule,
  NbInputModule,
  NbActionsModule,
  NbButtonModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbDialogModule,
} from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NbInputModule,
    NbActionsModule,
    NbButtonModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    NbDialogModule,
    AuthRoutingModule,
    NbCardModule,
    NbLayoutModule,
    NbAlertModule,
    NbSpinnerModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, ForgetComponent, RegisterComponent],
})
export class AuthModule { }
