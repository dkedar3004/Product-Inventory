/* tslint:disable:no-unused-variable */
import { RouterModule, Routes } from '@angular/router';
import { TestBed, async } from '@angular/core/testing';
import { UserProfileComponent } from './user-profile.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule  } from '@angular/material/dialog';
import { Pipe, PipeTransform } from '@angular/core';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
describe('App: CompleteGuideFinalWebpack', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, MatDialogModule , Ng2SearchPipeModule,  RouterModule.forRoot([])
    ,FormsModule ],
      declarations: [
        UserProfileComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(UserProfileComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
