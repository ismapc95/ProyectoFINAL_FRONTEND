import { Component, OnInit } from '@angular/core';
import { Historieta } from '../domain/historieta.model';
import { HistorietasService } from '../mis-historietas/historietas.service';

@Component({
  selector: 'app-historietas',
  templateUrl: './historietas.component.html',
  styleUrls: ['./historietas.component.css']
})
export class HistorietasComponent implements OnInit {
  messages: Historieta[];

  constructor(private msgService: HistorietasService) { }

  ngOnInit() {
    this.getAllHistorietas();
  }

  getAllHistorietas() {
    this.msgService.getAllMessages().subscribe(
      (data: Historieta[]) => this.messages = data,
      error => console.log(error),
      () => console.log('Recibidas todas las historias')
    );
  }

  updateHistorietas(historieta: Historieta) {
    console.log('Añadido!');
    this.messages.push(historieta);
  }
}
