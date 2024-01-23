import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsManagerComponent } from './products-manager/products-manager.component';
import { SalesManagerComponent } from '../sales/sales-manager/sales-manager.component';

const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'create', component: ProductsManagerComponent },
  { path: 'edit/:id', component: ProductsManagerComponent },
  { path: 'createSales/:id' , component: SalesManagerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
