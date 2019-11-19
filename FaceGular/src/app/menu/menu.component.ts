import { Component, OnInit } from '@angular/core';
import { User } from '../domain/user.model';
import { LoginUserService } from './loginUserService.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userLogged: User;

  constructor(private loggedUser: LoginUserService) { }

  ngOnInit() {
    this.loggedUser.getUserLogin('4')
    .subscribe(
      (data: User) => this.userLogged = data,
      error => console.log(error),
      () => console.log('My item list is loaded!')
    );
  }

}
