import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseComponent } from 'src/app/shared/Core/base-component/base.component';

@Component({
  selector: 'app-products-manager',
  templateUrl: './products-manager.component.html',
  styleUrls: ['./products-manager.component.scss'],
})
export class ProductsManagerComponent extends BaseComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    public location: Location
  ) { super() }

  ngOnInit(): void {
    this.form = this.fb.group({
      product: ['', Validators.required],
      brand: ['', Validators.required],
      model: ['', Validators.required],
      reference: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }

  public saveProducts(): void {
    if (this.form.valid) {

    }
  }
}
