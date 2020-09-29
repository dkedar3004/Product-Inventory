import { Component, OnInit , ViewChild , DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TestService } from '../test.service';
import { Routes, RouterModule, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  providers: [],
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit , DoCheck {
  @ViewChild('postForm') public signupForm: NgForm;
  title = 'Add Product';
 
  constructor(public http: HttpClient, public test: TestService, public router: Router) { }
  checkNumber(price)
  {
    if (Number.isInteger(price))
    {
      return true;
    }
  }
  ngOnInit(): void {
    // $(document).ready(function() {
    //   alert('I am Called From jQuery');
    // });
   
   
 
  }
  
  ngDoCheck()
  {
    $(window).bind('beforeunload', function(){
      return 'Are you sure you want to leave?';
     
    });
    
  }
  
  cancel()
  {
    $(window).bind('beforeunload', function(){
      return 'Are you sure you want to leave?';
     
    });
    alert('Changes will be unsaved!')
  }


  // tslint:disable-next-line: max-line-length
  addProduct(postData: { product_name: string; product_description: string; Manufactor: string; image: string; logo: string; price: number; qty: number }) {

    this.http.post('http://localhost:5000/products', postData).subscribe((x) => {
      console.log(x);
    });

  }
}
