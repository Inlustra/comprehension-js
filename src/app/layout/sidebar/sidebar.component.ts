import {Component} from '@angular/core';
import {LayoutStateService} from '../'

@Component({
  selector: 'sidebar',
  providers: [LayoutStateService],
  styles: [require('./sidebar.style.scss')],
  templateUrl: './sidebar.template.html'
})
export class SidebarComponent {
  constructor(public layoutState: LayoutStateService) {
  }
}
