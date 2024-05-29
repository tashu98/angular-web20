import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Town} from "../models/town";

@Injectable({
  providedIn: 'root'
})
export class TownService {
  private apiUrl = 'http://localhost:3000/towns'
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  getTowns() : Observable<Town[]>{
    return this.http.get<Town[]>(this.apiUrl)
  }
  getTown(id: number) : Observable<Town>{
    return this.http.get<Town>(`${this.apiUrl}/${id}`)
  }

  addTown(town: any) : Observable<Town>{
    return this.http.post<Town>(this.apiUrl, town, {headers: this.headers})
  }

  updateTown(town: any) : Observable<Town>{
    return this.http.put<Town>(`${this.apiUrl}/${town.id}`, town, {headers: this.headers})
  }

  deleteTown(id: number) : Observable<Town>{
    return this.http.delete<Town>(`${this.apiUrl}/${id}`, {headers: this.headers})
  }
}
