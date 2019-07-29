import { Component } from '@angular/core';
import { CoreViewState } from './core/store/view-state/core.view-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
  constructor(protected coreviewState: CoreViewState) {}
}
