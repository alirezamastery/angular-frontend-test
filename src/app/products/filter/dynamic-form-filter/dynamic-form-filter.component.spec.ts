import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormFilterComponent } from './dynamic-form-filter.component';

describe('DynamicFormFilterComponent', () => {
  let component: DynamicFormFilterComponent;
  let fixture: ComponentFixture<DynamicFormFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
