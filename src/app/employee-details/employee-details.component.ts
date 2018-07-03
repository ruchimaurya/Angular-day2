import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Employee} from '../models/employee.model';
import {ActivatedRoute} from '@angular/router';
import {IEmployee} from '../employee';
import {NgForm} from '@angular/forms';
import {EmployeeService} from '../employee.service';
import { Router } from '@angular/router';
@Component({
  //  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

id={};
  constructor(private _route: ActivatedRoute, private _employeeService: EmployeeService, private router: Router) {
       this.id = this._route.snapshot.paramMap.get('id');    
   console.log(this.id);
  
  }

  qualificationList = [];
  experiance = [];
  languageList = [];
  chechked = [];

 
  public model =new Employee();
  languageObj = [{ languageName: "C/C++", IsEnabled: "false" },
    { languageName: "Java", IsEnabled: "true" },
    { languageName: "CSharp", IsEnabled: "true" },
    { languageName: "PHP", IsEnabled: "false" },
    { languageName: "Python", IsEnabled: "false" }];

  employeedetail: any;

  ngOnInit() {

    this.qualificationList = ["Diploma", "BE", "ME", "PHD"];
    this.experiance = ["Fresher", "1-2 year", "3-4 year", ">4 years"];
    this.languageList = ["c/c++", "java", "csharp", "php", "Python"];

    this.employeedetail = this._employeeService.getEmployeeDetails(this.id);
    //this.model=this.employeedetail;
    console.log(this.employeedetail);
    
  }

  change(value) {
    console.log(value);
    if (this.chechked.indexOf(value) === -1) {
      this.chechked.push(value);
    }
    else {
      var index = this.chechked.indexOf(value);
      this.chechked.splice(index, 1);
    }
    console.log(this.chechked);


  }

  onSubmit(form: NgForm) {

    console.log(this.employeedetail[0]);
    this._employeeService.editEmployee(this.employeedetail[0]);
   // console.log("First name :" + this.employeedetail[0].firstName + "\nLastName: " + this.employeedetail[0].lastName + "\nEmail: " + this.employeedetail[0].email + "\nContact num: " + this.employeedetail[0].contactNumber + "\nAddress: " + this.employeedetail[0].address + "\nUser Name: " + this.employeedetail[0].userName + "\nPassword: " + this.employeedetail[0].password + "\nGender : " + this.employeedetail[0].gender + "\nQualification: " + this.employeedetail[0].qualification + "\nExperiance: " + this.employeedetail[0].experiance + "\nCoding Languages: " + this.employeedetail[0].codingLanguages);
  }

backToList(){
       this.router.navigate(['/employeelist']);
}


}
