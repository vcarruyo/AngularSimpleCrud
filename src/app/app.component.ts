import { Component } from '@angular/core';

import { Employee } from './moderls/employee'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  employeeArray: Employee [] = [
    {id: 1, name: "ada", country: "bosnia"},
    {id: 2, name: "alan", country: "nigeria"},
    {id: 3, name: "amanda", country: "sambia"}
  ]

  selectedEmployee: Employee = new Employee();

  addOrEdit(){
    if(this.selectedEmployee.id === 0){
      this.selectedEmployee.id=this.employeeArray.length+1;
      this.employeeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee();
  }

  openForEdit(employee:Employee){
    this.selectedEmployee=employee;
  }

  delete(){
    if(confirm('Are you sure you want to delete it?')){
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
  }
}
