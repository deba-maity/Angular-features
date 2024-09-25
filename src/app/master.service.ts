import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './Modal/Customer';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  GetCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/customer');
  }

  SaveCustomer(data: any) {
    return this.http.post('http://localhost:3000/customer', data);
  }

  GetCustomerByCode(code: any) {
    return this.http.get('http://localhost:3000/customer' + code);
  }
}
