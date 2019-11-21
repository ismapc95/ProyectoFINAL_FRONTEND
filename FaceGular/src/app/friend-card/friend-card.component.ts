import { Component, OnInit, Input } from '@angular/core';
import { Relationship } from '../domain/relationship.model';
import { UserService } from '../colegas/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.css']
})
export class FriendCardComponent implements OnInit {
  @Input() friend: Relationship;
  constructor(private userServ: UserService, private router: Router) { }

  ngOnInit() {
  }

  deleteReqFriend(id: string) {
    console.log('ID TO DELETE ' + id);
    this.userServ.deleteFriendship(id).subscribe();
    this.router.navigate(['/home']);
  }

}
