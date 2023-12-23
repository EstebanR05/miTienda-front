import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '../base/layout/app.layout.component';

const routes: Routes = [
    {
        path: '', component: AppLayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'spareParts', loadChildren: () => import('./spareParts/spare-parts.module').then(m => m.SparePartsModule) },
            { path: 'sales', loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule) },
            { path: 'brand', loadChildren: () => import('./brand/brand.module').then(m => m.BrandModule) }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
