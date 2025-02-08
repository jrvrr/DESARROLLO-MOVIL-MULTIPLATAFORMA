import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  slides = [
    { image: 'assets/icon/servicio1.jpg' },
    { image: 'assets/icon/servicio2.jpg' },
    { image: 'assets/icon/servicio3.jpg' },
    { image: 'assets/icon/servicio4.jpg' },
    { image: 'assets/icon/servicio5.jpg' }
  ];

  currentIndex = 0;

  nextSlide() {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
