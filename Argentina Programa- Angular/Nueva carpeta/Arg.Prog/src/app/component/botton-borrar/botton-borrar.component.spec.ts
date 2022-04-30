import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonBorrarComponent } from './botton-borrar.component';

describe('BottonBorrarComponent', () => {
  let component: BottonBorrarComponent;
  let fixture: ComponentFixture<BottonBorrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottonBorrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottonBorrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
