import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandRoutingModule } from './brand-routing.module';
import { BrandPrincipalComponent } from './brand-principal/brand-principal.component';
import { BrandManagerComponent } from './brand-manager/brand-manager.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  
    BrandPrincipalComponent,
       BrandManagerComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    BrandRoutingModule
  ]
})
export class BrandModule { }
