import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { combineLatest } from 'rxjs';
import { activities, users } from '../../dashboards/data';
import { ModalAddActivityPlanComponent } from '../modals/add-activity/modal-add-activity-plan.component';
import { ModalCreatePlanComponent } from '../modals/create-plan/modal-create-plan.component';
import { IActivityModel } from '../models/activity.model';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.scss']
})
export class PlanDetailsComponent implements OnInit {
  activities: IActivityModel[] = []; // plans activities
  planID!: string;
  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor(private activatedRoute: ActivatedRoute,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.fetchData();
    combineLatest([this.activatedRoute.params]).subscribe(([params]: [any]) => {
      this.planID = params['id'];
      //BreadCrumb 
      this.breadCrumbItems = [
        { label: 'Planes', link: '/plans/list'},
        { label: this.planID },
        { label: 'Detalles', active: true }
      ];
    });
  }

  private fetchData() {
    this.activities = activities;
  }

  public openModalEditPlan(isEdit?: boolean) {
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

  public openModalAddActivity(isEdit?: boolean) {
    let modalRef = this.modalService.open(ModalAddActivityPlanComponent, {centered: true});  
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
