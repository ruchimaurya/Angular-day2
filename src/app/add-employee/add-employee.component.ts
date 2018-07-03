import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Employee} from '../models/employee.model';
import {ActivatedRoute} from '@angular/router';
import {IEmployee} from '../employee';
import {NgForm} from '@angular/forms';
import {EmployeeService} from '../employee.service';

@Component({
  // selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private _employeeService: EmployeeService) { }
  qualificationList = [];
  experiance = [];
  languageList = [];
  chechked = [];
  employeeData=new Employee();

  public model =new Employee();
  //public model =new Employee("ruchi","maurya","rm@gm.com",97245813,"jnsdkmrkf","rmaurya","123456","female","BE","fresher",this.chechked);
  languageObj = [{ languageName: "C/C++", IsEnabled: "false" },
    { languageName: "Java", IsEnabled: "true" },
    { languageName: "CSharp", IsEnabled: "true" },
    { languageName: "PHP", IsEnabled: "false" },
    { languageName: "Python", IsEnabled: "false" }];

  ngOnInit() {
    this.qualificationList = ["Diploma", "BE", "ME", "PHD"];
    this.experiance = ["Fresher", "1-2 year", "3-4 year", ">4 years"];
    this.languageList = ["c/c++", "java", "csharp", "php", "Python"];

  }

change (value) {
console.log(value);
if(this.chechked.indexOf(value) === -1 )
{
  this.chechked.push(value);
} 
else
{
  var index = this.chechked.indexOf(value);
  this.chechked.splice(index, 1);
}
console.log(this.chechked);
this.model.codingLanguages=this.chechked;

console.log("languageList: "+ this.model.codingLanguages);


}

  onSubmit(form: NgModule) {
    alert("Adding New Employee");
      //id of new user is undefined
      //console.log(this.employeeData.id);
      this.employeeData.codingLanguages=this.chechked;
         
      this._employeeService.addNewEmployee(this.employeeData);

  }

}
