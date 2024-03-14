import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../../../Animal';
import { ListService } from '../../services/list.service';
@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals:Array<Animal>=[
  {name:'Tuco',type:'Cachorro',},
  {name:'Magna', type:'Gato'},
  {name:'Galileu', type:'Cachorro'},
  {name:'Alfredo', type:'Gato'}
]
  animal:Animal = {
    name:'Teste', type:'Algo'
  }
  constructor(private listService:ListService){}

  removeAnimal(animals:Animal){
    this.listService.remove(this.animals, this.animal)
  }
}
