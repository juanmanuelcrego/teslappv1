import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { first } from 'rxjs/operators';

import { HttpBaterias } from '../_services';

@Component({ selector:'list-bat', templateUrl: 'list.component.html' })
export class ListComponent implements OnInit, AfterViewInit {
    baterias = null;
    todayString: string = new Date().toDateString();

    @ViewChild("prueba") prueba: ElementRef
    @ViewChild("pruebas") pruebas: ElementRef

    constructor(private httpBaterias: HttpBaterias) {}

    ngOnInit() {
        this.httpBaterias.getAll()
            .pipe(first())
            .subscribe(baterias => this.baterias = baterias); 
    }

    ngAfterViewInit() {
        console.log(this.prueba.nativeElement.innerHTML)

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