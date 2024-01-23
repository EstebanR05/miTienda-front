import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/Product.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public products: Product[] = [{
    id: 1,
    product: "Empaque de culata",
    brand: "mazda 323",
    model: "1993",
    reference: 110,
    quantity: 2,
    price: 2000
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
