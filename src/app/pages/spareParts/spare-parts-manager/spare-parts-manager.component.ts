import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/Core/base-component/base.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-spare-parts-manager',
  templateUrl: './spare-parts-manager.component.html',
  styleUrls: ['./spare-parts-manager.component.scss']
})
export class SparePartsManagerComponent extends BaseComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    public location: Location,
    private router: Router
  ) { super() }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      reference: ['', Validators.required]
    });
  }

  public save(): void {
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
          this.router.navigate(['/layout/spareParts']);
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  }
}
