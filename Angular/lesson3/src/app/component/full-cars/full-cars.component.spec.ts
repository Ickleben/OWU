import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCarsComponent } from './full-cars.component';

describe('FullCarsComponent', () => {
  let component: FullCarsComponent;
  let fixture: ComponentFixture<FullCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
