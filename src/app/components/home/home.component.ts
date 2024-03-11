import {Component, OnInit} from '@angular/core';
import {NgbDropdownModule, NgbScrollSpyModule} from "@ng-bootstrap/ng-bootstrap";
import {ContactComponent} from "./contact/contact.component";
import AOS from "aos";
import {NgOptimizedImage} from "@angular/common";
import {AboutComponent} from "./about/about.component";
import {ServicesComponent} from "./services/services.component";
import {TestimonialsComponent} from "./testimonials/testimonials.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbDropdownModule, NgbScrollSpyModule, ContactComponent, NgOptimizedImage, AboutComponent, ServicesComponent, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    AOS.init();
  }
}
