import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { PlansRoutingModule } from './plans-routing.module';
import { PlansListComponent } from './plans-list/plans-list.component';
import { PlanDetailsComponent } from './plan-details/plan-details.component';
import { ModalCreatePlanComponent } from './modals/create-plan/modal-create-plan.component';
import { ModalAddActivityPlanComponent } from './modals/add-activity/modal-add-activity-plan.component';

@NgModule({
  declarations: [
    PlansListComponent,
    PlanDetailsComponent,
    ModalCreatePlanComponent,
    ModalAddActivityPlanComponent
  ],
  imports: [
    CommonModule,
    PlansRoutingModule,
    SharedModule,
    NgbModule,
  ]
})
export class PlansModule { }
