import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanDetailsComponent } from './plan-details/plan-details.component';
import { PlansListComponent } from './plans-list/plans-list.component';

const routes: Routes = [
  {
    path: 'list', component: PlansListComponent
  },
  {
    path: 'details/:id', component: PlanDetailsComponent
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlansRoutingModule { }