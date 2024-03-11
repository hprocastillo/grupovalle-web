import {Component, OnInit} from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
}
