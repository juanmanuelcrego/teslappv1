import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BateriasRoutingModule } from './baterias-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import { AddEditBateria } from './add-edit-bateria.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BateriasRoutingModule
    ],
    declarations: [
        LayoutComponent,
        ListComponent,
        AddEditBateria
    ]
})
export class BateriasModule { }