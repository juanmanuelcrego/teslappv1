import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import { AddEditBateria } from './add-edit-bateria.component';
import { NameBateria } from './nameBateria.component'

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: ListComponent },
            { path: 'add', component: AddEditBateria },
            { path: 'name', component: NameBateria },
            { path: 'edit/:id', component: AddEditBateria }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BateriasRoutingModule { }