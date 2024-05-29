import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {River} from "../models/river";

@Injectable({
  providedIn: 'root'
})
export class RiverService {
  private apiUrl = 'http://localhost:3000/rivers'
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  getRivers(): Observable<River[]> {
    return this.http.get<River[]>(this.apiUrl)
  }

  getRiver(id: number): Observable<River> {
    return this.http.get<River>(`${this.apiUrl}/${id}`)
  }

  addRiver(river: any): Observable<River> {
    return this.http.post<River>(this.apiUrl, river, {headers: this.headers})
  }

  updateRiver(river: any): Observable<River> {
    return this.http.put<River>(`${this.apiUrl}/${river.id}`, river, {headers: this.headers})
  }

  deleteRiver(id: number): Observable<River> {
    return this.http.delete<River>(`${this.apiUrl}/${id}`, {headers: this.headers})
  }
}
