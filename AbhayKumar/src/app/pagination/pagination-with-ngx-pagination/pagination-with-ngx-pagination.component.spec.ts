import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationWithNgxPaginationComponent } from './pagination-with-ngx-pagination.component';

describe('PaginationWithNgxPaginationComponent', () => {
  let component: PaginationWithNgxPaginationComponent;
  let fixture: ComponentFixture<PaginationWithNgxPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationWithNgxPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationWithNgxPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
