import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Country} from "../../../models/country";
import {CountryService} from "../../../services/country.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-country-edit',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './country-edit.component.html',
  styleUrl: './country-edit.component.css'
})
export class CountryEditComponent {
  @Input() country: Country = { id: undefined, name: '' };
  @Output() countryUpdated = new EventEmitter<void>();
  @Output() closeModal = new EventEmitter<void>();

  constructor(private countryService: CountryService) { }

  updateCountry(): void {
    this.countryService.updateCountry(this.country).subscribe(() => {
      this.countryUpdated.emit();
      this.closeModal.emit();
    });
  }

  close(): void {
    this.closeModal.emit();
  }
}
