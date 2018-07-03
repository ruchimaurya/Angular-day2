import {Injectable} from'@angular/core';
import {IEmployee} from './employee';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()

export class EmployeeService {

    private _productUrl = '/api/employee-data.json';

    employeeList = [
        {
            "id": 0,
            "firstName": "Ruchi",
            "lastName": "Maurya",
            "email": "rm@gets.com",
            "contactNumber": 9867868715,
            "address": "hbsgbn",
            "userName": "ruchii",
            "password": "bnfujre",
            "gender": "female",
            "qualification": "PHD",
            "experiance": "3-4 year",
            "codingLanguages": ["Java", "PHP", "C/C++"]
        },
        {
            "id": 1,
            "firstName": "Prachi",
            "lastName": "Maurya",
            "email": "pm@gets.com",
            "contactNumber": 9867584768,
            "address": "hbsgbn",
            "userName": "prachim",
            "password": "bnfujre",
            "gender": "female",
            "qualification": "ME",
            "experiance": "Fresher",
            "codingLanguages": ["Java", "PHP", "Python"]
        },
        {
            "id": 2,
            "firstName": "Kshitij",
            "lastName": "Maurya",
            "email": "km@gets.com",
            "contactNumber": 9867845872,
            "address": "hbsgbn",
            "userName": "kk38",
            "password": "bnfujre",
            "gender": "male",
            "qualification": "BE",
            "experiance": "Fresher",
            "codingLanguages": ["Java", "PHP", ]
        }

    ];

    constructor(private _http: HttpClient, private router: Router) { }
    getEmployees(): IEmployee[] {
        return this.employeeList;
    }

    getEmployeeDetails(id): IEmployee[] {

        console.log(id);

        //   console.log(this.employeeList.filter(x => x.id === id));
        //    console.log(this.employeeList.map(a => a.id===id));
        console.log(this.employeeList[id]);

        return [this.employeeList[id]];


    }

    addNewEmployee(form): void {

        form.id = this.employeeList.length;
        console.log(form.codingLanguages);

        this.employeeList.push(form);
        alert("New Employee Added");
        this.router.navigate(['/employeelist']);

    }

    deleteEmployee(id): void {

        this.employeeList.splice(id, 1);
        alert('Element deleted.!!');
    }

    editEmployee(form){
        form.id = form.id;
        this.employeeList.splice(form.id, 1);
         this.employeeList.splice(form.id,0,form);
         
         this.router.navigate(['/employeelist']);



    }
}