import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUserService } from '../menu/loginUserService.service';
import { Historieta } from '../domain/historieta.model';
import { HistorietasService } from '../mis-historietas/historietas.service';
import { User } from '../domain/user.model';

@Component({
  selector: 'app-decir-algo',
  templateUrl: './decir-algo.component.html',
  styleUrls: ['./decir-algo.component.css']
})
export class DecirAlgoComponent implements OnInit {
  messageInsert: Historieta;
  currentUser: User;

  constructor(private loginUser: LoginUserService, private histoService: HistorietasService, private http: HttpClient) { }

  ngOnInit() {
    console.log(`USER LOGGED AS ID: ${this.loginUser.idLogUser}`);
    this.messageInsert = new Historieta();
    // addMessage() {
    //   // console.log(itemInsert);
    //   this.itemListService.addItem(itemInsert)
    //   .subscribe(data => this.myItems.push(itemInsert));
    // }
  }

  addMessage(messageInsert: Historieta) {
    event.preventDefault();
    this.messageInsert.id = null;
    this.messageInsert.usersId = this.loginUser.idLogUser;
    const fecha = new Date();
    this.messageInsert.publishDate = fecha.toLocaleDateString();
    this.messageInsert.content = 'eowifhwoefhwohef';
    console.log(messageInsert);
    // ERROR
    this.histoService.postMessage(this.messageInsert).subscribe(
      (data: Historieta) => console.log(data),
      error => console.log(error),
      () => console.log('My item list is loaded!')
    );
  }

}
