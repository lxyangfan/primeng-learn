import { ToolBarService } from './../service/toolbar.service';
import { NgModule } from '@angular/core';
import { FunctionToolBarComponent } from './function-toolbar.component';
import { ToolbarModule, SplitButtonModule, ButtonModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        FunctionToolBarComponent
    ],
    imports: [
        ToolbarModule,
        ButtonModule,
        SplitButtonModule,
        FormsModule,
        CommonModule
    ],
    providers: [
        ToolBarService
    ]
})
export class FunctionToolBarModule { }
