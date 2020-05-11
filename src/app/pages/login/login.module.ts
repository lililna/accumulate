import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { Login1Component } from './login1/login1.component';
import { NgZorroAntdModule, NzFormModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [Login1Component],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NgZorroAntdModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
