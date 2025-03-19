import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = 'http://10.106.24.109:8083/admin/usersByObjective?objectiveId=1'; 

  constructor(private http: HttpClient) {}

  // Method to fetch data from API
  getData(): Observable<any> {
    console.log("Service class method called....")
    return this.http.get<any>(this.apiUrl);
  }
}

