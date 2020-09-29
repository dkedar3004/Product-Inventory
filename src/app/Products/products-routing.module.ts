import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule ,Router } from '@angular/router';
import {AppComponent} from '../app.component';
import {AddDialogComponent}  from  '../AddDialog/add-dialog.component';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';
import { ViewDialogComponent } from '../view-dialog/view-dialog.component';
import { GraphDialogueComponent } from '../graph-dialogue/graph-dialogue.component';
import { AboutComponent } from '../about/about.component';
import { DeleteComponent } from '../delete/delete.component';
import {AddRouteGuard} from '../AddDialog/add-route-guard.service';
const routes: Routes = [
 
 
    
    {path: 'home', component: AppComponent},
  {path: 'add', component: AddDialogComponent , canDeactivate : [AddRouteGuard]},
  {path: 'update', component: UpdateDialogComponent},
  {path: 'view' , component: ViewDialogComponent},
  {path:'graph' , component : GraphDialogueComponent},
  {path:'delete',component:DeleteComponent}
     
 
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
