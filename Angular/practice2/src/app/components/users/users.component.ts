import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from '../../../models/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  @Output()
  bubbleUp = new EventEmitter<User>();
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => this.users = value);
  }

  getBubble(user: User): void{
    console.log(user);
    this.bubbleUp.emit(user);
}
}
