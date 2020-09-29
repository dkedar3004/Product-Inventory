/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { FormNavComponent } from './form-nav.component';
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
        FormNavComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(FormNavComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('formtype1 should be Register', async(() => {
    let fixture = TestBed.createComponent(FormNavComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.formType1).toEqual('Register');
  }));

  it('formtype2 should be Login', async(() => {
    let fixture = TestBed.createComponent(FormNavComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.formType2).toEqual('Login');
  }));
  it('Select Form value should be true', async(() => {
    let fixture = TestBed.createComponent(FormNavComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.selectedForm).toEqual(true);
  }));
  it('should render h1 tag as Register Component', async(() => {
    let fixture = TestBed.createComponent(FormNavComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Register');
  }));
 
});
