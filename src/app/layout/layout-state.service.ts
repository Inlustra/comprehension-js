import {Injectable} from '@angular/core';

@Injectable()
export class LayoutStateService {

  sidebar = {
    expanded: true
  };

  toggleSidebar() {
    this.sidebar.expanded = !this.sidebar.expanded;
  }

}
