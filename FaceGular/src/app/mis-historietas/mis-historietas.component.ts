import { Component, OnInit } from '@angular/core';
import { Historieta } from '../domain/historieta.model';
import { HistorietasService } from './historietas.service';

@Component({
  selector: 'app-mis-historietas',
  templateUrl: './mis-historietas.component.html',
  styleUrls: ['./mis-historietas.component.css']
})
export class MisHistorietasComponent implements OnInit {
  messages: Historieta[];

  constructor(private msgService: HistorietasService) { }

  ngOnInit() {
    this.msgService.getAllMessages().subscribe(
      (data: Historieta[]) => this.messages = data,
      error => console.error(),
      () => console.log('My message list is loaded!')
    );
  }

}
