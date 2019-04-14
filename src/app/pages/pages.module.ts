import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { LayoutModule } from '../layout/layout.module';
import { MaterialModel } from '../shared/utils/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CssComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { HttpClientModule } from '@angular/common/http';
import { AjaxComponent } from './ajax/ajax.component';
import { AngularComponent } from './angular/angular.component';
import { ArduinoComponent } from './arduino/arduino.component';
import { AspComponent } from './asp/asp.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { CsharpComponent } from './csharp/csharp.component';
import { DomComponent } from './dom/dom.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { JavaComponent } from './java/java.component';
import { JqueryComponent } from './jquery/jquery.component';
import { JsonComponent } from './json/json.component';
import { MysqlComponent } from './mysql/mysql.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { PhpComponent } from './php/php.component';
import { ReactnativeComponent } from './reactnative/reactnative.component';
import { ScssComponent } from './scss/scss.component';
import { SeleniumComponent } from './selenium/selenium.component';
import { SocketComponent } from './socket/socket.component';
import { SwiftComponent } from './swift/swift.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { XmlComponent } from './xml/xml.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    CssComponent,
    JavascriptComponent,
    AjaxComponent,
    AngularComponent,
    ArduinoComponent,
    AspComponent,
    BootstrapComponent,
    CsharpComponent,
    DomComponent,
    FirebaseComponent,
    JavaComponent,
    JqueryComponent,
    JsonComponent,
    MysqlComponent,
    NodejsComponent,
    PhpComponent,
    ReactnativeComponent,
    ScssComponent,
    SeleniumComponent,
    SocketComponent,
    SwiftComponent,
    TypescriptComponent,
    XmlComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModel,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
