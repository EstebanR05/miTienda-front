import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/shared/Core/base-component/base.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employees-manager',
  templateUrl: './employees-manager.component.html',
  styleUrls: ['./employees-manager.component.scss']
})
export class EmployeesManagerComponent extends BaseComponent implements OnInit {

  public id: any = this.activatedRoute.snapshot.paramMap.get('id');

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public location: Location
  ) { super() }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      jobTitle: ['', Validators.required],
      phone: ['', Validators.required],
      imageUrl: ['', Validators.required],
      employeeCode: ['', Validators.required],
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
          this.router.navigate(['/layout/employees']);
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  }

}
