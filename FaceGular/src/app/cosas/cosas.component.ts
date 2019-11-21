import { Component, OnInit } from '@angular/core';
import { Historieta } from '../domain/historieta.model';
import { HistorietasService } from '../mis-historietas/historietas.service';
import { LoginUserService } from '../menu/loginUserService.service';
import { UserService } from '../colegas/user.service';
import { Relationship } from '../domain/relationship.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-cosas',
  templateUrl: './cosas.component.html',
  styleUrls: ['./cosas.component.css']
})
export class CosasComponent implements OnInit {
  messages: Historieta[];
  friends: Relationship[];
  constructor(private msgService: HistorietasService, private loged: LoginUserService, private friendServ: UserService) { }

  ngOnInit() {
    this.selfStory();
    this.selfAllFriendships();
  }

  selfStory() {
    this.msgService.getSelfMessages(String(this.loged.idLogUser)).subscribe(
      (data: Historieta[]) => this.messages = data,
      error => console.log(error),
      () => console.log('Recibidas todas mis historias')
    );
  }

  selfAllFriendships() {
    this.friendServ.getSelfFriends(String(this.loged.idLogUser)).subscribe(
      (data: Relationship[]) => this.friends = data
    );
    this.friendServ.getSelfFriendsPending(String(this.loged.idLogUser)).subscribe(
      (data: Relationship[]) => this.friends = this.friends.concat(data)
    );
  }


}
