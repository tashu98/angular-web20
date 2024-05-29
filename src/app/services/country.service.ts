import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Country} from "../models/country";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'http://localhost:3000/countries'
  private headers = { 'Content-Type': 'application/json' };

  constructor(private http: HttpClient) { }

  getCountries() : Observable<Country[]>{
    return this.http.get<Country[]>(this.apiUrl)
  }

  getCountry(id: number) : Observable<Country>{
    return this.http.get<Country>(`${this.apiUrl}/${id}`)
  }

  addCountry(country: any) : Observable<Country>{
    return this.http.post<Country>(this.apiUrl, country, {headers: this.headers})
  }

  updateCountry(country: any) : Observable<Country>{
    return this.http.put<Country>(`${this.apiUrl}/${country.id}`, country, {headers: this.headers})
  }

  deleteCountry(id: number) : Observable<Country>{
    return this.http.delete<Country>(`${this.apiUrl}/${id}`, {headers: this.headers})
  }
}
