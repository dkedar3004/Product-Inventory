import { Component, Output, EventEmitter, OnInit, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestService } from './test.service';
import { AddDialogComponent } from './AddDialog/add-dialog.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import { ProductService } from './prodducts.service';
import { HttpClient } from '@angular/common/http';
import { ViewDialogComponent } from './view-dialog/view-dialog.component';
import { GraphDialogueComponent } from './graph-dialogue/graph-dialogue.component';
import { DeleteComponent } from './delete/delete.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(public http: HttpClient, public dialog: MatDialog, public test: TestService) {

  }

  searchText;
  dialogRef;
  deleteClickCheck;
  checkedCount = true;
  name = false;
  deleteArray = [];
  selectNumber = true;
  price;
  qty;
  ManuFacturor;
  updateClick;
  graphArray;
  title = 'app';
  isLoading = false;

  // tslint:disable-next-line: max-line-length
  products = [];
  //graphArray = [...this.products];

  ngOnInit() {
    this.getData();
    this.graphArray = this.products.map(obj => ({ ...obj }));

  }
  getData() {

    this.http.get('http://localhost:5000/products').subscribe((x) => {
      // tslint:disable-next-line: forin
      for (const key in x) {

        this.products.push(x[key]);
        this.graphArray.push(x[key]);

      }
    });
    // console.log(this.products);
    this.graphArray = this.products.map(obj => ({ ...obj }));

  }

  priceCheck() {
    this.price = !this.price;
  }
  qtyCheck() {
    this.qty = !this.qty;
  }
  manuCheck() {
    this.ManuFacturor = !this.ManuFacturor;
  }

  deleteButton() {
    if (this.deleteArray.length > 0) {
      this.checkedCount = false;
    }
  }



  deleteClick(item) {


    this.checkedCount = false;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.deleteArray.length; i++) {
      if (item === this.deleteArray[i]) {
        this.deleteArray.splice(i, 1);
      }
    }
    this.deleteArray.push(item);


  }

  delete() {

    if (this.test.isLogin) {
      // tslint:disable-next-line: prefer-for-of
      let dialogRef = this.dialog.open(DeleteComponent, { data: { delete: this.deleteArray } });
      dialogRef.afterClosed().subscribe(() => {
        this.isLoading=true;
        for (let i = 0; i < this.deleteArray.length; i++) {

          
            
            setTimeout(()=>{
              this.http.delete('http://localhost:5000/products/' + this.deleteArray[i].id).subscribe((x) => {
            console.log(x);
            });
          },1000);

        }
        setTimeout(()=>{
          this.isLoading = false;
          this.deleteArray = [];
          this.products = [];
          this.ngOnInit();
        },2000)
       





      });
    }
    else {
      alert('Please login to delete the product!');
    }



  }



  openDialog() //Add Component
  {
    if (this.test.isLogin) {
      //added to avoid repetation due to onInit()
      let dialogRef = this.dialog.open(AddDialogComponent);
      dialogRef.afterClosed().subscribe(x => {
        this.isLoading = true;
        setTimeout(() => {
          this.products = [];
          this.ngOnInit();
          this.test.isLogin = true;
          this.isLoading = false;
        }, 2000)

      });
    }
    else {
      alert('please Login to Add Products')
    }

  }
  openDialog2() //update component
  {
    if (this.test.isLogin) {
      // tslint:disable-next-line: max-line-length
      let dialogRef = this.dialog.open(UpdateDialogComponent, {
        data: {
          id: this.deleteArray[0].id, product_name: this.deleteArray[0].product_name,
          price: this.deleteArray[0].price,
          description: this.deleteArray[0].description,
          manufacturer: this.deleteArray[0].manufacturer,
          logo: this.deleteArray[0].logo,
          img: this.deleteArray[0].img,
          qty: this.deleteArray[0].qty
        }
      });
      dialogRef.afterClosed().subscribe(x => {
        this.isLoading = true;
        setTimeout(() => {
          this.deleteArray = [];
          this.products = [];

          this.ngOnInit();
          this.test.isLogin = true;
          this.isLoading = false;
        }, 2000);

      });
    }
    else {
      alert('Please login to update Product!')
    }




  }

  openDialog3(id) //View Component
  {


    if (this.test.isLogin) {

      // tslint:disable-next-line: prefer-for-of
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.graphArray.length; i++) {
        if (id === this.graphArray[i].id) {

          this.graphArray[i].qty++;

        }
      }


      let dialogRef = this.dialog.open(ViewDialogComponent, {
        data: {
          product_name: this.deleteArray[0].product_name,
          price: this.deleteArray[0].price,
          description: this.deleteArray[0].description,
          manufacturer: this.deleteArray[0].manufacturer,
          logo: this.deleteArray[0].logo,
          img: this.deleteArray[0].img,
          qty: this.deleteArray[0].qty
        }
      });
      dialogRef.afterClosed().subscribe(x => {

        this.deleteArray = [];

      });
    }
    else {
      alert('Please login to View Product Details');
    }

  }
  openDialog4() //graph
  {


    this.dialog.open(GraphDialogueComponent, { data: { graph: this.graphArray } });
  }
}


