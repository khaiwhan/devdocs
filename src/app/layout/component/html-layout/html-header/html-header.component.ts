import { Component, OnInit } from '@angular/core';
import { HtmlModelService } from 'src/app/model/html/html-model.service';

@Component({
  selector: 'app-html-header',
  templateUrl: './html-header.component.html',
  styleUrls: ['./html-header.component.scss']
})
export class HtmlHeaderComponent implements OnInit {
  data;
  constructor(private htmldata:HtmlModelService) { }

  ngOnInit() {
    this.data = this.htmldata.getHtmlData()
  }
}
