import { Injectable } from '@angular/core';
import { Animal } from '../../Animal';
import {HttpClient} from '@angular/common/htpp'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ListService {
  private apiURL = 'http://localhost:3000/animals'

  constructor(private http: HttpClient) { }

  remove(animals: Animal[], animal: Animal){
      return animals.filter((value)=>{value.name !== animal.name})
  }

    //Observa se o Array de Animais é recebido corretamente da requisição
  getAll():Observable<Animal[]>{
      return this.http.get<Animal[]>(this.apiURL)
  }
}
