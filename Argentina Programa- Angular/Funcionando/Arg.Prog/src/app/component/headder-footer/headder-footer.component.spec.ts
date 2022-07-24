import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadderFooterComponent } from './headder-footer.component';

describe('HeadderFooterComponent', () => {
  let component: HeadderFooterComponent;
  let fixture: ComponentFixture<HeadderFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadderFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadderFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
