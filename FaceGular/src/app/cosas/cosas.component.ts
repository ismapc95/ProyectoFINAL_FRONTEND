import { Component, OnInit } from '@angular/core';
import { Historieta } from '../domain/historieta.model';
import { HistorietasService } from '../mis-historietas/historietas.service';
import { LoginUserService } from '../menu/loginUserService.service';

@Component({
  selector: 'app-cosas',
  templateUrl: './cosas.component.html',
  styleUrls: ['./cosas.component.css']
})
export class CosasComponent implements OnInit {
  messages: Historieta[];
  constructor(private msgService: HistorietasService, private loged: LoginUserService) { }

  ngOnInit() {
    this.onlySelfStory();
  }

  onlySelfStory() {
    this.msgService.getSelfMessages(String(this.loged.idLogUser)).subscribe(
      (data: Historieta[]) => this.messages = data,
      error => console.log(error),
      () => console.log('Recibidas todas mis historias')
    );
  }

}
