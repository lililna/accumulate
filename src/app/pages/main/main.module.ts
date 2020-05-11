import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { NzLayoutModule, NzMenuModule, NzFormModule, NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzFormModule,
    HttpClientModule,
    NgZorroAntdModule,
    MainRoutingModule
  ]
})
export class MainModule { }
