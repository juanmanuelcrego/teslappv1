import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Bateria } from '../_models';

@Injectable({ providedIn: 'root' })
export class HttpBaterias {
    private bateriaSubject: BehaviorSubject<Bateria>;
    public bateria: Observable<Bateria>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.bateriaSubject = new BehaviorSubject<Bateria>(JSON.parse(localStorage.getItem('bateria')));
        this.bateria = this.bateriaSubject.asObservable();
    }

    public get bateriaValue(): Bateria {
        return this.bateriaSubject.value;
    }

    addBateria(bateria: Bateria) {
        return this.http.post(`${environment.apiUrl}/baterias/addbat`, bateria);
    }

    getAll() {
        return this.http.get<Bateria[]>(`${environment.apiUrl}/baterias`);
    }

    getById(id: string) {
        return this.http.get<Bateria>(`${environment.apiUrl}/baterias/${id}`);
    }

    update(id, params) {
        return this.http.put(`${environment.apiUrl}/baterias/${id}`, params)
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/baterias/${id}`)
    }
}