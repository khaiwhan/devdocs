import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  num = 0;
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
}
