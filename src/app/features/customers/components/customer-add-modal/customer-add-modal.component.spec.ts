import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAddModalComponent } from './customer-add-modal.component';

describe('CustomerEditModalComponent', () => {
  let component: CustomerAddModalComponent;
  let fixture: ComponentFixture<CustomerAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerAddModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
