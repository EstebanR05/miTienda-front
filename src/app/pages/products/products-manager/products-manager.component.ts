import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/Core/base-component/base.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-manager',
  templateUrl: './products-manager.component.html',
  styleUrls: ['./products-manager.component.scss'],
})
export class ProductsManagerComponent extends BaseComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    public location: Location,
    private router: Router
  ) { super() }

  ngOnInit(): void {
    this.form = this.fb.group({
      product: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      reference: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  public saveProducts(): void {
    if (this.form.valid) {
      Swal.fire({
        icon: "question",
        title: "Deseas Guardar Estos Cambios?",
        showDenyButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `Cancelar`
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
          this.router.navigate(['/layout/products']);
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  }
}
