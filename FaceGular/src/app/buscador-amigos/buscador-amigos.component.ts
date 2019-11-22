import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buscador-amigos',
  templateUrl: './buscador-amigos.component.html',
  styleUrls: ['./buscador-amigos.component.css']
})
export class BuscadorAmigosComponent implements OnInit {
  userSearch: string;
  @Output() msgToFilter: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  filterUsers(searchValue: string) {
    this.msgToFilter.emit(searchValue);
  }
}
