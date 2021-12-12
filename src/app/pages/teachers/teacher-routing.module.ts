import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersListComponent } from './teachers-list/teachers-list.component';


const routes: Routes = [
  {
    path: 'list', component: TeachersListComponent
  },
  {
    path: 'details/:id', component: TeachersListComponent
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeachersRoutingModule { }