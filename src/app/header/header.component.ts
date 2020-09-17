import { Component, OnInit, Output, EventEmitter , OnChanges  } from '@angular/core';
import {MatDialog } from '@angular/material/dialog';
import { FormNavComponent } from '../form-nav/form-nav.component';
import { Service } from '../services/service';
import { Subscription } from 'rxjs';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  subscription: Subscription; 
  hasloggedin;
  constructor(public dialog: MatDialog,
              public service: Service) {
                this.subscription = this.service.getMessage().subscribe(message => {
                  console.log(message)
                    this.hasloggedin=message;
                });
                this.hasloggedin=localStorage.getItem("isLogged")?true:false;
   }
  searchText;
  checkedCount=true;
  name;
  deleteArray = [];
  selectNumber = true;
  price;
  qty;
  ManuFacturor;
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  array2 = [
     {name: 'product1', manufacturer: 'Amazon', price: '$10', qty: 22, img:'https://www.iconfinder.com/data/icons/mixed-6/100/mixed-08-512.png'},
     {name: 'product2',  manufacturer: 'Amazon', price: '$11', qty: 23, img:'https://www.iconfinder.com/data/icons/mixed-6/100/mixed-08-512.png'},
     {name: 'product3', manufacturer: 'Amazon', price: '$12', qty: 24, img:'https://www.iconfinder.com/data/icons/mixed-6/100/mixed-08-512.png'}
    ];
  ngOnInit(): void {

  }
  logout(){
    localStorage.clear();
    // this.service.sendMessage(false);
    // this.hasloggedin=false;
    this.service.clearMessages();
  }
  public onToggleSidenav = () => { 
    this.sidenavToggle.emit();
  }
  openDialogBox(){
    console.log("mat-dialog")
    const dialogRef = this.dialog.open(FormNavComponent, {
      height: '500px',
      width: '700px',
    });

  }
  priceCheck()
  {
    this.price = !this.price;
  }
  qtyCheck()
  {
    this.qty = !this.qty;
  }
  manuCheck()
  {
    this.ManuFacturor = !this.ManuFacturor;
  }
  deleteClick(item)
  {
    console.log(item);
    this.checkedCount = false;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0  ; i < this.deleteArray.length; i++)
{
    if(item === this.deleteArray[i])
    {
      this.deleteArray.splice(i,1);
    }
}
    this.deleteArray.push(item);
    console.log(this.deleteArray);
  }


delete()
{
  console.log('delete called')
  // tslint:disable-next-line: prefer-for-of
  for(let j=0;j<this.array2.length;j++)
  {
    // tslint:disable-next-line: prefer-for-of
    for(let i=0;i<this.deleteArray.length;i++)
    {
      if(this.array2[j].name===this.deleteArray[i])
      {
        this.array2.splice(j,1);
      }
    }
  }
}

viewProfile(){
  const dialogRef = this.dialog.open(UserProfileComponent, {
    height: '250px',
    width: '400px',
  });
}
}

