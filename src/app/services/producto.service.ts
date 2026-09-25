import { Injectable, signal, computed } from '@angular/core';
import { Producto } from '../models/producto.model';

@Injectable({ providedIn: 'root' })
export class ProductoService {
  private productoSignal = signal<Producto[]>([
    { id: 1, nombre: 'Zapatilla', precio: 1200, stock: 35 },
    { id: 2, nombre: 'Campera', precio: 700, stock: 12 },
    { id: 3, nombre: 'Pantalon', precio: 500, stock: 0 },
    { id: 4, nombre: 'Buzo', precio: 1500, stock: 8 },
  ]);

  productos = this.productoSignal.asReadonly();

  stockTotal = computed(() => this.productoSignal().reduce((total, p) => total + p.stock, 0));

  venderUnidad(id: number, cantidad: number = 1): void {
    this.productoSignal.update((lista) =>
      lista.map((p) => (p.id === id ? { ...p, stock: Math.max(0, p.stock - cantidad) } : p)),
    );
  }

  eliminarProducto(id: number): void {
    this.productoSignal.update((lista) => lista.filter((p) => p.id !== id));
  }

  agregarProducto(datos: Omit<Producto, 'id'>): void {
    const nuevoId = Math.max(0, ...this.productoSignal().map(p => p.id)) +1;
    this.productoSignal.update(lista => [...lista, { id: nuevoId, ...datos }]);
  }
}
