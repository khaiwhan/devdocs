import { Component, OnInit } from '@angular/core';
import { HtmlModelService } from 'src/app/model/html/html-model.service';

@Component({
  selector: 'app-html-reference',
  templateUrl: './html-reference.component.html',
  styleUrls: ['./html-reference.component.scss']
})
export class HtmlReferenceComponent implements OnInit {
  data;
  constructor(private htmldata: HtmlModelService) { }

  ngOnInit() {
    this.data = this.htmldata.getHtmlData()
  }

}
