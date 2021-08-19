import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'nwm-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss'],
})
export class SidenavListComponent {
  @Output() sidenavClose = new EventEmitter();

  onSidenavClose = () => {
    this.sidenavClose.emit();
  };
}
