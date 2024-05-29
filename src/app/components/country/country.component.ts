import {Component, OnInit} from '@angular/core';
import {Country} from "../../models/country";
import {CountryService} from "../../services/country.service";
import {CountryAddComponent} from "./country-add/country-add.component";
import {CountryEditComponent} from "./country-edit/country-edit.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [
    CountryAddComponent,
    CountryEditComponent,
    RouterLink
  ],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent implements OnInit {
  countries: Country[] = [];
  selectedCountry: Country | null = null;
  showModal: boolean = false;
  showEditModal: boolean = false;
  editCountry: Country = { id: undefined, name: '' };

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.loadCountries();
  }

  loadCountries(): void {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
    });
  }

  deleteCountry(id: number): void {
    this.countryService.deleteCountry(id).subscribe(() => {
      this.loadCountries();
    });
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  openEditModal(country: Country): void {
    this.editCountry = { ...country };
    this.showEditModal = true;
  }

  closeEditModal(): void {
    this.showEditModal = false;
  }
}
