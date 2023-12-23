import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandPrincipalComponent } from './brand-principal.component';

describe('BrandPrincipalComponent', () => {
  let component: BrandPrincipalComponent;
  let fixture: ComponentFixture<BrandPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandPrincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
