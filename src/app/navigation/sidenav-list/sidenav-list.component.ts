import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormNavComponent } from '../../form-nav/form-nav.component';
import { Service } from '../../services/service';
import { Subscription } from 'rxjs';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  subscription: Subscription;
  hasloggedin;
  @Output() sidenavClose = new EventEmitter();
  constructor(public dialog: MatDialog,
    public service: Service) {
    this.subscription = this.service.getMessage().subscribe(message => {
      // if (message) {
      this.hasloggedin = message;
      // } 
    });
    this.hasloggedin = localStorage.getItem("isLogged") ? true : false;
  }

  ngOnInit(): void {
  }
  // public onSidenavClose = () => {
  //   this.router.navigate(['login']);
  //   this.sidenavClose.emit();
  // }
  login() {
    const dialogRef = this.dialog.open(FormNavComponent, {
      height: '500px',
      width: '700px',
    });
  }
  logout() {
    // this.hasloggedin=false;
    // this.service.sendMessage(false);    
    localStorage.clear();
    this.service.clearMessages();
  }
  viewProfile() {
    const dialogRef = this.dialog.open(UserProfileComponent, {
      height: '250px',
      width: '400px',
    });
  }
}
