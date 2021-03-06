import { Component, OnInit } from '@angular/core';
import { HtmlModelService } from 'src/app/model/html/html-model.service';

@Component({
  selector: 'app-abbr',
  templateUrl: './abbr.component.html',
  styleUrls: ['./abbr.component.scss']
})
export class AbbrComponent implements OnInit {
  data;
  constructor(private htmldata: HtmlModelService) { }

  ngOnInit() {
    this.htmldata.setHtmlData(1)
  }
}
