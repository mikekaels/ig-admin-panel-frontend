import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NbEvaIconsModule } from '@nebular/eva-icons';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
// import { LoginComponent } from './auth/login/login.component';
// import { ForgetComponent } from './auth/forget/forget.component';
// import { HttpClientModule, HttpClient } from '@angular/common/http';

import {
  NbThemeModule,
  NbLayoutModule,
  NbButtonModule,
  NbCardModule,
  NbInputModule,
  NbSidebarModule,
  NbIconModule,
  NbMenuModule,
  NbAlertModule,
  NbSpinnerModule
} from '@nebular/theme';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirePerformanceModule } from '@angular/fire/performance';

// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
  ],
  imports: [
    AuthModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirePerformanceModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: (createTranslateLoader),
    //     deps: [HttpClient],
    //   },
    // }),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbSidebarModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NbMenuModule.forRoot(),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbAlertModule,
    NbSpinnerModule,
    ReactiveFormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
