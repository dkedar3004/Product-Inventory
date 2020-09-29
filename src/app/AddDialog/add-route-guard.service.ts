import { CanDeactivate } from "@angular/router";
import {Injectable} from '@angular/core';
import {AddDialogComponent} from './add-dialog.component';
@Injectable() 
export class AddRouteGuard implements CanDeactivate<AddDialogComponent>{
   
    canDeactivate(component:AddDialogComponent): boolean {
        if(!component.signupForm.dirty)
        {
            return confirm('Are you sure to Discard Changes');
        }
        else{
            alert('whats up');
        }
      }


}