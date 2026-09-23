export interface MovimientoCaja {
    id: number;
    tipo: 'venta' | 'compra' | 'ajuste';
    productoId: number;
    cantidad: number;
    monto: number;
    fecha: Date;
}
