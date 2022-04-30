import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardandSoftComponent } from './hardand-soft.component';

describe('HardandSoftComponent', () => {
  let component: HardandSoftComponent;
  let fixture: ComponentFixture<HardandSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardandSoftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardandSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
