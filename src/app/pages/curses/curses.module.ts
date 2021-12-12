import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { CursesRoutingModule } from './curses-routing.module';
import { CursesListComponent } from './curses-list/curses-list.component';
import { ModalCreateCurseComponent } from './modals/create-curse/modal-create-curse.component';


@NgModule({
  declarations: [
    CursesListComponent,
    ModalCreateCurseComponent
  ],
  imports: [
    CommonModule,
    CursesRoutingModule,
    SharedModule,
    NgbModule,
  ]
})
export class CursesModule { }