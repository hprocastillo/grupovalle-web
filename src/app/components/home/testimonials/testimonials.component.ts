import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild} from '@angular/core';
import AOS from "aos";
import {CommonModule} from "@angular/common";
import {register} from "swiper/element/bundle";

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent implements OnInit, AfterViewInit {
  @ViewChild('swiperTestimonials') swiperTestimonials!: ElementRef<any>;

  ngOnInit() {
    AOS.init();
    register();
  }

  ngAfterViewInit() {
    const swiperParams = {
      speed: 600,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },

        1200: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      },
    };

    // now we need to assign all parameters to Swiper element
    Object.assign(this.swiperTestimonials.nativeElement, swiperParams);
    this.swiperTestimonials.nativeElement.initialize();
  }
}
