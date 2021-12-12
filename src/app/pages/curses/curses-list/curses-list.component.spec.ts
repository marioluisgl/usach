import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursesListComponent } from './curses-list.component';

describe('CursesListComponent', () => {
  let component: CursesListComponent;
  let fixture: ComponentFixture<CursesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
