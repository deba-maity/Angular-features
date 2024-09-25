import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RxjsService {
  private apiUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/users`);
  }
  getcus() {
    return this.http.get(this.apiUrl);
  }
}
