import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementInputComponent } from './measurement-input.component';

describe('MeasurementInputComponent', () => {
  let component: MeasurementInputComponent;
  let fixture: ComponentFixture<MeasurementInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurementInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
