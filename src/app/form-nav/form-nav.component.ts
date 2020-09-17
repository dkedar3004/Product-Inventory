import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component'

@Component({
  selector: 'app-form-nav',
  templateUrl: './form-nav.component.html',
  styleUrls: ['./form-nav.component.css']
})
export class FormNavComponent implements OnInit {
  selectedForm = true;
  formType1 = "Register";
  formType2 = "Login";
  constructor() {}
  changeControl(str){
    this.selectedForm = str === "Register" ? true : false;
  }
  ngOnInit(): void { 
  }

}
