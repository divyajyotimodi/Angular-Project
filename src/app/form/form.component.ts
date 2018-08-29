import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  EmpList:Array<Employee>=[];
  obj:Employee
  ErrorMsg:string="Enter All Inputs."
  HasError:Boolean=false;
  constructor() { }

  ngOnInit() {
    this.obj=new Employee();
  }

  SaveData(): void {

   if(this.obj.Name!=null && this.obj.Location!=null && this.obj.Designation!=null && this.obj.Salary!=null) 
   {
    this.HasError=false;
    this.EmpList.push(this.obj);
    this.obj=new Employee();
    
   }
   else{
    this.HasError=true;
   }
    
  }

}

class Employee{
  Name:string;
  Location:string;
  Designation:string; 
  Salary:number;
}

class Dev extends Employee{


}