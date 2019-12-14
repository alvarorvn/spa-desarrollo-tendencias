import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  buscarHeroe( nombreBusqueda: string ) {
    // console.log(nombreBusqueda);
    // Redireccionar a otra url
    this.router.navigate(['/buscar', nombreBusqueda]);
  }

}
