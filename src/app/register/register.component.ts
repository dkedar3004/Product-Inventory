import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormNavComponent } from "../form-nav/form-nav.component"
import { Router } from '@angular/router';
import { UserService } from '../services/userService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(public formBuilder: FormBuilder,
    public router: Router,
    public dialogRef: MatDialogRef<FormNavComponent>,
    public userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      location: [''],
      phoneNumber: ['', [Validators.required, Validators.pattern("[0-9 ]{10}")]]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.userService.addUser(this.registerForm.value);
    localStorage.setItem("islogged", JSON.stringify(false));
    this.dialogRef.close();
  }

}
