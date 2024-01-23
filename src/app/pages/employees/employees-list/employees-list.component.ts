import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/interfaces/Employees.Interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit{

  public employees: Employee[] = [{
    id: 1,
    name: "Esteban Restrepo",
    email: "e05072003@gmail.com",
    jobTitle: "Programador",
    phone: "3116686210",
    imageUrl: "assets/employees/cv photo.jpg",
    employeeCode: "101",
  }]; 

  constructor() {}

  ngOnInit(): void {
  }

  public delete(): void {
    Swal.fire({
      title: "Estas Seguro?",
      text: "No podras devolver Esta Accion!",
      icon: "warning",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      showDenyButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: `Cancelar`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
}
