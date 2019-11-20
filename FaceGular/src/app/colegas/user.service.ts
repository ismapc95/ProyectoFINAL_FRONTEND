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
export class UserService {
    constructor(private http: HttpClient) {}

    // OBETENER MIS AMIGOS
    getSelfFriends(id: string) {
        return this.http.get(`${URL_BASE}/users/${id}/friendsRelationships`);
    }

    // AMISTADES PENDIENTES AUN
    // /users/{id}/pendingRelationships
}
