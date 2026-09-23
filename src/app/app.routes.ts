import { Routes } from '@angular/router';
import { ProductosPage } from './pages/productos-page/productos-page';
import { ProductoDetalle } from './pages/producto-detalle/producto-detalle';
import { CajaPage } from './pages/caja-page/caja-page';
import { hayProductosGuard } from './guards/hay-productos.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'productos', pathMatch: 'full'},
    {path: 'productod', component: ProductosPage},
    {path: 'productos/:id', component: ProductoDetalle },
    {path: 'caja', component: CajaPage, canActivate: [hayProductosGuard] },
];
