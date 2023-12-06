import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SparePartsRoutingModule } from './spare-parts-routing.module';
import { SparePartsListComponent } from './spare-parts-list/spare-parts-list.component';
import { SparePartsManagerComponent } from './spare-parts-manager/spare-parts-manager.component';


@NgModule({
  declarations: [
    SparePartsListComponent,
    SparePartsManagerComponent,
  ],
  imports: [
    CommonModule,
    SparePartsRoutingModule
  ]
})
export class SparePartsModule { }
