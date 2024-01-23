import { Component } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({ template: '' })
export class BaseComponent {

    public form!: FormGroup;
    public token: any = environment.auth.JWT;
    public apiUrl = environment._url;

    constructor() {}

    getControl(control: string, form: FormGroup = this.form): AbstractControl {
        return form.controls[control];
    }
}
