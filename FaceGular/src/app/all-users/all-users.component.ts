import { Component, OnInit, Input } from '@angular/core';
import { User } from '../domain/user.model';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  @Input() usuarios: User[];
  @Input() nameSearch: string;
  constructor() { }

  ngOnInit() {
  }

}
