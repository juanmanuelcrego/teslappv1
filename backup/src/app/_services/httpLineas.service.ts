import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Linea } from '../_models';

@Injectable({ providedIn: 'root' })
export class HttpLineas {
    private lineaSubject: BehaviorSubject<Linea>;
    public linea: Observable<Linea>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.lineaSubject = new BehaviorSubject<Linea>(JSON.parse(localStorage.getItem('linea')));
        this.linea = this.lineaSubject.asObservable();
    }

    public get lineaValue(): Linea {
        return this.lineaSubject.value;
    }

    addLinea(linea: Linea) {
        return this.http.post(`${environment.apiUrl}/lineas/addlin`, linea);
    }

    getAll() {
        return this.http.get<Linea[]>(`${environment.apiUrl}/lineas`);
    }

    getById(id: string) {
        return this.http.get<Linea>(`${environment.apiUrl}/lineas/${id}`);
    }

    update(id, params) {
        return this.http.put(`${environment.apiUrl}/lineas/${id}`, params)
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/lineas/${id}`)
    }
}