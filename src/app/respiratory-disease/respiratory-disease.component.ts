import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-respiratory-disease',
  templateUrl: './respiratory-disease.component.html'
})
export class RespiratoryDiseaseComponent {
  selectedFile!: File;
  prediction: string = '';
  confidence: number | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  submitAudio() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post<any>('http://127.0.0.1:5001/predict', formData).subscribe({
      next: (res) => {
        this.prediction = res.prediction;
        this.confidence = res.confidence;
      },
      error: (err) => {
        this.prediction = "Erreur lors de l'envoi.";
        console.error(err);
      }
    });
  }
}
