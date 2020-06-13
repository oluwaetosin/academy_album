import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHandlerService {

  constructor(private httpClient: HttpClient) { }
  getEmployees() {
   return this.httpClient.get('http://dummy.restapiexample.com/api/v1/employees');

  }
  createEmployee(data) {
   return this.httpClient.post('http://dummy.restapiexample.com/api/v1/create', data);
  }
}
