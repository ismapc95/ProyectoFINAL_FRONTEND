import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Historieta } from '../domain/historieta.model';

const URL_BASE = 'http://localhost:8080';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
    })
};

@Injectable()
export class HistorietasService {

    constructor(private http: HttpClient) {}

    // GET DE TODAS LAS HISTORIAS DE TUS AMISTADES + LAS TUYAS
    getAllMessages() {
        return this.http.get(`${URL_BASE}/messages`);
    }

    // GET DE SOLO TUS HISTORIAS
    getSelfMessages(id: string) {
        return this.http.get(`${URL_BASE}/messages/user/${id}`);
    }

    // POST PARA NUEVA HISTORIA
    postMessage(msg: Historieta): Observable<Historieta> {
        return this.http.post<Historieta>(`${URL_BASE}/messages`, msg, httpOptions);
    }

    // UPDATE DE LA HISTORIA USANDO ENUMS
    // updateHistorieta(reaction: Reaction): Observable<Reaction> {
    //     const url = `${URL_BASE}/${item.id}`;
    //     return this.http.put<Reaction>(url, reaction, httpOptions);
    // }
}
