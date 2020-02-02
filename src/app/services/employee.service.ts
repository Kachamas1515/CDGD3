import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList = [];
  selectedEmployee;
  constructor(private http: HttpClient) { }

  hello() {
    console.log('Hello from service');
  }
  getEmployee(condition: any) {
    const params = new HttpParams({ fromObject: condition });
    return this.http
      .get<any[]>('/workshop-api/api/employee/queryEmployeeByCondition', {
        params
      })
      .pipe(
        tap(response => {
          this.employeeList = response;
        })
      );
  }

  getDepartment() {
    return this.http.get<any[]>('/workshop-api/api/department/');
  }

  addEmployee(payload) {
    return this.http.post('/workshop-api/api/employee', payload);
  }

  getEmployeeById(id) {
    return this.http.get<any>('/workshop-api/api/employee/queryEmployeeAndSkillById/' + id);
  }

  editEmployee(payload) {
    return this.http.put('/workshop-api/api/employee', payload);
  }

  deleteEmployeeById(id) {
    return this.http.delete<any>('/workshop-api/api/employee/' + id);
  }
}
