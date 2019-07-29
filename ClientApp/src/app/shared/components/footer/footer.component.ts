import { Component, OnInit } from '@angular/core';
import { GlobalLabels } from '../../commons/constants/global.labels';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  labels = GlobalLabels;
  constructor() { }

  ngOnInit() {
  }

}
