import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponentComponent } from "./app/components/first-component/first-component.component";
import { ListRenderComponent } from "./app/components/list-render/list-render.component";

export const routeConfig:Routes = [
  {path:'', component:FirstComponentComponent},
  {path:'list', component:ListRenderComponent}
]

@NgModule({
  declarations:[],
  imports:[RouterModule.forRoot(routeConfig)],
  exports:[RouterModule],
})
export class AppRoutingModule{}