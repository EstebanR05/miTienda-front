import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/interfaces/Employees.Interface';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit{

  public employees: Employee[] = []; 

  constructor() {}

  ngOnInit(): void {
  }

}
