import { Component, OnInit } from '@angular/core';
import { HtmlModelService } from 'src/app/model/html/html-model.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit {
  data;
  constructor(private htmldata:HtmlModelService) { }

  ngOnInit() {
    this.htmldata.setHtmlData(0)
  }

}
