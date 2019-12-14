import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TendenciasService} from '../../services/tendencias.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  tendencia: any[] = [];
  termino: string = '';

  constructor(private activatedRoute: ActivatedRoute, private _tendenciasService: TendenciasService, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.tendencia = this._tendenciasService.buscarTendencias(params['termino']);
      console.log(this.tendencia);
    });
  }

  verHeroe(index: number){
    this.router.navigate(['/tendencia', index]);
  }


}
