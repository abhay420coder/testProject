import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation.component';
import { BounceInComponent } from './bounce-in/bounce-in.component';
import { BounceOutComponent } from './bounce-out/bounce-out.component';
import { OpenCloseComponent } from './open-close/open-close.component';


const routes: Routes = [
  { 
    path: '', 
    component: AnimationComponent 
  }, 
  { 
    path: 'bounceIn', 
    component: BounceInComponent 
  }, 
  { 
    path: 'bounceOut', 
    component: BounceOutComponent 
  }, 
  { 
    path: 'openClose', 
    component: OpenCloseComponent 
  }, 
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationRoutingModule { }
