import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneResultComponent } from './one-result.component';

describe('OneResultComponent', () => {
  let component: OneResultComponent;
  let fixture: ComponentFixture<OneResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
