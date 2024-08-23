import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Customer,
  CustomerResponse,
  DeleteResponse,
  UniqCustomerResponse,
  UpdateCustomer,
} from '../models/costumer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getCustomers(page: number, size: number): Observable<CustomerResponse> {
    return this.http.get<CustomerResponse>(
      `${this.apiUrl}/costumers/get-all?pageNumber=${page}&itemsPerPage=${size}`
    );
  }

  getCustomerById(id: number): Observable<UniqCustomerResponse> {
    return this.http.get<UniqCustomerResponse>(
      `${this.apiUrl}/costumers/get-by-id/${id}`
    );
  }

  deleteCustomer(id: number): Observable<DeleteResponse> {
    return this.http.delete<DeleteResponse>(
      `${this.apiUrl}/costumers/delete/${id}`
    );
  }

  updateCustomer(customer: Customer): Observable<UpdateCustomer> {
    return this.http.put<UpdateCustomer>(
      `${this.apiUrl}/costumers/update`,
      customer
    );
  }
}
