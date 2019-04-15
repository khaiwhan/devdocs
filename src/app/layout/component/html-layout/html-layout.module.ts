import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlHeaderComponent } from './html-header/html-header.component';
import { HtmlSubheaderComponent } from './html-subheader/html-subheader.component';
import { HtmlContentComponent } from './html-content/html-content.component';
import { HtmlDetailsComponent } from './html-details/html-details.component';
import { HtmlExampleComponent } from './html-example/html-example.component';
import { HtmlExampleResultComponent } from './html-example-result/html-example-result.component';
import { HtmlReferenceComponent } from './html-reference/html-reference.component';
import { MaterialModel } from 'src/app/shared/utils/material';

@NgModule({
  declarations: [
    HtmlHeaderComponent,
    HtmlSubheaderComponent,
    HtmlContentComponent,
    HtmlDetailsComponent,
    HtmlExampleComponent,
    HtmlExampleResultComponent,
    HtmlReferenceComponent
  ],
  imports: [
    CommonModule,
    MaterialModel,
  ],
  exports:[
    HtmlHeaderComponent,
    HtmlSubheaderComponent,
    HtmlContentComponent,
    HtmlDetailsComponent,
    HtmlExampleComponent,
    HtmlExampleResultComponent,
    HtmlReferenceComponent
  ]
})
export class HtmlLayoutModule { }
