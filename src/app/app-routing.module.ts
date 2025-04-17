import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrainStrokeComponent } from './brain-stroke/brain-stroke.component';
import { RespiratoryDiseaseComponent } from './respiratory-disease/respiratory-disease.component';

const routes: Routes = [
  { path: '', redirectTo: '/brain', pathMatch: 'full' },
  { path: 'brain', component: BrainStrokeComponent },
  { path: 'resp', component: RespiratoryDiseaseComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
