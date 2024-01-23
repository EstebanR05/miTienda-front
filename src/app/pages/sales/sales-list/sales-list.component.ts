import { Component, OnInit } from '@angular/core';
import { Sales } from 'src/app/shared/interfaces/Sales.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.scss']
})
export class SalesListComponent implements OnInit {

  public sales: Sales[] = [{
    id: 1,
    product: "Empaque de culata",
    brand: "Mazda 323",
    model: "1993",
    reference: 110,
    quantity: 2,
    principalPrice: 2000,
    sellPrice: 18000,
    elaborationDate: "12-30-23"
  }];

  constructor() { }

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
