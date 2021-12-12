import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { CreateSubcategoriesComponent } from './modals/create-subcategory/create-subcategories.component';
import { CreteCategoryComponent } from './modals/create-category/crete-category.component';


@NgModule({
  declarations: [
    CategoriesListComponent,
    SubCategoriesComponent,
    CreateSubcategoriesComponent,
    CreteCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule,
    NgbModule,
  ]
})
export class CategoriesModule { }