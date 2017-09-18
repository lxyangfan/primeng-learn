import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/api';


@Component({
    selector: 'app-tool-bar',
    templateUrl: './function-toolbar.component.html'
})
export class FunctionToolBarComponent implements OnInit {
    items: MenuItem[];
    ngOnInit() {
        this.items = [
            { label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming'] }
        ];
    }

}