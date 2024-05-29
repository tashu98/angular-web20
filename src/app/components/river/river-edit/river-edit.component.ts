import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {River} from "../../../models/river";
import {RiverService} from "../../../services/river.service";

@Component({
  selector: 'app-river-edit',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './river-edit.component.html',
  styleUrl: './river-edit.component.css'
})
export class RiverEditComponent {
  @Input() river: River = { id: undefined, name: '', length_km: 0 };
  @Output() riverUpdated = new EventEmitter<void>();
  @Output() closeModal = new EventEmitter<void>();

  constructor(private riverService: RiverService) { }

  updateRiver(): void {
    this.riverService.updateRiver(this.river).subscribe(() => {
      this.riverUpdated.emit();
      this.closeModal.emit();
    });
  }

  close(): void {
    this.closeModal.emit();
  }
}
