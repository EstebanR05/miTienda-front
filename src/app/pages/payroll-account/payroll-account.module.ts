import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollAccountRoutingModule } from './payroll-account-routing.module';
import { PayrollAccountListComponent } from './payroll-account-list/payroll-account-list.component';
import { PayrollAccountManagerComponent } from './payroll-account-manager/payroll-account-manager.component';


@NgModule({
  declarations: [
    PayrollAccountListComponent,
    PayrollAccountManagerComponent
  ],
  imports: [
    CommonModule,
    PayrollAccountRoutingModule
  ]
})
export class PayrollAccountModule { }
