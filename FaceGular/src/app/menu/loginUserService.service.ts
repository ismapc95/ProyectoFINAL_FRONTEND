import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL_BASE = 'http://192.168.1.100:8080';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
    })
};

@Injectable()
export class LoginUserService {

    constructor(private http: HttpClient) {}

    // GET DE USER POR ID PARA SIMULAR UN LOGIN
    getUserLogin(id: string) {
        return this.http.get(`${URL_BASE}/users/${id}`);
    }

    // INSERT USER API
    // {
    //     "birthDate": "1995-12-29 00:00:00.000",
    //     "name": "Ismael",
    //     "pass": "1234",
    //     "startDate": "2019-12-29 00:00:00.000",
    //     "surname": "Pascual",
    //     "user": "ismapc95"
    //   }

}
