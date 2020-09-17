import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/userService';
import {MatDialog ,MatDialogRef  } from '@angular/material/dialog';
import { FormNavComponent } from "../form-nav/form-nav.component"
import { LoginPopUpComponent } from '../login-pop-up/login-pop-up.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  allUsers=[];
  allEmails= new Array();

  constructor(public formBuilder: FormBuilder,
              public userService : UserService,
              public dialogRef: MatDialogRef<FormNavComponent>,
              public dialog: MatDialog) { }

  ngOnInit() {
      this.allUsers=this.userService.getData();
      console.log(this.allUsers)


      this.registerForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  openDialog(status,data){
      this.dialog.open(LoginPopUpComponent, {
          height: '210px',
          width: '400px',
          data: { loginMessage: status, info: data }
      })
  }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
      if(this.allUsers.find(element=>(element.email==this.registerForm.value.email))){
        if(this.allUsers.find(element=>element.password==this.registerForm.value.password)){
           localStorage.setItem("islogged",JSON.stringify(true));
           this.dialogRef.close();
           this.openDialog("successful","Login Successful");
        }else{
           this.dialogRef.close();
           this.openDialog("wrongPassword","Please enter valid password!!!!!!");
        }
      }
      else{
           this.dialogRef.close();
           this.openDialog("emailDoesNotExist","Please SignUp First!!!!!!")
      }
  }

}