import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreteCategoryComponent } from './crete-category.component';

describe('CreteCategoryComponent', () => {
  let component: CreteCategoryComponent;
  let fixture: ComponentFixture<CreteCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreteCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreteCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
