import { Component, OnInit } from '@angular/core';
import { THEMES } from '../../db/themes';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit {

  themes:any = THEMES;
  constructor() { }

  ngOnInit(): void {
  }

}
