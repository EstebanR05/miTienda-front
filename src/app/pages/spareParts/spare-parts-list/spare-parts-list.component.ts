import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/shared/Core/base-component/base.component';
import { SpareParts } from 'src/app/shared/interfaces/SpareParts.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-spare-parts-list',
  templateUrl: './spare-parts-list.component.html',
  styleUrls: ['./spare-parts-list.component.scss']
})
export class SparePartsListComponent extends BaseComponent implements OnInit {

  public spareParts: SpareParts[] = [{
    id: 1,
    name: 'Empaque de culata	',
    reference: 1112
  }];

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
