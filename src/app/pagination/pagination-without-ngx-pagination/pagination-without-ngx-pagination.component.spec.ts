import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationWithoutNgxPaginationComponent } from './pagination-without-ngx-pagination.component';

describe('PaginationWithoutNgxPaginationComponent', () => {
  let component: PaginationWithoutNgxPaginationComponent;
  let fixture: ComponentFixture<PaginationWithoutNgxPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationWithoutNgxPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationWithoutNgxPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
