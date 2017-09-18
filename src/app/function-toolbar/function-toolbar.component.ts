import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/api';
import { ToolBarService } from '../service/toolbar.service';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'app-tool-bar',
    templateUrl: './function-toolbar.component.html'
})
export class FunctionToolBarComponent implements OnInit {


    items: MenuItem[];

    private buttons$: Observable<any>;

    constructor(private service: ToolBarService) {}

    ngOnInit() {
        this.buttons$ = this.service.getButtons;
        this.items = [
            { label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming'] }
        ];
    }

    onclick(url: string) {
        window.open(url);
    }

}