import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {LoginStep1Component} from './login-step1/login-step1.component';
import {LoginStep2Component} from './login-step2/login-step2.component';
import {RouterModule} from '@angular/router';
import {AuthService, IAuthService} from './service/auth.service';
import {LoginServiceService} from './service/login-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    DictionaryPageComponent,
    DictionaryDetailComponent,
    LoginStep1Component,
    LoginStep2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, RouterModule
  ],
  providers: [IAuthService, LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
