import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-subcategories',
  templateUrl: './create-subcategories.component.html',
  styleUrls: ['./create-subcategories.component.scss']
})
export class CreateSubcategoriesComponent implements OnInit {
  public subcategoryForm!: FormGroup;
  public modalTitle!: string;
  public isEditValue!: boolean;

  constructor(private activeModal: NgbActiveModal,
              private modalService: NgbModal,
              private router: Router) {

  }

  @Input() set isEdit(value: boolean) {
    this.isEditValue = value;
    this.modalTitle = this.isEditValue ? 'Editar Subcategoría' : 'Crear Subcategoría';
  };

  ngOnInit(): void {
  }

  public createSubcategory() {
    this.activeModal.close();
  }

}
