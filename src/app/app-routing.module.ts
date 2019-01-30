import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import {ComprarComponent} from "./views/comprar-bitcoin/comprar.component";
import {RateService} from "./core/services/rate.service";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'comprar-bitcoin',
    component: ComprarComponent
  },
  /**{
    path: 'users',
    loadChildren: 'app/users/users.module'
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
        RateService,
    ],
})
export class AppRoutingModule { }
