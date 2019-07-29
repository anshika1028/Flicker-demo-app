import { Component, OnInit } from '@angular/core';
import { GlobalLabels } from '../../commons/constants/global.labels';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  labels = GlobalLabels;
  constructor() { }

  ngOnInit() {
  }

}
