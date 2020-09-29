import { TestBed, async } from '@angular/core/testing';
import { LoginPopUpComponent } from './login-pop-up.component';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'

describe('App: CompleteGuideFinalWebpack', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [MAT_DIALOG_DATA],
      declarations: [
        LoginPopUpComponent
      ],
    });
  });
});