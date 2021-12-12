import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { curses } from '../../dashboards/data';
import { ModalCreateCurseComponent } from '../modals/create-curse/modal-create-curse.component';
import { ICursesModel } from '../models/curses.model';

@Component({
  selector: 'app-curses-list',
  templateUrl: './curses-list.component.html',
  styleUrls: ['./curses-list.component.scss']
})
export class CursesListComponent implements OnInit {
  curses: ICursesModel[] = [];

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
      { label: 'Cursos' },
      { label: 'Listado', active: true }
    ];

    this.fetchData();
  }

  private fetchData() {
    this.curses = curses;
  }

  public openModal() {
    this.modalService.open(this.filters, { centered: true });
  }

  public openModalCreateCurse(isEdit?: boolean) {
    let modalRef = this.modalService.open(ModalCreateCurseComponent, {centered: true});  
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
