import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {River} from "../../../models/river";
import {RiverService} from "../../../services/river.service";

@Component({
  selector: 'app-river-add',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './river-add.component.html',
  styleUrl: './river-add.component.css'
})
export class RiverAddComponent {
  newRiver: River = { name: '', length_km: 0 };
  @Output() riverAdded = new EventEmitter<void>();
  @Output() closeModal = new EventEmitter<void>();

  constructor(private riverService: RiverService) { }

  addRiver(): void {
    this.riverService.addRiver(this.newRiver).subscribe(() => {
      this.riverAdded.emit();
      this.newRiver = { name: '', length_km: 0 };
      this.closeModal.emit();
    });
  }

  close(): void {
    this.closeModal.emit();
  }
}
