import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametersManagerComponent } from './parameters-manager.component';

describe('ParametersManagerComponent', () => {
  let component: ParametersManagerComponent;
  let fixture: ComponentFixture<ParametersManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametersManagerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametersManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
