import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
