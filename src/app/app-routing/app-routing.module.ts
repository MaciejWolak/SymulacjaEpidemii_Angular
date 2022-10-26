import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ParametersManagerComponent} from "../components/parameters-manager/parameters-manager.component";
import {ResultComponent} from "../components/result/result.component";

const  routes: Routes = [
  {path: '', redirectTo: '/app', pathMatch: 'full'},
  {path: 'app', component: ParametersManagerComponent},
  {path: 'results/:id', component: ResultComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
