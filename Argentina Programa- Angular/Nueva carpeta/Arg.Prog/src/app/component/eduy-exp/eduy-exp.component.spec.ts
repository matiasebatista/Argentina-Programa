import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduyExpComponent } from './eduy-exp.component';

describe('EduyExpComponent', () => {
  let component: EduyExpComponent;
  let fixture: ComponentFixture<EduyExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduyExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EduyExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
