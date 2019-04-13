import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material';
import { Menu } from 'src/app/model/menus/list-menu';
import { MENU_DATA } from 'src/app/model/menus/list-menu-data'

/** Flat node with expandable and level information */
interface FlatNode {
  expandable: boolean;
  name: string;
  url:string;
  level: number;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private transformer = (node: Menu, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      url:node.url,
      icon:node.icon,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<FlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = MENU_DATA;
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;
  
  ngOnInit() {
  }

}
