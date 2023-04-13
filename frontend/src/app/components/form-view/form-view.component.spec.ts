import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormView } from './form-view.component';

describe('FormView', () => {
  let component: FormView;
  let fixture: ComponentFixture<FormView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormView ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
