import { Component, inject, signal, computed, linkedSignal, importProvidersFrom } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ProductoItem } from '../../producto-item/producto-item.component';

@Component({
  imports: [ProductoItem],
  selector: 'app-productos-page',
  styleUrl: './productos-page.css',
  templateUrl: './productos-page.html',
})
export class ProductosPage {
  private productoService = inject(ProductoService);

  productos = this.productoService.productos;
  stockTotal = this.productoService.stockTotal;

  productoSeleccionadoId = signal<number | null>(null);
  productoSeleccionado = computed (() =>
  this.productos().find(p => p.id === this.productoSeleccionadoId()) ?? null
);
cantidadAVender = linkedSignal(() => {
  this.productoSeleccionadoId();
  return 1;
});

seleccionarProducto(id: number): void { this.productoSeleccionadoId.set(id); }
incrementarCantidad(): void { this.cantidadAVender.update(c => c+1); }
decrementarCantidad(): void { this.cantidadAVender.update(c => c-1); }
venderUnidad(id: number): void { this.productoService.venderUnidad(id); }
eliminarProducto(id: number): void{ this.productoService.eliminarProducto(id); }

confirmarVenta(): void {
  const producto = this.productoSeleccionado();
  if(!producto) return;
  this.productoService.venderUnidad(producto.id, this.cantidadAVender());
  this.productoSeleccionadoId.set(null);
}
}
