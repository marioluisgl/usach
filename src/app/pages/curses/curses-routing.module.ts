import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursesListComponent } from './curses-list/curses-list.component';


const routes: Routes = [
  {
    path: 'list', component: CursesListComponent
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CursesRoutingModule { }