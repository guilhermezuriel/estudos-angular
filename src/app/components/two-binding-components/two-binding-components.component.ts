import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-binding-components',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-binding-components.component.html',
  styleUrl: './two-binding-components.component.css'
})
export class TwoBindingComponentsComponent {
  serverName:string = 'TEST';
  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
