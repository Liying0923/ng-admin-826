import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
// 当打包部署静态包时，需要加载本Module，当使用服务端渲染时，请注释
// import { SPAModule } from '../pages/spa.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-lazyload-starter' }),
    AppRoutingModule,
    NoopAnimationsModule,
    HttpModule,
    MaterialModule
    // SPAModule, // 静态打包时加载
  ],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
