import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TendenciasService, Tendencia} from "../../services/tendencias.service";
@Component({
  selector: 'app-tendencia',
  templateUrl: './tendencia.component.html',
  styleUrls: ['./tendencia.component.css']
})
export class TendenciaComponent {

  tendencia: any = {};
  casa: string;
  constructor(private activatedRoute: ActivatedRoute, _tendenciasService: TendenciasService) {
    this.activatedRoute.params.subscribe( params => {
      this.tendencia = _tendenciasService.getTendencia(params['id']);
      console.log(this.tendencia);
      this.casa = (this.tendencia.casa === 'DC') ? 'assets/img/logo.png' : 'assets/img/logo.png';
      console.log(this.casa);
    });
  }

}
