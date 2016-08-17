import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

import { LayoutWrapperComponent, SidebarComponent } from './layout';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  directives: [SidebarComponent, LayoutWrapperComponent],
  styles: [require('./app.style.scss')],
  templateUrl: './app.template.html'
})
export class App {

  constructor(public appState: AppState) {
  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
