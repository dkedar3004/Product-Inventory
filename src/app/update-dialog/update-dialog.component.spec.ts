/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { UpdateDialogComponent } from './update-dialog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule  } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Pipe, PipeTransform } from '@angular/core';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { By } from '@angular/platform-browser';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
describe('App: CompleteGuideFinalWebpack', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, MatDialogModule , Ng2SearchPipeModule ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} }
    ],
      declarations: [
        UpdateDialogComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(UpdateDialogComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  


 
});
