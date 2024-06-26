import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./admin/routes')        
    },
    {
        path: 'client',
        loadChildren: () => import('./client/routes').then(mod => mod.CLIENT_ROUTES)
    },
    {
        path: 'seller',
        loadComponent: () => import('./seller/seller.component').then(mod => mod.SellerComponent)
    }
]