import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Position } from './position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private BaseUrl="http://localhost:8080/position";

  constructor(private httpClient:HttpClient) { }

  getpositionlist(): Observable<Position[]>{
    return this.httpClient.get<Position[]>(`${this.BaseUrl}`);
  }
}
