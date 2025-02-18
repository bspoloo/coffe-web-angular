import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coffe } from '../interfaces/coffe.interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoffeService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Coffe[]> {
    return this.http.get<Coffe[]>(`${this.apiUrl}/coffes`);
  }
  public getOnById(id : number) : Observable<Coffe>{
    return this.http.get<Coffe>(`${this.apiUrl}/coffes/${id}`);
  }
}
