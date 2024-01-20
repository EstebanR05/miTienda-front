import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesManagerComponent } from './employees-manager/employees-manager.component';

const routes: Routes = [
  { path: '', component: EmployeesListComponent },
  { path: 'create', component: EmployeesManagerComponent },
  { path: 'edit/:id', component: EmployeesManagerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
