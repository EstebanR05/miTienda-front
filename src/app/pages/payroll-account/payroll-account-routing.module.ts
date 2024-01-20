import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayrollAccountListComponent } from './payroll-account-list/payroll-account-list.component';
import { PayrollAccountManagerComponent } from './payroll-account-manager/payroll-account-manager.component';

const routes: Routes = [
  { path: '', component: PayrollAccountListComponent },
  { path: 'create', component: PayrollAccountManagerComponent },
  { path: 'edit/:id', component: PayrollAccountManagerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollAccountRoutingModule { }
