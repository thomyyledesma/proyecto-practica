import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { ProductoService } from "../services/producto.service";

export const hayProductosGuard: CanActivateFn = () => {
    const productoService = inject(ProductoService);
    const router = inject(Router);

    if(productoService.productos().length === 0) {
        return router.createUrlTree(['/productos']);
    }
    return true;
}