import { Component, OnInit } from '@angular/core';
import { HtmlModelService } from 'src/app/model/html/html-model.service';

@Component({
  selector: 'app-html-example',
  templateUrl: './html-example.component.html',
  styleUrls: ['./html-example.component.scss']
})
export class HtmlExampleComponent implements OnInit {
  data;
  constructor(private htmldata: HtmlModelService) { }

  ngOnInit() {
    this.data = this.htmldata.getHtmlData()
  }

}
