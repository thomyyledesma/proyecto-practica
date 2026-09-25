import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoStock',
})
export class EstadoStockPipe implements PipeTransform {
  transform(stock: number, stockMinimo: number = 15): string {
    if(stock === 0) return 'AGOTADO';
    if(stock < stockMinimo) return "BAJO";
    return "OK"
  }
}
