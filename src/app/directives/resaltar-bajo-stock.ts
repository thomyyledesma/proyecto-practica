import { Directive, input } from '@angular/core';

@Directive({
  selector: '[resaltarBajoStock]',
  host: {
    '[class.resaltado]': 'debeResaltar()'
  }
})
export class ResaltarBajoStock {
  stock = input.required<number>({ alias: 'resaltarBajoStock' });
  umbral = input<number>(15);

  debeResaltar(): boolean {
    return this.stock()  > 0 && this.stock() < this.umbral();
  }
}
