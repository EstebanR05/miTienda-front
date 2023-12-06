import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesManagerComponent } from './sales-manager/sales-manager.component';

const routes: Routes = [
  { path: '', component: SalesListComponent },
  { path: 'create', component: SalesManagerComponent },
  { path: 'edit/:id', component: SalesManagerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
