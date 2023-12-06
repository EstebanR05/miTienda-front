import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../../service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'INICIO',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/layout/dashboard'] },
                    { label: 'Repuestos', icon: 'pi pi-fw pi-wrench', routerLink: ['/layout/spareParts'] },
                    { label: 'Ventas', icon: 'pi pi-fw pi-shopping-bag', routerLink: ['/layout/sales'] }
                ]
            },
        ];
    }
}
