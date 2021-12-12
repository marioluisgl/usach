import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-create-curse',
  templateUrl: './modal-create-curse.component.html',
  styleUrls: ['./modal-create-curse.component.scss']
})
export class ModalCreateCurseComponent implements OnInit {
  public curseForm!: FormGroup;
  public modalTitle!: string;
  public isEditValue!: boolean;

  constructor(private activeModal: NgbActiveModal,
              private modalService: NgbModal,
              private router: Router) { 
  }

  @Input() set isEdit(value: boolean) {
    this.isEditValue = value;
    this.modalTitle = this.isEditValue ? 'Editar curso' : 'Crear curso';
  };

  ngOnInit(): void {
  }

  public createCurse() {
    this.activeModal.close();
  }

}
