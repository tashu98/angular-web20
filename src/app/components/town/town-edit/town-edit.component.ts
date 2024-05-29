import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Town} from "../../../models/town";
import {Country} from "../../../models/country";
import {River} from "../../../models/river";
import {TownService} from "../../../services/town.service";
import {CountryService} from "../../../services/country.service";
import {RiverService} from "../../../services/river.service";

@Component({
  selector: 'app-town-edit',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './town-edit.component.html',
  styleUrl: './town-edit.component.css'
})
export class TownEditComponent implements OnInit {
  @Input() town: Town = { id: undefined, name: '', population: 0, country_id: 0, rivers: [] };
  countries: Country[] = [];
  rivers: River[] = [];
  @Output() townUpdated = new EventEmitter<void>();
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

  updateTown(): void {
    this.townService.updateTown(this.town).subscribe(() => {
      this.townUpdated.emit();
      this.closeModal.emit();
    });
  }

  close(): void {
    this.closeModal.emit();
  }
}
