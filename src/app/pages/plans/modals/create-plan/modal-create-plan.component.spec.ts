import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreatePlanComponent } from './modal-create-plan.component';

describe('ModalCreatePlanComponent', () => {
  let component: ModalCreatePlanComponent;
  let fixture: ComponentFixture<ModalCreatePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreatePlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreatePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
