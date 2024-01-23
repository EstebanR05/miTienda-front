import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/Core/base-component/base.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-brand-manager',
  templateUrl: './brand-manager.component.html',
  styleUrls: ['./brand-manager.component.scss']
})
export class BrandManagerComponent extends BaseComponent implements OnInit {

  public id: any = this.activatedRoute.snapshot.paramMap.get('id');
  public versions: string[] = ['Coupe', 'Estandar']

  constructor(
    public location: Location,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) { super() }

  ngOnInit(): void {
    this.form = this.fb.group({
      brand: ['', Validators.required],
      version: ['', Validators.required]
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
          this.router.navigate(['/layout/brand']);
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  }


}
