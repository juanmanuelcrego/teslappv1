import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LineasRoutingModule } from './lineas-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import { AddEditLinea } from './add-edit-linea.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        LineasRoutingModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        AddEditLinea
    ]
})
export class LineasModule { }