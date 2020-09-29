/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule  } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Pipe, PipeTransform } from '@angular/core';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { By } from '@angular/platform-browser';
import { Service } from '../services/service';
describe('App: CompleteGuideFinalWebpack', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, MatDialogModule , Ng2SearchPipeModule ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {}  },
        Service
    ],
      declarations: [
        HeaderComponent
      ],
    });
  });

  it('Product Check count should be true', async(() => {
    let fixture = TestBed.createComponent(HeaderComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.checkedCount).toEqual(true);
  }));

  it('Products Select Count should be true', async(() => {
    let fixture = TestBed.createComponent(HeaderComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.selectNumber).toEqual(true);
  }));

  it('Products delete Array Should be greater than 0', async(() => {
    let fixture = TestBed.createComponent(HeaderComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.deleteArray.length).toBeGreaterThanOrEqual(0);
  }));
 
  it('should render Most Viewd Product Name', async(() => {
    let fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-icon').textContent).toContain('menu');
  }));

  it('should render Product Inventory Management', async(() => {
    let fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('Product Inventory Management');
  }));

  it('Log IN / Sign Up should render', async(() => {
    let fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ul').textContent).toContain('Log In / Sign Up');
  }));

  it('Mat Button should Render Menu', async(() => {
    let fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('menu');
  }));
  
 
});
