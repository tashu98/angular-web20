import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {ShowIfDirective} from "../../directives/show-if.directive";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    ShowIfDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showInfo = false;

  toggleInfo(): void {
    this.showInfo = !this.showInfo;
  }
}
