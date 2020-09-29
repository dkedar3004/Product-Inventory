/* tslint:disable:no-unused-variable */
import { BrowserModule } from '@angular/platform-browser';
import { TestBed, async } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../services/userService';
import { Pipe, PipeTransform } from '@angular/core';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
describe('App: CompleteGuideFinalWebpack', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, MatDialogModule , Ng2SearchPipeModule , BrowserModule , 
        ReactiveFormsModule , RouterTestingModule ],
        providers: [
          { provide: MatDialogRef, useValue: {}  },
           UserService 
      ],
      declarations: [
        RegisterComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(RegisterComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('Submitted value should be false intially', async(() => {
    let fixture = TestBed.createComponent(RegisterComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.submitted).toEqual(false);
  }));

  it('Label should hold First Name', async(() => {
    let fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('label').textContent).toContain('First Name');
  }));


  it('Button should hold Submit Value', async(() => {
    let fixture = TestBed.createComponent(RegisterComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Register');
  }));


});
