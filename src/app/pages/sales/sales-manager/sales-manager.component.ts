import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/Core/base-component/base.component';
import { Sales } from 'src/app/shared/interfaces/Sales.interface';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sales-manager',
  templateUrl: './sales-manager.component.html',
  styleUrls: ['./sales-manager.component.scss']
})
export class SalesManagerComponent extends BaseComponent implements OnInit {

  public id: any = this.activatedRoute.snapshot.paramMap.get('id');
  public principalPrice: number = 0;
  public elaborationDate: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public location: Location,
  ) { super() }

  ngOnInit(): void {
    this.form = this.fb.group({
      product: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      reference: ['', Validators.required],
      quantity: ['', Validators.required],
      sellPrice: ['', Validators.required],
    });
  }

  public save(): void {
    const sell: Sales = {
      id: parseInt(this.id),
      principalPrice: this.principalPrice,
      elaborationDate: this.elaborationDate,
      product: this.form.value.product,
      brand: this.form.value.product,
      model: this.form.value.product,
      reference: this.form.value.product,
      quantity: this.form.value.product,
      sellPrice: this.form.value.product
    }

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
          this.router.navigate(['/layout/sales']);
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  }
}
