import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';
@Component(
    {
        selector: 'Employee-ui',
        templateUrl: './UI/MISUser.html'
    })
export class EmployeeComponent {

    //EmployeeObj: Employee = new Employee(1001, 'Rameshkartik', 'rameshkartik@gmail.com', 'AB1010', new Date('01/01/2010'));

    EmployeeObj: Employee = new Employee();

    Employees: Array<Employee> = new Array<Employee>();
     
    constructor() {

    }

    Add() {
        this.Employees.push(this.EmployeeObj);
        this.Employees = this.Employees.slice();
        this.EmployeeObj = new Employee();
        alert("Record Added");
        alert(this.Employees.length);
    }

    Update() {
        alert("Record Updated");
    }

    Select(empSelected: Employee) {
        this.EmployeeObj = Object.assign({}, empSelected);
    }

}


