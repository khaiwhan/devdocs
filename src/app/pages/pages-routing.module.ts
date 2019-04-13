import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmlComponent } from './html/html.component';
import { HomeComponent } from './home/home.component';
import { CssComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
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

const routes: Routes = [
  {
    path:'ajax',
    component:AjaxComponent
  },
  {
    path:'angular',
    component:AngularComponent
  },
  {
    path:'arduino',
    component:ArduinoComponent
  },
  {
    path:'asp',
    component:AspComponent
  },
  {
    path:'bootstrap',
    component:BootstrapComponent
  },
  {
    path:'csharp',
    component:CsharpComponent
  },
  {
    path:'css',
    component:CssComponent
  },
  {
    path:'dom',
    component:DomComponent
  },
  {
    path:'firebase',
    component:FirebaseComponent
  },
  {
    path:'html',
    component:HtmlComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'java',
    component:JavaComponent
  },
  {
    path:'javascript',
    component:JavascriptComponent
  },
  {
    path:'jquery',
    component:JqueryComponent
  },
  {
    path:'json',
    component:JsonComponent
  },
  {
    path:'mysql',
    component:MysqlComponent
  },
  {
    path:'nodejs',
    component:NodejsComponent
  },
  {
    path:'php',
    component:PhpComponent
  },
  {
    path:'reactnative',
    component:ReactnativeComponent
  },
  {
    path:'scss',
    component:ScssComponent
  },
  {
    path:'selenium',
    component:SeleniumComponent
  },
  {
    path:'socket',
    component:SocketComponent
  },
  {
    path:'swift',
    component:SwiftComponent
  },
  {
    path:'typescript',
    component:TypescriptComponent
  },
  {
    path:'xml',
    component:XmlComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
