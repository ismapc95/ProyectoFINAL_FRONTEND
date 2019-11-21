import { Component, OnInit, Input } from '@angular/core';
import { Historieta } from '../domain/historieta.model';

@Component({
  selector: 'app-mis-historietas',
  templateUrl: './mis-historietas.component.html',
  styleUrls: ['./mis-historietas.component.css']
})
export class MisHistorietasComponent implements OnInit {
  @Input() messages: Historieta[];

  constructor() { }

  ngOnInit() {
  }

}
