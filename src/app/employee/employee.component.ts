import { EmployeeHandlerService } from './../employee-handler.service';
import { Component, OnInit } from '@angular/core';
interface IResponse {
              status: string;
               data: Array<any>;
              }

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Array<any>;
  constructor(private employeeService: EmployeeHandlerService) { }

  ngOnInit() {
    this.getEmployees();
  }


  getEmployees() {
    this.employeeService.getEmployees()
    .subscribe((result: IResponse) => {
      this.employees = result.data;
    });
  }
  getEmployeeById() {

  }

  updateEmployee() {

  }
  deleteEmployee() {

  }
  onSubmit(name,age,salary) {
      console.log(name,age,salary);
      const data = {name: name, age: age, salary: salary};
      // const data2  = {name, age, salary};
      this.employeeService.createEmployee(data)
      .subscribe((result: any)=>{
        const formattedData = {employee_name: result.data.name,
          employee_salary: result.data.salary,  employee_age: result.data.age, id:  result.data.id}
        this.employees.unshift(formattedData);
      });
  }
}
