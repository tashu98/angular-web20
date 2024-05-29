import {Component, OnInit} from '@angular/core';
import {TownAddComponent} from "./town-add/town-add.component";
import {TownEditComponent} from "./town-edit/town-edit.component";
import {RouterLink} from "@angular/router";
import {Town} from "../../models/town";
import {TownService} from "../../services/town.service";
import {ThousandsPipe} from "../../pipes/thousands.pipe";
import {UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-town',
  standalone: true,
  imports: [
    TownAddComponent,
    TownEditComponent,
    RouterLink,
    ThousandsPipe,
    UpperCasePipe
  ],
  templateUrl: './town.component.html',
  styleUrl: './town.component.css'
})
export class TownComponent implements OnInit {
  towns: Town[] = [];
  selectedTown: Town | null = null;
  showModal: boolean = false;
  showEditModal: boolean = false;
  editTown: Town = { id: undefined, name: '', population: 0, country_id: 0, rivers: [] };

  constructor(private townService: TownService) { }

  ngOnInit(): void {
    this.loadTowns();
  }

  loadTowns(): void {
    this.townService.getTowns().subscribe(data => {
      this.towns = data;
    });
  }

  deleteTown(id: number): void {
    this.townService.deleteTown(id).subscribe(() => {
      this.loadTowns();
    });
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  openEditModal(town: Town): void {
    this.editTown = { ...town };
    this.showEditModal = true;
  }

  closeEditModal(): void {
    this.showEditModal = false;
  }
}
