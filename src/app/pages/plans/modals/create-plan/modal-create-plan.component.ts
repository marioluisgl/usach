import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-create-plan',
  templateUrl: './modal-create-plan.component.html',
  styleUrls: ['./modal-create-plan.component.scss']
})
export class ModalCreatePlanComponent implements OnInit {
  public plansForm!: FormGroup;
  public modalTitle!: string;
  public isEditValue!: boolean;
 
  constructor(private activeModal: NgbActiveModal,
              private modalService: NgbModal,
              private router: Router) { 
  }

  @Input() set isEdit(value: boolean) {
    this.isEditValue = value;
    this.modalTitle = this.isEditValue ? 'Editar Plan' : 'Crear Plan';
  };

  ngOnInit(): void {
    console.log(this.isEditValue);
  }

  public createPlan() {
    this.router.navigate(['/plans/details', '#ID0001']);
    this.activeModal.close();
  }

}
