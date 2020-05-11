import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData, CommonModule } from '@angular/common';
import en from '@angular/common/locales/en';
import { AppService } from './services/app.service';
import { NgZorroAntdModule, NzFormModule } from "ng-zorro-antd";
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { MainModule } from './pages/main/main.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzFormModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgZorroAntdModule,
    HomeModule,
    LoginModule,
    MainModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    {
      provide: "BASE_CONFING",
      useValue: {
        url: "/api"
      }
    },
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
