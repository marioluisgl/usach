import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddActivityPlanComponent } from './modal-add-activity-plan.component';

describe('ModalAddActivityPlanComponent', () => {
  let component: ModalAddActivityPlanComponent;
  let fixture: ComponentFixture<ModalAddActivityPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddActivityPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddActivityPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
