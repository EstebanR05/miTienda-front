import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SparePartsListComponent } from './spare-parts-list/spare-parts-list.component';
import { SparePartsManagerComponent } from './spare-parts-manager/spare-parts-manager.component';

const routes: Routes = [
  { path: '', component: SparePartsListComponent },
  { path: 'create', component: SparePartsManagerComponent },
  { path: 'edit/:id', component: SparePartsManagerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SparePartsRoutingModule { }
