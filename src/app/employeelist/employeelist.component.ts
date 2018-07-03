import { Component, OnInit } from '@angular/core';
import {IEmployee} from '../employee';
import {EmployeeService} from '../employee.service'; 
import { Router } from '@angular/router';
@Component({
  //selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  constructor(private _employeeService:EmployeeService,private router: Router) { }
 employees: IEmployee[] = [];
  id:number;
  ngOnInit() {
    this.employees=this._employeeService.getEmployees();    

}

 
editBtn() {
      this.router.navigate(['/employee-details']);
     //   console.log(id);
        
};

DeleteBtn(id){

    var delEmp=confirm('Are you absolutely sure you want to delete?');
    
    if(delEmp){
      this._employeeService.deleteEmployee(id);

    }

}


}
