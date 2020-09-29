/* tslint:disable:no-unused-variable */
import { RouterModule, Routes } from '@angular/router';
import { TestBed, async } from '@angular/core/testing';
import { AddDialogComponent } from './add-dialog.component';
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
        AddDialogComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AddDialogComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Add Dialogue works!'`, async(() => {
    let fixture = TestBed.createComponent(AddDialogComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Add Product');
  }));

//   it('should have products array greater than one',async(()=>{
//     let fixture = TestBed.createComponent(AddDialogComponent);
//     let app = fixture.debugElement.componentInstance;
//     app.ngOnInit();
//     expect(app.products.length).toEqual(app.graphArray.length);
//   }));

  it('should render Price in a checkbox tag', async(() => {
    let fixture = TestBed.createComponent(AddDialogComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-label').textContent).toContain('Product Name');
  }));
  it('should render Add in a Mat Dialog tag', async(() => {
    let fixture = TestBed.createComponent(AddDialogComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Cancel');
  }));
  it('should render Add in a Mat Dialog tag', async(() => {
    let fixture = TestBed.createComponent(AddDialogComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('Product Name');
  }));
  it('Form should have Product value', async(() => {
    let fixture = TestBed.createComponent(AddDialogComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form').textContent).toContain('Product Name');
  }));
//   it('should render Most Viewd Product Name', async(() => {
//     let fixture = TestBed.createComponent(AddDialogComponent);
//     fixture.detectChanges();
//     let compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('button').textContent).toContain('Most Viewed Products');
//   }));
//   it('Products array should not be empty', async(() => {
//     let fixture = TestBed.createComponent(AddDialogComponent);
//     fixture.detectChanges();
//     let app = fixture.debugElement.componentInstance;
//     let compiled = fixture.debugElement.nativeElement;
//     expect(app.products.length).toBeGreaterThanOrEqual(0);
//   }));
//   it('Delete Array Should be empty Intially', async(() => {
//     let fixture = TestBed.createComponent(AddDialogComponent);
//     fixture.detectChanges();
//     let app = fixture.debugElement.componentInstance;
//     let compiled = fixture.debugElement.nativeElement;
//     expect(app.deleteArray.length).toEqual(0); 
//   }));
});
