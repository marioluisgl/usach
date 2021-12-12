import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { TeachersRoutingModule } from './teacher-routing.module';
import { CreateTeacherComponent } from './modals/create-teacher.component';


@NgModule({
  declarations: [
    TeachersListComponent,
    CreateTeacherComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    SharedModule,
    NgbModule,
  ]
})
export class TeachersModule { }