import { Component, inject } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { CajaService } from '../../services/caja.service';

@Component({
  imports: [CurrencyPipe, DatePipe],
  selector: 'app-caja-page',
  styleUrl: './caja-page.css',
  templateUrl: './caja-page.html',
})
export class CajaPage {
  private cajaService = inject(CajaService);
  movimientos = this.cajaService.movimientos;
  saldoCaja = this.cajaService.saldoCaja;
}
