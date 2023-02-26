import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BounceOutComponent } from './bounce-out.component';

describe('BounceOutComponent', () => {
  let component: BounceOutComponent;
  let fixture: ComponentFixture<BounceOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BounceOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BounceOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
