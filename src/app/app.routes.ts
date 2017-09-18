import { FunctionToolBarComponent } from './function-toolbar/function-toolbar.component';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
    {
        path: 'demo',
        component: FunctionToolBarComponent
    },
    {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    },
    { path: '**', component: AppComponent }
];
