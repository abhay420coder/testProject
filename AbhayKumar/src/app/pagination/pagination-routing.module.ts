import { PaginationWithoutNgxPaginationComponent } from './pagination-without-ngx-pagination/pagination-without-ngx-pagination.component';
import { PaginationWithNgxPaginationComponent } from './pagination-with-ngx-pagination/pagination-with-ngx-pagination.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
  {
    path:'',
    component:PaginationComponent
  },
  {
    path:'paginationWithoutModule',
    component:PaginationWithoutNgxPaginationComponent
  },
  {
    path:'paginationWithModule',
    component:PaginationWithNgxPaginationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginationRoutingModule { }
