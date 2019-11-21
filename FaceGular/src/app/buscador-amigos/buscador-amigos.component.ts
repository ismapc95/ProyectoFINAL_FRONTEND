import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador-amigos',
  templateUrl: './buscador-amigos.component.html',
  styleUrls: ['./buscador-amigos.component.css']
})
export class BuscadorAmigosComponent implements OnInit {
  userSearch: string;
  constructor() { }

  ngOnInit() {
  }

  filterUsers(param: any) {
    console.log(param);
  }
}
