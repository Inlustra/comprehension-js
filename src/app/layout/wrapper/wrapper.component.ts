import {Component} from '@angular/core';
import {LayoutStateService} from '../'

@Component({
  selector: 'layout-wrapper',
  providers: [LayoutStateService],
  styles: [require('./wrapper.style.scss')],
  template: `
      <div class="layout-wrapper" [ngClass]="{open: layoutState.sidebar.expanded}">
        <ng-content></ng-content>
      </div>`
})
export class LayoutWrapperComponent {
  constructor(public layoutState: LayoutStateService) {
  }
  ngOnInit() {
    console.log('Wrapper State', this.layoutState);
  }
}
