import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { HttpLineas } from '../_services';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    lineas = null;
    todayString: string = new Date().toDateString();

    constructor(private httpLineas: HttpLineas) {}

    ngOnInit() {
        this.httpLineas.getAll()
            .pipe(first())
            .subscribe(lineas => this.lineas = lineas);
    }

    deleteLinea(id: string) {
        const linea = this.lineas.find(x => x.id === id);
        linea.isDeleting = true;
        this.httpLineas.delete(id)
            .pipe(first())
            .subscribe(() => {
                this.lineas = this.lineas.filter(x => x.id !== id) 
            });
    }
}