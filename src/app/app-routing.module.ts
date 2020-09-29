import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule ,Router } from '@angular/router';
import {AppComponent} from './app.component';
import {AddDialogComponent}  from  './AddDialog/add-dialog.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import { ViewDialogComponent } from './view-dialog/view-dialog.component';
import { GraphDialogueComponent } from './graph-dialogue/graph-dialogue.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
{path: 'products', loadChildren: './Products/product.module#ProductsModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
