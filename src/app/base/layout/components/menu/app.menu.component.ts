import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../../service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    constructor(public layoutService: LayoutService) {}

    ngOnInit() {
        this.model = [
            {
                label: 'INICIO',
                items: [
                    {
                        label: 'Dashboard',
                        icon: 'pi pi-fw pi-home',
                        routerLink: ['/layout/dashboard'],
                    },
                    {
                        label: 'Lista De Productos',
                        icon: 'pi pi-fw pi-wrench',
                        routerLink: ['/layout/products'],
                    },
                    {
                        label: 'Ventas',
                        icon: 'pi pi-fw pi-shopping-bag',
                        routerLink: ['/layout/sales'],
                    },
                    {
                        label: 'Nomina',
                        icon: 'pi pi-fw pi-dollar',
                        routerLink: ['/layout/payroll-account'],
                    },
                    {
                        label: 'Configuracion',
                        icon: 'pi pi-fw pi-cog',
                        items: [
                            {
                                label: 'Trabajadores',
                                icon: 'pi pi-fw pi-users',
                                routerLink: ['/layout/employees'],
                            },
                            {
                                label: 'Repuestos',
                                icon: 'pi pi-fw pi-wrench',
                                routerLink: ['/layout/spareParts'],
                            },
                            
                            {
                                label: 'Marcas',
                                icon: 'pi pi-fw pi-car',
                                routerLink: ['/layout/brand'],
                            },
                        ],
                    },
                ],
            },
        ];
    }
}
