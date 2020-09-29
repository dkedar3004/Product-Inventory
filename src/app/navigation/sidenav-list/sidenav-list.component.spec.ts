/* tslint:disable:no-unused-variable */
import { BrowserModule } from '@angular/platform-browser';
import { TestBed, async } from '@angular/core/testing';
import { SidenavListComponent } from './sidenav-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Service } from '../../services/service';
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
          Service
      ],
      declarations: [
        SidenavListComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(SidenavListComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

 

  it('span should hold Home', async(() => {
    let fixture = TestBed.createComponent(SidenavListComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('Home');
  }));


  it('Mat-icon should render home', async(() => {
    let fixture = TestBed.createComponent(SidenavListComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-icon').textContent).toContain('home');
  }));
  it('anchor tag should have home value', async(() => {
    let fixture = TestBed.createComponent(SidenavListComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('home');
  }));


});
