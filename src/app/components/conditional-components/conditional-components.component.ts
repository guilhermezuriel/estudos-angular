import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conditional-components',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conditional-components.component.html',
  styleUrl: './conditional-components.component.css'
})
export class ConditionalComponentsComponent {
  canShow:boolean = true;
  name:string = 'Jonathan'
}
