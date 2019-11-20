import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUserService } from '../menu/loginUserService.service';
import { Historieta } from '../domain/historieta.model';
import { HistorietasService } from '../mis-historietas/historietas.service';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-decir-algo',
  templateUrl: './decir-algo.component.html',
  styleUrls: ['./decir-algo.component.css']
})
export class DecirAlgoComponent implements OnInit {
  messageToInsert: string;
  @Output() propagarMsg = new EventEmitter<Historieta>();

  // tslint:disable-next-line: max-line-length
  constructor(private loginUser: LoginUserService, private histoService: HistorietasService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    console.log(`USER LOGGED AS ID: ${this.loginUser.idLogUser}`);
  }

  addMessage() {
    const msg = new Historieta();
    msg.id = null;
    msg.usersId = this.loginUser.idLogUser;
    const dattim = new Date();
    const fecha = `${dattim.getFullYear()}-${dattim.getMonth()}-${dattim.getDay()}`;
    const aux = `${fecha} ${dattim.getHours()}:${dattim.getMinutes()}:${dattim.getSeconds()}.${dattim.getMilliseconds()}`;
    msg.publishDate = aux;
    msg.content = this.messageToInsert;
    this.histoService.postMessage(msg).subscribe(
      (data: Historieta) => this.propagarMsg.emit(msg),
      error => console.log(error),
      () => console.log('OK')
    );
  }

}
