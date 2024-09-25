import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com'; // Sample API URL

  constructor(private http: HttpClient) { }

  // GET Request
  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/posts/1`);
  }

  // POST Request
  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/posts`, data);
  }

  // PUT Request
  putData(data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/posts/1`, data);
  }

  // DELETE Request
  deleteData(): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/posts/1`);
  }

  // PATCH Request
  patchData(data: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/posts/1`, data);
  }

  // HEAD Request
  headData(): Observable<any> {
    return this.http.head<any>(`${this.apiUrl}/posts/1`);
  }
}
