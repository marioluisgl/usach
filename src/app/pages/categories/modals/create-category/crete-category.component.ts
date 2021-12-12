import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-crete-category',
  templateUrl: './crete-category.component.html',
  styleUrls: ['./crete-category.component.scss']
})
export class CreteCategoryComponent implements OnInit {
  public categoryForm!: FormGroup;
  public modalTitle!: string;
  public isEditValue!: boolean;
  
  constructor(private activeModal: NgbActiveModal,
              private modalService: NgbModal,
              private router: Router) { 

  }

  @Input() set isEdit(value: boolean) {
    this.isEditValue = value;
    this.modalTitle = this.isEditValue ? 'Editar Categoría' : 'Crear Categoría';
  };

  ngOnInit(): void {
  }

  public createCategory() {
    this.activeModal.close();
  }

}
