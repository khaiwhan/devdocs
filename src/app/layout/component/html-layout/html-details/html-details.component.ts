import { Component, OnInit } from '@angular/core';
import { HtmlModelService } from 'src/app/model/html/html-model.service';

@Component({
  selector: 'app-html-details',
  templateUrl: './html-details.component.html',
  styleUrls: ['./html-details.component.scss']
})
export class HtmlDetailsComponent implements OnInit {
  data;
  constructor(private htmldata: HtmlModelService) { }

  ngOnInit() {
    this.data = this.htmldata.getHtmlData()
  }

}
