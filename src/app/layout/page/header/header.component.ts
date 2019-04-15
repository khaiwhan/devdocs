import { Component, OnInit, DebugNode } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  num = 0;
  theme = 0;
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    if (this.num == 0) {
      document.getElementById('sidebar').classList.add("none")
      document.getElementById('sidebar').classList.remove("open")
      document.getElementById('content').style.gridColumnStart = '1';
      return this.num = 1;
    }
    if (this.num == 1) {
      document.getElementById('sidebar').classList.add("open")
      document.getElementById('sidebar').classList.remove("none")
      document.getElementById('content').style.gridColumnStart = '2';
      return this.num = 0;
    }
  }
  changeTheme(){
    if(this.theme == 0){
      document.getElementById('container').classList.add("changetheme")
      document.getElementById('toolbar').classList.add("changethemeToolbar")
      document.getElementById('sidebar').classList.remove("container")
      document.getElementById('sidebar').classList.add("changethemeSidebar")
      return this.theme = 1;
    }
    if(this.theme == 1){
      document.getElementById('container').classList.remove("changetheme")
      document.getElementById('toolbar').classList.remove("changethemeToolbar")
      document.getElementById('sidebar').classList.remove("changethemeSidebar")
      document.getElementById('sidebar').classList.add("container")
      return this.theme = 0;
    }
  }
}
