import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { teachers } from '../../dashboards/data';
import { CreateTeacherComponent } from '../modals/create-teacher.component';
import { ITeacherModel } from '../models/teacher.model';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.scss']
})
export class TeachersListComponent implements OnInit {
  teachers: ITeacherModel[] = [];
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
      { label: 'Profesores' },
      { label: 'Listado', active: true }
    ];

    this.fetchData();
  }

  private fetchData() {
    this.teachers = teachers;
  }

  public openModal() {
    this.modalService.open(this.filters, { centered: true });
  }

  public openModalCreateTeacher(isEdit?: boolean) {
    let modalRef = this.modalService.open(CreateTeacherComponent, {centered: true});  
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
