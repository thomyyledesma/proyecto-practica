import { Component, input, output } from '@angular/core';
import { Producto } from '../models/producto.model';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
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
}
