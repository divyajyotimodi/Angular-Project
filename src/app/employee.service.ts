import { Injectable } from '@angular/core';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  EmpList:Employee[]=[];
  HasError:Boolean=false;

  constructor() { }

  getEmployees(){

    return this.EmpList;

  }

  AddEmployee(Emp){
    if(Emp.Name!=null && Emp.Location!=null && Emp.Designation!=null && Emp.Salary!=null) 
   {
    this.HasError=false;
    this.EmpList.push(Emp);
    
   }
   else{
    this.HasError=true;
   }
  }
  
}

