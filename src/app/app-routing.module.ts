import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import {ComprarComponent} from "./views/comprar-bitcoin/comprar.component";
import {RateService} from "./core/services/rate.service";
import {ComoFuncionaComponent} from "./views/como-funciona/comoFunciona.component";
import {ContatoComponent} from "./views/contato/contato.component";
import {SobreComponent} from "./views/sobre/sobre.component";
import {LoginComponent} from "./views/login/login.component";

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
  {
    path: 'como-funciona',
    component: ComoFuncionaComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
