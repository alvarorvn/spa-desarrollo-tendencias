import { Component, OnInit } from '@angular/core';
import { TendenciasService, Tendencia} from "../../services/tendencias.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-tendencias',
  templateUrl: './tendencias.component.html',
  styleUrls: ['./tendencias.component.css']
})
export class TendenciasComponent implements OnInit {

  tendencias: Tendencia[] = [];

  constructor(private _tendenciasService: TendenciasService, private router: Router) { }

  ngOnInit() {
    this.tendencias = this._tendenciasService.getTendencias();
    console.log(this.tendencias);
  }

  verHeroe(index: number){
    this.router.navigate(['/tendencia', index]);
  }
}
