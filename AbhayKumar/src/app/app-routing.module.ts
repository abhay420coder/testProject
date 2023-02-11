import { PaginationModule } from './pagination/pagination.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'logIn',
    loadChildren: () => import('./log-in/log-in.module').then(m => m.LogInModule)
  },
  {
    path: 'animation',
    loadChildren: () => import('./animation/animation.module').then(m => m.AnimationModule)
  },
  {
    path: 'EmployeeDetails',
    component: EmployeeDetailsComponent
  },
  {
    path: 'pagination',
    loadChildren: () => import('./pagination/pagination.module').then(m => m.PaginationModule)
  },
  {
    path: '',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path: '**',
    component:PageNotFoundComponent
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
