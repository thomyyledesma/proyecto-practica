import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-producto-form',
  styleUrl: './producto-form.css',
  templateUrl: './producto-form.html',
})
export class ProductoForm {
  private fb = inject(FormBuilder);
  private productoService = inject(ProductoService);
  private router = inject(Router);

  form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    precio: [ 0, [Validators.required, Validators.min(0)]],
    stock: [ 0, [Validators.required, Validators.min(0)]]
  });

  guardar(): void {
    if(this.form.invalid) return;
    this.productoService.agregarProducto(this.form.getRawValue());
    this.router.navigate(['/productos']);
  }
}
