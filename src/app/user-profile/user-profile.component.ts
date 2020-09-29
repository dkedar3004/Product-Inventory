import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  firstName:string;
  constructor() { }

  ngOnInit(): void {
    this.userDetails=JSON.parse(localStorage.getItem("user"));
    console.log(this.userDetails);
  }

}
