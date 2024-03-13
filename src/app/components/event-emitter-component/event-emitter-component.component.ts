import { Component } from '@angular/core';
import { NumberChangeComponent } from '../number-change/number-change.component';

@Component({
  selector: 'app-event-emitter-component',
  standalone: true,
  imports: [NumberChangeComponent],
  templateUrl: './event-emitter-component.component.html',
  styleUrl: './event-emitter-component.component.css'
})
export class EventEmitterComponentComponent {
  myNumber:number = 0;
  onChangeNumber(){
      this.myNumber = Math.floor(Math.random()*10)
  }

}
