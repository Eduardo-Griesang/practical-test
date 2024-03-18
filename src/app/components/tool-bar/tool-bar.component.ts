import {Component, EventEmitter, Output} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'tool-bar',
  templateUrl: 'tool-bar.component.html',
  styleUrls: ['tool-bar.component.sass'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})

export class ToolbarComponent {
  @Output() toggleSidebarEvent: EventEmitter<void> = new EventEmitter<void>();

  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }
}
