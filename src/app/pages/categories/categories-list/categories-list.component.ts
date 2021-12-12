import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { categories } from '../../dashboards/data';
import { CreteCategoryComponent } from '../modals/create-category/crete-category.component';
import { CreateSubcategoriesComponent } from '../modals/create-subcategory/create-subcategories.component';
import { ICategoryModel } from '../models/category.model';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  categories: ICategoryModel[] = []; // categories
  active = 'Activo';
  inActive = 'No activo';

  //Pagination
  totalItems = 20;
  pageSize = 5;
  page = 1;

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  // Modal filter
  @ViewChild('filters') filters: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

    //BreadCrumb 
    this.breadCrumbItems = [
      { label: 'Categorías' },
      { label: 'Listado', active: true }
    ];

    this.fetchData();
  }

  private fetchData() {
    this.categories = categories;
  }

  public openModal() {
    this.modalService.open(this.filters, { centered: true });
  }

  public openModalCreateCategory(isEdit?: boolean) {
    let modalRef = this.modalService.open(CreteCategoryComponent, {centered: true});  
    modalRef.componentInstance.isEdit = isEdit;  
    modalRef.closed.subscribe(resp => {
      if (resp) {
        console.log(resp);
      }      
    }, err => {
      console.log(err);
    });
  }

}
