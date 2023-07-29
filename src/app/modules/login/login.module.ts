import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxButtonModule, DxFormModule, DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

/**
 * the LoginModule class with the @NgModule decorator
 */
@NgModule({
  /**
   *  declarations array tells Angular which components belong to that module.
   */
  declarations: [LoginComponent],
  imports: [
    LoginRoutingModule,
    CommonModule,
    DxButtonModule,
    DxButtonModule, DxFormModule
  ]
})
export class LoginModule { }
