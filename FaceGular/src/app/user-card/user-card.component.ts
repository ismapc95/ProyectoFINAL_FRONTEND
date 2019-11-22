import { Component, OnInit, Input } from '@angular/core';
import { User } from '../domain/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() usuario: User;
  constructor() { }

  ngOnInit() {
  }

  showId(id: string) {
    console.log(`Click en ${id}`);
  }
}
