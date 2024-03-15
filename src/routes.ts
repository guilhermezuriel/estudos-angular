import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponentComponent } from "./app/components/first-component/first-component.component";
import { ListRenderComponent } from "./app/components/list-render/list-render.component";
import { DirectiveComponentsComponent } from "./app/components/directive-components/directive-components.component";

export const routeConfig:Routes = [
  {path:'', component:FirstComponentComponent},
  {path:'list', component:ListRenderComponent},
  {path:'list/:id', component:DirectiveComponentsComponent}
]

@NgModule({
  declarations:[],
  imports:[RouterModule.forRoot(routeConfig)],
  exports:[RouterModule],
})
export class AppRoutingModule{}