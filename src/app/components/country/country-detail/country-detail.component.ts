import {Component, OnInit} from '@angular/core';
import {Country} from "../../../models/country";
import {Town} from "../../../models/town";
import {ActivatedRoute} from "@angular/router";
import {CountryService} from "../../../services/country.service";
import {TownService} from "../../../services/town.service";

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [],
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.css'
})
export class CountryDetailComponent implements OnInit {
  country: Country | undefined;
  towns: Town[] = [];

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private townService: TownService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.countryService.getCountry(id).subscribe(data => {
      this.country = data;
    });

    this.loadTowns(id);
  }

  loadTowns(countryId: number): void {
    this.townService.getTowns().subscribe(data => {
      this.towns = data.filter(town => town.country_id === countryId);
    });
  }
}
