import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DealService {
  private BASE_URL = 'https://localhost:7040/api/Esuit'  ;

  constructor(private http: HttpClient) { }
  
  getAll(): Observable<any> {
    return this.http.get<any>('https://localhost:7040/api/Esuit');
  }

}