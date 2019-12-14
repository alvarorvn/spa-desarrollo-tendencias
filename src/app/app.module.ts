import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app-routing.module';

import { TendenciasService } from './services/tendencias.service'
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HomeComponent } from './components/home/home.component';
import { TendenciaComponent } from './components/tendencia/tendencia.component';
import { TendenciasComponent } from './components/tendencias/tendencias.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    BuscadorComponent,
    HomeComponent,
    TendenciaComponent,
    TendenciasComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
    
  ],
  providers: [
    TendenciasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
