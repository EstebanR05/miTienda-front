import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparePartsManagerComponent } from './spare-parts-manager.component';

describe('SparePartsManagerComponent', () => {
  let component: SparePartsManagerComponent;
  let fixture: ComponentFixture<SparePartsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparePartsManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SparePartsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
