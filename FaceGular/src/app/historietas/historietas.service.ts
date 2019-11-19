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
export class HistorietasService {

    constructor(private http: HttpClient) {}

    // POST PARA NUEVA HISTORIA
    // postHistorieta(msg: Message): Observable<Message> {
    //     return this.http.post<MEssage>(URL_BASE, msg, httpOptions);
    // }

    // GET DE TODAS LAS HISTORIAS DE TUS AMISTADES + LAS TUYAS
    // getHistorietasId(id: string) {
    //     return this.http.get(`${URL_BASE}/${id}`);
    // }

    // getHistorietasList() {
    //     return this.http.get(URL_BASE);
    // }


    // UPDATE DE LA HISTORIA USANDO ENUMS
    // updateHistorieta(reaction: Reaction): Observable<Reaction> {
    //     const url = `${URL_BASE}/${item.id}`;
    //     return this.http.put<Reaction>(url, reaction, httpOptions);
    // }
}
