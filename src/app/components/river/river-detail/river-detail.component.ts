import {Component, OnInit} from '@angular/core';
import {River} from "../../../models/river";
import {Town} from "../../../models/town";
import {ActivatedRoute} from "@angular/router";
import {RiverService} from "../../../services/river.service";
import {TownService} from "../../../services/town.service";
import {ThousandsPipe} from "../../../pipes/thousands.pipe";

@Component({
  selector: 'app-river-detail',
  standalone: true,
  imports: [
    ThousandsPipe
  ],
  templateUrl: './river-detail.component.html',
  styleUrl: './river-detail.component.css'
})
export class RiverDetailComponent implements OnInit {
  river: River | undefined;
  towns: Town[] = [];

  constructor(
    private route: ActivatedRoute,
    private riverService: RiverService,
    private townService: TownService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.riverService.getRiver(id).subscribe(data => {
      this.river = data;
    });

    this.loadTowns(id);
  }

  loadTowns(riverId: number): void {
    this.townService.getTowns().subscribe(data => {
      this.towns = data.filter(town => town.rivers.includes(riverId));
    });
  }
}
