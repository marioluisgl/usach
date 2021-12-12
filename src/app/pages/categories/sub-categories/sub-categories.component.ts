import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { subcategories } from '../../dashboards/data';
import { CreateSubcategoriesComponent } from '../modals/create-subcategory/create-subcategories.component';
import { ISubCategoryModel } from '../models/sub-category.model';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent implements OnInit {
  subcategories: ISubCategoryModel[] = []; // subcategories
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
      { label: 'Subcategorías' },
      { label: 'Listado', active: true }
    ];

    this.fetchData();
  }

  private fetchData() {
    this.subcategories = subcategories;
  }

  public openModal() {
    this.modalService.open(this.filters, { centered: true });
  }

  public openModalCreateSubCategory(isEdit?: boolean) {
    let modalRef = this.modalService.open(CreateSubcategoriesComponent, {centered: true});  
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
