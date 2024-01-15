import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Senador } from '../models/senador';
import { Diputado } from '../models/diputado';

@Injectable({
  providedIn: 'root',
})
export class CongressService {
  readonly baseUrl = 'https://localhost:7271/api';

  constructor(private http: HttpClient) {}

  getSenators(): Observable<Senador[]> {
    return this.http.get<Senador[]>(`${this.baseUrl}/CamaraAlta`);
  }

  getDeputies(): Observable<Diputado[]> {
    return this.http.get<Diputado[]>(`${this.baseUrl}/CamaraBaja`);
  }
}
