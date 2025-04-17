import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrainStrokeComponent } from './brain-stroke/brain-stroke.component';

const routes: Routes = [
  { path: 'brain', component: BrainStrokeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
