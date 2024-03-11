import {Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {Page404Component} from "./components/page404/page404.component";

export const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: '**', component: Page404Component
  }
];
