import { Component, inject } from '@angular/core';
import { CajaService } from '../../services/caja.service';

@Component({
  imports: [],
  selector: 'app-caja-page',
  styleUrl: './caja-page.css',
  templateUrl: './caja-page.html',
})
export class CajaPage {
  private cajaService = inject(CajaService);
  movimientos = this.cajaService.movimientos;
  saldoCaja = this.cajaService.saldoCaja;
}
