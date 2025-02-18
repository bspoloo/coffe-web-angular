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
  public create(coffe : Coffe): Observable<Coffe>{
    console.log('Creating coffe: ', coffe);
    // coffe.flavors = [{name: 'choclate'}, {name: 'leche'}]
    return this.http.post<Coffe>(`${this.apiUrl}/coffes`,
      coffe
    );
  }
  public update(coffe : Coffe): Observable<Coffe>{
    return this.http.put<Coffe>(`${this.apiUrl}/coffes/${coffe.id}`, coffe);
  }
  public delete(id : number) : Observable<Coffe>{
    return this.http.delete<Coffe>(`${this.apiUrl}/coffes/${id}`);
  }
}
