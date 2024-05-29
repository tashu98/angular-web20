import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Country} from "./models/country";
import {Town} from "./models/town";
import {River} from "./models/river";
import {TownService} from "./services/town.service";
import {RiverService} from "./services/river.service";
import {CountryService} from "./services/country.service";
import {LayoutComponent} from "./components/layout/layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

}
