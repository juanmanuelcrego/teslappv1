import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

// arrays para guardar datos harcodeado, de usuarios, baterias y lineas
let users = JSON.parse(localStorage.getItem('users')) || [];
let baterias = JSON.parse(localStorage.getItem('baterias')) || [];
let lineas = JSON.parse(localStorage.getItem('lineas')) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) 
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                // USUARIOS
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users/register') && method === 'POST':
                    return register();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'GET':
                    return getUserById();
                case url.match(/\/users\/\d+$/) && method === 'PUT':
                    return updateUser();
                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                    return deleteUser();
                // BATERIAS
                case url.endsWith('/baterias/addbat') && method === 'POST':
                    return addbat();
                case url.endsWith('/baterias') && method === 'GET':
                    return getBaterias(); 
                case url.match(/\/baterias\/\d+$/) && method === 'GET':
                    return getBateriasById();
                case url.match(/\/baterias\/\d+$/) && method === 'PUT':
                    return updateBateria();
                case url.match(/\/baterias\/\d+$/) && method === 'DELETE':
                    return deleteBateria();
                // LINEAS
                case url.endsWith('/lineas/addlin') && method === 'POST':
                    return addLinea();
                case url.endsWith('/lineas') && method === 'GET':
                    return getLineas(); 
                case url.match(/\/lineas\/\d+$/) && method === 'GET':
                    return getLineasById();
                case url.match(/\/lineas\/\d+$/) && method === 'PUT':
                    return updateLinea();
                case url.match(/\/lineas\/\d+$/) && method === 'DELETE':
                    return deleteLinea();
                default:
                    return next.handle(request);
            }    
        }

        // routes functions

        // routes de user
        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user) return error('Username or password is incorrect');
            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: 'fake-jwt-token'
            })
        }

        function register() {
            const user = body

            if (users.find(x => x.username === user.username)) {
                return error('Username "' + user.username + '" is already taken')
            }

            user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }

        function getUsers() {
            if (!isLoggedIn()) return unauthorized();
            return ok(users);
        }

        function getUserById() {
            if (!isLoggedIn()) return unauthorized();

            const user = users.find(x => x.id === idFromUrl());
            return ok(user);
        }

        function updateUser() {
            if (!isLoggedIn()) return unauthorized();

            let params = body;
            let user = users.find(x => x.id === idFromUrl());

            if (!params.password) {
                delete params.password;
            }

            Object.assign(user, params);
            localStorage.setItem('users', JSON.stringify(users));

            return ok();
        }

        function deleteUser() {
            if (!isLoggedIn()) return unauthorized();

            users = users.filter(x => x.id !== idFromUrl());
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }

        // functions routes de baterias
        function addbat() {
            const bateria = body

            if (baterias.find(x => x.name === bateria.name)) {
                return error('La batería "' + bateria.name + '" ya existe')
            }

            bateria.id = baterias.length ? Math.max(...baterias.map(x => x.id)) + 1 : 1;
            baterias.push(bateria);
            localStorage.setItem('baterias', JSON.stringify(baterias));
            return ok();
        }

        function getBaterias() {
            if (!isLoggedIn()) return unauthorized();
            return ok(baterias);
        }

        function getBateriasById() {
            if (!isLoggedIn()) return unauthorized();
            const bateria = baterias.find(x => x.id === idFromUrl());
            return ok(bateria);
        }

        function updateBateria() {
            if (!isLoggedIn()) return unauthorized();
            let params = body;
            let bateria = baterias.find(x => x.id === idFromUrl());

            Object.assign(bateria, params);
            localStorage.setItem('baterias', JSON.stringify(baterias));

            return ok();
        }

        function deleteBateria() {
            if (!isLoggedIn()) return unauthorized();

            baterias = baterias.filter(x => x.id !== idFromUrl());
            localStorage.setItem('baterias', JSON.stringify(baterias));
            return ok();
        }

        // routes de líneas

        function addLinea() {
            const linea = body

            if (lineas.find(x => x.name === linea.name)) {
                return error('La línea "' + linea.name + '" ya existe')
            }

            linea.id = lineas.length ? Math.max(...lineas.map(x => x.id)) + 1 : 1;
            lineas.push(linea);
            localStorage.setItem('lineas', JSON.stringify(lineas));
            return ok();
        }

        function getLineas() {
            if (!isLoggedIn()) return unauthorized();
            return ok(lineas);
        }

        function getLineasById() {
            if (!isLoggedIn()) return unauthorized();
            const linea = lineas.find(x => x.id === idFromUrl());
            return ok(linea);
        }

        function updateLinea() {
            if (!isLoggedIn()) return unauthorized();
            let params = body;
            let linea = lineas.find(x => x.id === idFromUrl());

            Object.assign(linea, params);
            localStorage.setItem('lineas', JSON.stringify(lineas));

            return ok();
        }

        function deleteLinea() {
            if (!isLoggedIn()) return unauthorized();

            lineas = lineas.filter(x => x.id !== idFromUrl());
            localStorage.setItem('lineas', JSON.stringify(lineas));
            return ok();
        }

        // Middlewares propios para complementar las funciones utilizadas en el fake server

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
        }
    }
}

export const fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};