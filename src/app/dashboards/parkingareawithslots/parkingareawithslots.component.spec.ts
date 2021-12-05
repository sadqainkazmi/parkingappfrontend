import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingareawithslotsComponent } from './parkingareawithslots.component';

describe('ParkingareawithslotsComponent', () => {
  let component: ParkingareawithslotsComponent;
  let fixture: ComponentFixture<ParkingareawithslotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingareawithslotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingareawithslotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
