import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events-components',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-components.component.html',
  styleUrl: './events-components.component.css'
})
export class EventsComponentsComponent {
  show:boolean = true;
  showMessage():void{
    this.show = !(this.show)
  }
}
