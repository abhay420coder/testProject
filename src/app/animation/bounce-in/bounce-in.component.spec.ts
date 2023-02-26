import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BounceInComponent } from './bounce-in.component';

describe('BounceInComponent', () => {
  let component: BounceInComponent;
  let fixture: ComponentFixture<BounceInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BounceInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BounceInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
