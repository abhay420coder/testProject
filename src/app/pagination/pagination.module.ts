import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationRoutingModule } from './pagination-routing.module';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationWithoutNgxPaginationComponent } from './pagination-without-ngx-pagination/pagination-without-ngx-pagination.component';
import { PaginationWithNgxPaginationComponent } from './pagination-with-ngx-pagination/pagination-with-ngx-pagination.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PaginationComponent,
    PaginationWithoutNgxPaginationComponent,
    PaginationWithNgxPaginationComponent
  ],
  imports: [
    CommonModule,
    PaginationRoutingModule,
    MatButtonModule
  ]
})
export class PaginationModule { }
