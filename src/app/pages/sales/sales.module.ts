import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesManagerComponent } from './sales-manager/sales-manager.component';


@NgModule({
  declarations: [
    SalesManagerComponent,
    SalesListComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule
  ]
})
export class SalesModule { }
