import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  imports: [],
  selector: 'app-producto-detalle',
  styleUrl: './producto-detalle.css',
  templateUrl: './producto-detalle.html',
})
export class ProductoDetalle {
  private route = inject(ActivatedRoute);
  private productoService = inject(ProductoService);
  private id = Number(this.route.snapshot.paramMap.get('id'));

  producto = computed(() =>
  this.productoService.productos().find(p => p.id === this.id) ?? null
);
}
