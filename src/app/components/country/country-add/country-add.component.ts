import {Component, EventEmitter, Output} from '@angular/core';
import {Country} from "../../../models/country";
import {CountryService} from "../../../services/country.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-country-add',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './country-add.component.html',
  styleUrl: './country-add.component.css'
})
export class CountryAddComponent {
  newCountry: Country = { name: '' };
  @Output() countryAdded = new EventEmitter<void>();
  @Output() closeModal = new EventEmitter<void>();

  constructor(private countryService: CountryService) { }

  addCountry(): void {
    this.countryService.addCountry(this.newCountry).subscribe(() => {
      this.countryAdded.emit();
      this.newCountry = { name: '' };
      this.closeModal.emit();
    });
  }

  close(): void {
    this.closeModal.emit();
  }
}
