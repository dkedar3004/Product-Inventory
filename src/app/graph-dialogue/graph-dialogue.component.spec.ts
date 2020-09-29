/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { GraphDialogueComponent } from './graph-dialogue.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule  } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Pipe, PipeTransform } from '@angular/core';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { By } from '@angular/platform-browser';
describe('App: CompleteGuideFinalWebpack', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule, MatDialogModule , Ng2SearchPipeModule ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} }
    ],
      declarations: [
        GraphDialogueComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(GraphDialogueComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('Graph Values array should not be empty', async(() => {
    let fixture = TestBed.createComponent(GraphDialogueComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.value.length).toBeGreaterThanOrEqual(0);
  }));

  it('Options length should be greater than one', async(() => {
    let fixture = TestBed.createComponent(GraphDialogueComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.options.series.length).toBeGreaterThanOrEqual(0);
  }));
 

 
});
