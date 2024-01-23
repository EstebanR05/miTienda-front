import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesManagerComponent } from './employees-manager/employees-manager.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmployeesListComponent,
    EmployeesManagerComponent,
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }
