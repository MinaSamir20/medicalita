import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  @Input({ required: true }) images: any[] = [];
  @Input() indecators = true;
  @Input() controls = false;
  @Input() autoSlider = true;
  @Input() sliderInterval = 3000;
  selectedIndex = 0;

  ngOnInit(): void {
    if (this.autoSlider) {
      this.autoSliderImage();
    }
  }

  autoSliderImage() {
    setInterval(() => {
      this.onNextClick();
    }, this.sliderInterval);
  }

  selectImage(index: number) {
    this.selectedIndex = index;
  }
  onPrevClick() {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }
  onNextClick() {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
}
