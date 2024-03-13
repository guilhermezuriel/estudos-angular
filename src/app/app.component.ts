import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectiveComponentsComponent } from './components/directive-components/directive-components.component';
import { CommonModule } from '@angular/common';
import { ConditionalComponentsComponent } from './components/conditional-components/conditional-components.component';
import { EventsComponentsComponent } from './components/events-components/events-components.component';
import { TwoBindingComponentsComponent } from './components/two-binding-components/two-binding-components.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, FirstComponentComponent, ParentDataComponent, DirectiveComponentsComponent,ConditionalComponentsComponent, EventsComponentsComponent, TwoBindingComponentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userName = 'Joaquin'
  idade = 30
  title = 'angular-estrutura';
}
