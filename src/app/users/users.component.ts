import { Component, OnInit } from '@angular/core';
import { Users } from './users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Users[] = [new Users(1, 'Sagun'), new Users(2, 'Ron')];

  constructor() {}

  ngOnInit() {}
}
