import { Component, input, output } from '@angular/core';
import { CurrencyPipe, NgClass } from '@angular/common';
import { Producto } from '../models/producto.model';
import { RouterLink } from '@angular/router';
import { EstadoStockPipe } from '../pipes/estado-stock-pipe';
import { ResaltarBajoStock } from '../directives/resaltar-bajo-stock';

@Component({
  imports: [RouterLink, CurrencyPipe, EstadoStockPipe, NgClass, ResaltarBajoStock],
  selector: 'app-producto-item',
  styleUrl: './producto-item.css',
  templateUrl: './producto-item.html',
})
export class ProductoItem {
  producto = input.required<Producto>();

  vender = output<number>();
  eliminar = output<number>();
  seleccionar = output<number>();

  onVender(): void{
    this.vender.emit(this.producto().id);
  }

  onEliminar(): void{
    this.eliminar.emit(this.producto().id);
  }

  onSeleccionar(): void{
    this.seleccionar.emit(this.producto().id);
  }

  clases(): Record<string, boolean> {
    return{
      'producto-agotado': this.producto().stock === 0,
      'producto-bajo': this.producto().stock > 0 && this.producto().stock < 15
    };
  }
}
