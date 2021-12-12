import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-add-activity-plan',
  templateUrl: './modal-add-activity-plan.component.html',
  styleUrls: ['./modal-add-activity-plan.component.scss']
})
export class ModalAddActivityPlanComponent implements OnInit {
  public activityForm!: FormGroup;
  public modalTitle!: string;
  public isEditValue!: boolean;

  constructor(private activeModal: NgbActiveModal,
              private modalService: NgbModal) { 
  }

  @Input() set isEdit(value: boolean) {
    this.isEditValue = value;
    this.modalTitle = this.isEditValue ? 'Editar actividad' : 'Adicionar actividad';
  };

  ngOnInit(): void {
    console.log(this.isEditValue);
  }

}
