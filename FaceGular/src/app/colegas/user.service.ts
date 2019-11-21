import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../domain/user.model';

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

    getAllUsers() {
        return this.http.get(`${URL_BASE}/users/`);
    }

    // OBETENER MIS AMIGOS
    getSelfFriends(id: string) {
        return this.http.get(`${URL_BASE}/users/${id}/friendsRelationships`);
    }

    // OBTENER AMIGOS PENDIENTES
    getSelfFriendsPending(id: string) {
        return this.http.get(`${URL_BASE}/users/${id}/pendingRelationships`);
    }

    setValuesUser(userToUpdate: User): Observable<User> {
        const id = userToUpdate.id;
        return this.http.put<User>(`${URL_BASE}/users/${id}`, userToUpdate, httpOptions);
    }

    deleteFriendship(id: string): Observable<{}> {
        return this.http.delete(`${URL_BASE}/users/relationship/${id}`, httpOptions);
    }
}
