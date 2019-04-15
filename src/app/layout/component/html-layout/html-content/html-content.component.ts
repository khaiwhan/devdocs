import { Component, OnInit } from '@angular/core';
import { HtmlModelService } from 'src/app/model/html/html-model.service';

@Component({
  selector: 'app-html-content',
  templateUrl: './html-content.component.html',
  styleUrls: ['./html-content.component.scss']
})
export class HtmlContentComponent implements OnInit {
  data;
  contentText:string;
  text:string[]
  constructor(private htmldata: HtmlModelService) { }

  ngOnInit() {
    this.data = this.htmldata.getHtmlData();
    this.contentText = this.data.content;
    this.text = this.contentText.split('/n')
    console.log(this.text);
    
  }

}
