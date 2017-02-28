import './rxjs-extentions';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserService } from './user.service';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AlertModule, ModalModule,ButtonsModule } from 'ng2-bootstrap';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { IndexComponent } from './index/index.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { InfoDetailComponent } from './info-detail/info-detail.component';
import { AsciiComponent } from './ascii/ascii.component';

  


const appRoutes: Routes = [
  { path: '', component: SigninComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'index', component: IndexComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'infoDetail', component: InfoDetailComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    IndexComponent,
    ForgotPasswordComponent,
    InfoDetailComponent,
    AsciiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
