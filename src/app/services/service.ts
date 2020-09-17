import { Injectable } from '@angular/core';

@Injectable()
export class Service {
   constructor() { }

   checkUser(){
    return localStorage.getItem("islogged")?false:true;
   }
}