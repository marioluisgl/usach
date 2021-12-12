import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.scss']
})
export class CreateTeacherComponent implements OnInit {
  public teacherForm!: FormGroup;
  public modalTitle!: string;
  public isEditValue!: boolean;

  constructor(private activeModal: NgbActiveModal,
              private modalService: NgbModal,
              private router: Router) { }

  @Input() set isEdit(value: boolean) {
    this.isEditValue = value;
    this.modalTitle = this.isEditValue ? 'Editar Profesor' : 'Crear Profesor';
  };

  ngOnInit(): void {
  }

  public createTeacher() {
    this.router.navigate(['/teacher/details', '#ID0001']);
    this.activeModal.close();
  }

}
