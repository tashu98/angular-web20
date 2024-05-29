import { Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LayoutComponent} from "./components/layout/layout.component";
import {CountryComponent} from "./components/country/country.component";
import {CountryDetailComponent} from "./components/country/country-detail/country-detail.component";
import {TownComponent} from "./components/town/town.component";
import {TownDetailComponent} from "./components/town/town-detail/town-detail.component";
import {RiverComponent} from "./components/river/river.component";
import {RiverDetailComponent} from "./components/river/river-detail/river-detail.component";

export const routes: Routes = [
      { path: '', component: HomeComponent },
      { path: 'countries', component: CountryComponent },
      { path: 'country/:id', component: CountryDetailComponent },
      { path: 'towns', component: TownComponent },
      { path: 'town/:id', component: TownDetailComponent },
      { path: 'rivers', component: RiverComponent },
      { path: 'river/:id', component: RiverDetailComponent }
]
