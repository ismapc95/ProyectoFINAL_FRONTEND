import { Component, OnInit } from '@angular/core';
import { User } from '../domain/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-colegas',
  templateUrl: './colegas.component.html',
  styleUrls: ['./colegas.component.css']
})
export class ColegasComponent implements OnInit {
  usuarios: User[];
  constructor(private userServ: UserService) { }

  ngOnInit() {
    this.allUsers();
  }

  allUsers() {
    this.userServ.getAllUsers().subscribe(
      (data: User[]) => this.usuarios = data,
      error => console.log(error),
      () => console.log('Recibidos todos los usuarios')
    );
  }
}
