import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmployeesListComponent } from '../employees-list/employees-list.component';
import { Employee } from '../Employee';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  
  Emp:Employee=new Employee();
  ErrorMsg:string="Enter All Inputs."
 
  constructor(private _Employee:EmployeeService) { }

  ngOnInit() {
  
  }

  SaveData(): void {

   this._Employee.AddEmployee(this.Emp);
    this.Emp=new Employee();
  }

}



