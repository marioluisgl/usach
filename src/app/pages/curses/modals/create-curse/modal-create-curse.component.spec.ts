import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateCurseComponent } from './modal-create-curse.component';

describe('ModalCreateCurseComponent', () => {
  let component: ModalCreateCurseComponent;
  let fixture: ComponentFixture<ModalCreateCurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateCurseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateCurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
