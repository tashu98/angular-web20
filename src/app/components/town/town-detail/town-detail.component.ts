import {Component, OnInit} from '@angular/core';
import {TownService} from "../../../services/town.service";
import {Town} from "../../../models/town";
import {River} from "../../../models/river";
import {ActivatedRoute} from "@angular/router";
import {RiverService} from "../../../services/river.service";

@Component({
  selector: 'app-town-detail',
  standalone: true,
  imports: [],
  templateUrl: './town-detail.component.html',
  styleUrl: './town-detail.component.css'
})
export class TownDetailComponent implements OnInit {
  town: Town | undefined;
  rivers: River[] = [];
  averagePopulation: number | undefined;
  totalRivers: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private townService: TownService,
    private riverService: RiverService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.townService.getTown(id).subscribe(data => {
      this.town = data;
      this.loadRivers(data.rivers);
      this.calculateAveragePopulation();
      this.countRivers();
    });
  }

  loadRivers(riverIds: number[]): void {
    this.riverService.getRivers().subscribe(data => {
      this.rivers = data.filter(river => riverIds.includes(river.id!));
    });
  }


  calculateAveragePopulation(): void {
    this.townService.getTowns().subscribe(data => {
      const totalPopulation = data.reduce((acc, town) => acc + town.population, 0);
      this.averagePopulation = totalPopulation / data.length;
    });
  }

  countRivers(): void {
    this.townService.getTowns().subscribe(data => {
      const allRivers = data.flatMap(town => town.rivers);
      const uniqueRivers = new Set(allRivers);
      this.totalRivers = uniqueRivers.size;
    });
  }
}
