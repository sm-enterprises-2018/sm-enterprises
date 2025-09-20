import { Component, OnInit, OnDestroy } from '@angular/core';
// import { setInterval } from 'timers';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  currentImageIndex: number = 0;
  totalImages: number = 6;

  private intervalId!: number;

  ngOnInit() {
    if (typeof window !== 'undefined') {
      setInterval(() => {
        this.nextImage();
      }, 3000);
    }
  }
  

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.totalImages;
  }

  prevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.totalImages) % this.totalImages;
  }
}
