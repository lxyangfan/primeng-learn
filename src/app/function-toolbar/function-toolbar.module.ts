import { NgModule } from '@angular/core';
import { FunctionToolBarComponent } from './function-toolbar.component';
import { ToolbarModule, SplitButtonModule, ButtonModule } from 'primeng/primeng';

@NgModule({
    declarations: [
        FunctionToolBarComponent
    ],
    imports: [
        ToolbarModule,
        ButtonModule,
        SplitButtonModule
    ]
})
export class FunctionToolBarModule { }
