import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandPrincipalComponent } from './brand-principal/brand-principal.component';
import { BrandManagerComponent } from './brand-manager/brand-manager.component';

const routes: Routes = [
  {path: '', component: BrandPrincipalComponent},
  { path: 'create', component: BrandManagerComponent },
  { path: 'edit/:id', component: BrandManagerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandRoutingModule { }
