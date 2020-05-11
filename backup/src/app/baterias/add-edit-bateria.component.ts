import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { HttpBaterias, AlertService } from '../_services';

@Component({ templateUrl: 'add-edit-bateria.component.html' })
export class AddEditBateria implements OnInit {
    form: FormGroup;
    id: string;
    isAddMode: boolean;
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
        this.id = this.route.snapshot.params['id'];
        this.isAddMode = !this.id;

        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            voltaje: ['', Validators.required],
            temperatura: ['', Validators.required]
        });

        if (!this.isAddMode) {
            this.httpBateriasService.getById(this.id)
                .pipe(first())
                .subscribe(x => {
                    this.f.name.setValue(x.name);
                    this.f.voltaje.setValue(x.voltaje);
                    this.f.temperatura.setValue(x.temperatura);
                });
        }
    }

    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        this.alertService.clear();

        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        if (this.isAddMode) {
            this.createBateria();
        } else {
            this.updateBateria();
        }
    }

    private createBateria() {
        this.httpBateriasService.addBateria(this.form.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Batería agregada con éxito!', { keepAfterRouteChange: true });
                    this.router.navigate(['.', { relativeTo: this.route }]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    private updateBateria() {
        this.httpBateriasService.update(this.id, this.form.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Se actualizó la batería', { keepAfterRouteChange: true });
                    this.router.navigate(['..', { relativeTo: this.route }]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}