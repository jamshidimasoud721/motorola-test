import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {authGuard} from "../data/auth/auth.guard";


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canMatch: [authGuard],
    canActivateChild: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
