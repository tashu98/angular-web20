import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Country} from "../../../models/country";
import {Town} from "../../../models/town";
import {River} from "../../../models/river";
import {TownService} from "../../../services/town.service";
import {CountryService} from "../../../services/country.service";
import {RiverService} from "../../../services/river.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-town-add',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './town-add.component.html',
  styleUrl: './town-add.component.css'
})
export class TownAddComponent implements OnInit {
  newTown: Town = { name: '', population: 0, country_id: 0, rivers: [] };
  countries: Country[] = [];
  rivers: River[] = [];
  @Output() townAdded = new EventEmitter<void>();
  @Output() closeModal = new EventEmitter<void>();

  constructor(private townService: TownService, private countryService: CountryService, private riverService: RiverService) { }

  ngOnInit(): void {
    this.loadCountries();
    this.loadRivers();
  }

  loadCountries(): void {
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
    });
  }

  loadRivers(): void {
    this.riverService.getRivers().subscribe(data => {
      this.rivers = data;
    });
  }

  addTown(): void {
    this.townService.addTown(this.newTown).subscribe(() => {
      this.townAdded.emit();
      this.newTown = { name: '', population: 0, country_id: 0, rivers: [] };
      this.closeModal.emit();
    });
  }

  close(): void {
    this.closeModal.emit();
  }
}
