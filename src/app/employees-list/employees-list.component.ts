import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  EmpList:Employee[]=[];

  constructor(private _Employees:EmployeeService) { }

  ngOnInit() {

    this.EmpList=this._Employees.getEmployees();

  }


}
