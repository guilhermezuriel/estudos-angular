import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals:Array<{name:string, type:string}>=[
  {
     name:'Tuco',type:'Cachorro',
  },
  {
    name:'Magna', type:'Gato'
  },
  {
    name:'Galileu', type:'Cachorro'
  },
  {
    name:'Alfredo', type:'Gato'
  }
]
}
