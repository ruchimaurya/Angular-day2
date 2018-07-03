import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {IEmployee} from './employee';
import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeComponent } from './employee/employee.component';
import {HttpClientModule} from '@angular/common/http';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {RouterModule} from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    EmployeeComponent,
    EmployeeDetailsComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'employeelist',component:EmployeelistComponent},
      {path:'employee-details/:id',component:EmployeeDetailsComponent},
       {path:'add-employee',component:AddEmployeeComponent},
      {path:'employee' , component:EmployeeComponent},
      {path:'', redirectTo:'employee',pathMatch:'full'},
      {path: '**',redirectTo:'employee',pathMatch:'full'}
     


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
