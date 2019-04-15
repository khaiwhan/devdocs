import { Component, OnInit } from '@angular/core';
import { HtmlModelService } from 'src/app/model/html/html-model.service';

@Component({
  selector: 'app-html-example-result',
  templateUrl: './html-example-result.component.html',
  styleUrls: ['./html-example-result.component.scss']
})
export class HtmlExampleResultComponent implements OnInit {
  data;
  constructor(private htmldata: HtmlModelService) { }

  ngOnInit() {
    this.data = this.htmldata.getHtmlData()
  }

}
