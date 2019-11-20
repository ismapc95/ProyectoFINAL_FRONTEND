import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL_BASE = 'http://localhost:8080';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
    })
};

@Injectable()
export class LoginUserService {
    idLogUser = 3;
    constructor(private http: HttpClient) {}

    // GET DE USER POR ID PARA SIMULAR UN LOGIN
    getUserLogin() {
        return this.http.get(`${URL_BASE}/users/${this.idLogUser}`);
    }
}
