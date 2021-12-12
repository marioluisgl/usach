import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';


const routes: Routes = [
  {
    path: 'list', component: CategoriesListComponent
  },
  {
    path: 'sub-categories', component: SubCategoriesComponent
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoriesRoutingModule { }