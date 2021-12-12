import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { plans, users } from '../../dashboards/data';
import { ModalCreatePlanComponent } from '../modals/create-plan/modal-create-plan.component';
import { IPlansModel } from '../models/plans.model';

@Component({
  selector: 'app-plans-list',
  templateUrl: './plans-list.component.html',
  styleUrls: ['./plans-list.component.scss']
})
export class PlansListComponent implements OnInit {
  plans: IPlansModel[] = []; // plans

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
      { label: 'Planes' },
      { label: 'Listado', active: true }
    ];

    this.fetchData();
  }


  private fetchData() {
    this.plans = plans;
  }

  public openModal() {
    this.modalService.open(this.filters, { centered: true });
  }

  public openModalCreatePlan(isEdit?: boolean) {
    let modalRef = this.modalService.open(ModalCreatePlanComponent, {centered: true});  
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
