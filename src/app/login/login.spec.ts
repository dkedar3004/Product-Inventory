
/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule  } from '@angular/material/dialog';
import { Pipe, PipeTransform } from '@angular/core';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { By } from '@angular/platform-browser';
describe('App: CompleteGuideFinalWebpack', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, MatDialogModule , Ng2SearchPipeModule ],
      declarations: [
        LoginComponent
      ],
    });
  });

  
  
});
