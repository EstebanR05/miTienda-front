import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/Core/base-component/base.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-brand-principal',
  templateUrl: './brand-principal.component.html',
  styleUrls: ['./brand-principal.component.scss']
})
export class BrandPrincipalComponent extends BaseComponent implements OnInit {

  constructor() { super() }

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
