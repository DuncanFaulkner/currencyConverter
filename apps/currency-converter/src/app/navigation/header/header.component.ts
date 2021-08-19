import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'nwm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() sidenavToggle = new EventEmitter();

  onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };
}
