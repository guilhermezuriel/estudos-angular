import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../../../Animal';
import { ListService } from '../../services/list.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animals:Array<Animal>=[]
  animal:Animal = {
    name:'Teste', type:'Algo'
  }
  constructor(private listService:ListService){}

  removeAnimal(animals:Animal){
    this.listService.remove(this.animals, this.animal)
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals:any)=>(this.animals = animals)); //Subscribe() => Tratamento de conclusão do evento quando se é Observable
  }
}
