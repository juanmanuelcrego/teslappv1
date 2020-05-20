import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { HttpBaterias, AlertService } from '../_services';

@Component({ templateUrl: 'nameBateria.component.html' })
export class NameBateria implements OnInit {
    form: FormGroup;
    name: string;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private httpBateriasService: HttpBaterias,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        }
    
}


