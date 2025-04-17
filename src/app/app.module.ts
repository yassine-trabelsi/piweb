import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrainStrokeComponent } from './brain-stroke/brain-stroke.component';
import { RespiratoryDiseaseComponent } from './respiratory-disease/respiratory-disease.component';

@NgModule({
  declarations: [
    AppComponent,
    BrainStrokeComponent,
    RespiratoryDiseaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
