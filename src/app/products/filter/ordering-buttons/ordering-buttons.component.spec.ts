import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingButtonsComponent } from './ordering-buttons.component';

describe('OrderingButtonsComponent', () => {
  let component: OrderingButtonsComponent;
  let fixture: ComponentFixture<OrderingButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderingButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderingButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
