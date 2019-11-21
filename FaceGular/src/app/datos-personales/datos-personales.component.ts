import { Component, OnInit } from '@angular/core';
import { User } from '../domain/user.model';
import { LoginUserService } from '../menu/loginUserService.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
  editableUser: User;

  constructor(private editableService: LoginUserService) { }

  ngOnInit() {
    this.editableService.getUserLogin()
    .subscribe(
      (data: User) => this.editableUser = data,
      error => console.log(error),
      () => console.log(`DATOS EDITABLES CARGADOS`)
    );
  }

}
