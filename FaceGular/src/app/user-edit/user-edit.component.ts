import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginUserService } from '../menu/loginUserService.service';
import { User } from '../domain/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  editingUser: User;
  constructor(private router: Router, private route: ActivatedRoute, private currUserLog: LoginUserService) { }

  ngOnInit() {
    this.loadInfo();
  }

  loadInfo() {
    this.route.params.subscribe(
      params => {
        const id =  params.id as string;
        if (id != null) {
          this.currUserLog.getUserLogin().subscribe(
            (data: User) => this.editingUser = data,
            error => console.log(error),
            () => console.log(`Info cargada para ser editada`)
          );
        }
      }
    );
  }

  upgradeUser() {

  }

}
