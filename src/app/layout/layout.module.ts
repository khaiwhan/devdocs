import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModel } from '../shared/utils/material';
import { HttpClientModule } from '@angular/common/http';
import { PagesRoutingModule } from '../pages/pages-routing.module';
import { SubheaderComponent } from './html/subheader/subheader.component';
import { HeadercontentComponent } from './html/headercontent/headercontent.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    SubheaderComponent,
    HeadercontentComponent,
  ],
  imports: [
    PagesRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModel,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    SidebarComponent,
    HeaderComponent
  ],
  providers: [SidebarComponent]
})
export class LayoutModule { }
