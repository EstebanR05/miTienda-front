import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsManagerComponent } from './products-manager/products-manager.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SalesCreateComponent } from '../sales/sales-create/sales-create.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductsManagerComponent,
    SalesCreateComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
