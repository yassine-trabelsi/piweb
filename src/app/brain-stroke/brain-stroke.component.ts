import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-brain-stroke',
  templateUrl: './brain-stroke.component.html'
})
export class BrainStrokeComponent {
  selectedFile!: File;
  imagePreview: string | null = null;
  prediction: string = '';

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  submitImage() {
    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post<any>('http://127.0.0.1:5000/predict', formData).subscribe({
      next: (res) => {
        this.prediction = res.prediction;
      },
      error: (err) => {
        this.prediction = "Erreur lors de l'envoi.";
        console.error(err);
      }
    });
  }
}
