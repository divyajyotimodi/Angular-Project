import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    EmployeesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
