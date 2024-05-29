import {Component, OnInit} from '@angular/core';
import {RiverService} from "../../services/river.service";
import {River} from "../../models/river";
import {RouterLink} from "@angular/router";
import {RiverAddComponent} from "./river-add/river-add.component";
import {RiverEditComponent} from "./river-edit/river-edit.component";

@Component({
  selector: 'app-river',
  standalone: true,
  imports: [
    RouterLink,
    RiverAddComponent,
    RiverEditComponent
  ],
  templateUrl: './river.component.html',
  styleUrl: './river.component.css'
})
export class RiverComponent implements OnInit {
  rivers: River[] = [];
  selectedRiver: River | null = null;
  showModal: boolean = false;
  showEditModal: boolean = false;
  editRiver: River = { id: undefined, name: '', length_km: 0 };

  constructor(private riverService: RiverService) { }

  ngOnInit(): void {
    this.loadRivers();
  }

  loadRivers(): void {
    this.riverService.getRivers().subscribe(data => {
      this.rivers = data;
    });
  }

  deleteRiver(id: number): void {
    this.riverService.deleteRiver(id).subscribe(() => {
      this.loadRivers();
    });
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  openEditModal(river: River): void {
    this.editRiver = { ...river };
    this.showEditModal = true;
  }

  closeEditModal(): void {
    this.showEditModal = false;
  }
}
