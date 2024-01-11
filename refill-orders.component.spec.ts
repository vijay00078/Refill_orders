import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefillOrdersComponent } from './refill-orders.component';

describe('RefillOrdersComponent', () => {
  let component: RefillOrdersComponent;
  let fixture: ComponentFixture<RefillOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefillOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefillOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
