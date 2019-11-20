import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../colegas/user.service';
import { Relationship } from '../domain/relationship.model';

@Component({
  selector: 'app-mis-coleguillas',
  templateUrl: './mis-coleguillas.component.html',
  styleUrls: ['./mis-coleguillas.component.css']
})
export class MisColeguillasComponent implements OnInit {
  @Input() friends: Relationship[];

  constructor(private colegasServ: UserService) { }

  ngOnInit() {
  }

}
