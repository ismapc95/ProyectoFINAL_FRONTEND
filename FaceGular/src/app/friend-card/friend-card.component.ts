import { Component, OnInit, Input } from '@angular/core';
import { Relationship } from '../domain/relationship.model';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.css']
})
export class FriendCardComponent implements OnInit {
  @Input() friend: Relationship;
  constructor() { }

  ngOnInit() {
  }

}
