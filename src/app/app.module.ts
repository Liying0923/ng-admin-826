import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeEditPageComponent } from './employee-edit-page/employee-edit-page.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations'

// 当打包部署静态包时，需要加载本Module，当使用服务端渲染时，请注释
// import { SPAModule } from '../pages/spa.module';

@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent,
    EmployeeEditPageComponent,
=======
    AppComponent
>>>>>>> 4cb985aa6c02a1c9659125205dc405b679f1e9a0
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-lazyload-starter' }),
    AppRoutingModule,
    NoopAnimationsModule,
    // SPAModule, // 静态打包时加载
  ],
  providers: [],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
