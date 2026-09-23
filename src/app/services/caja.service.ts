import { Injectable, signal, computed } from '@angular/core';
import { MovimientoCaja } from '../models/movimiento-caja.model';

@Injectable({ providedIn: 'root' })
export class CajaService {
  private movimientosSignal = signal<MovimientoCaja[]>([
    { id: 1, tipo: 'venta', productoId: 1, cantidad: 5, monto: 6000, fecha: new Date() },
    { id: 2, tipo: 'compra', productoId: 2, cantidad: 10, monto: 4500, fecha: new Date() },
    { id: 3, tipo: 'ajuste', productoId: 3, cantidad: 2, monto: 0, fecha: new Date() },
  ]);

  movimientos = this.movimientosSignal.asReadonly();

  saldoCaja = computed(() =>
    this.movimientosSignal().reduce((saldo, mov) => {
      if (mov.tipo === 'venta') return saldo + mov.monto;
      if (mov.tipo === 'compra') return saldo - mov.monto;
      return saldo;
    }, 0),
  );
}
