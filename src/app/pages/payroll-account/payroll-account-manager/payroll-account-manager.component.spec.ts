import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollAccountManagerComponent } from './payroll-account-manager.component';

describe('PayrollAccountManagerComponent', () => {
  let component: PayrollAccountManagerComponent;
  let fixture: ComponentFixture<PayrollAccountManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayrollAccountManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayrollAccountManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
