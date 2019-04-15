import { Injectable } from '@angular/core';
import { HTML_DATA } from './html-model-data';

@Injectable({
  providedIn: 'root'
})
export class HtmlModelService {
  data;
  constructor() { }
  setHtmlData(select){
    return this.data = HTML_DATA[select]
  }
  getHtmlData(){
    return this.data
  }
}
