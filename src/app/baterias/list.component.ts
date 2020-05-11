import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { HttpBaterias } from '../_services';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    baterias = null;
    todayString: string = new Date().toDateString();

    constructor(private httpBaterias: HttpBaterias) {}

    ngOnInit() {
        this.httpBaterias.getAll()
            .pipe(first())
            .subscribe(baterias => this.baterias = baterias);       
    }

    deleteBateria(id: string) {
        const bateria = this.baterias.find(x => x.id === id);
        bateria.isDeleting = true;
        this.httpBaterias.delete(id)
            .pipe(first())
            .subscribe(() => {
                this.baterias = this.baterias.filter(x => x.id !== id) 
            });
    }
}