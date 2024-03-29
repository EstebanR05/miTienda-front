import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '../base/layout/app.layout.component';

const routes: Routes = [
    {
        path: '', component: AppLayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
            { path: 'payroll-account', loadChildren: () => import('./payroll-account/payroll-account.module').then(m => m.PayrollAccountModule) },
            { path: 'sales', loadChildren: () => import('./sales/sales.module').then(m => m.SalesModule) },
            { path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
            { path: 'spareParts', loadChildren: () => import('./spareParts/spare-parts.module').then(m => m.SparePartsModule) },
            { path: 'brand', loadChildren: () => import('./brand/brand.module').then(m => m.BrandModule) }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
