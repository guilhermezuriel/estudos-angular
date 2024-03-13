import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-change',
  standalone: true,
  imports: [],
  templateUrl: './number-change.component.html',
  styleUrl: './number-change.component.css'
})
export class NumberChangeComponent {
    @Output() changeNumber:EventEmitter<any> = new EventEmitter()

    onClick():void{
      this.changeNumber.emit()
    }
}
