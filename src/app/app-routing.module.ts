import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {TendenciaComponent} from "./components/tendencia/tendencia.component";
import { TendenciasComponent } from './components/tendencias/tendencias.component';
import {BuscadorComponent} from './components/buscador/buscador.component';


const APP_ROUTES: Routes = [
  // Aqui van todas las rutas
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'tendencia/:id', component: TendenciaComponent},
  {path: 'tendencias', component: TendenciasComponent},
  {path: 'buscar/:termino', component: BuscadorComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
