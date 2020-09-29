import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public http: HttpClient) {

  }

  updateForm: FormGroup;



  ngOnInit(): void {
    //console.log( this.data.product_name);


    this.updateForm = new FormGroup({

      'product_name': new FormControl(),
      'description': new FormControl(),
      'img': new FormControl(),
      'logo': new FormControl(),
      'qty': new FormControl(),
      'price': new FormControl(),
      'manufacturer': new FormControl(),

    });
    this.updateForm.setValue({
      'product_name': this.data.product_name,
      'description': this.data.description,
      'img': this.data.img,
      'logo': this.data.logo,
      'qty': this.data.qty,
      'price': this.data.price,
      'manufacturer': this.data.manufacturer
    });


  }

  update() {

    this.http.put('http://localhost:5000/products/' + this.data.id, this.updateForm.value).subscribe(x => {
      console.log(x);
    });
  }

}
