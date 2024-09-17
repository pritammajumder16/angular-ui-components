import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  currentIndex: number = 0;
  items: Array<{ imgSrc: string; alt: string }> = [
    {
      imgSrc: 'https://via.placeholder.com/600x400?text=Slide+1',
      alt: 'Slide 1',
    },
    {
      imgSrc: 'https://via.placeholder.com/600x400?text=Slide+2',
      alt: 'Slide 2',
    },
    {
      imgSrc: 'https://via.placeholder.com/600x400?text=Slide+3',
      alt: 'Slide 3',
    },
  ];

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    console.log(this.currentIndex);
  }

  prevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.items.length) % this.items.length;
  }

  setSlide(index: number): void {
    this.currentIndex = index;
  }
}
