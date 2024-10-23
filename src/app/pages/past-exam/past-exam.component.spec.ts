/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PastExamComponent } from './past-exam.component';

describe('PastExamComponent', () => {
  let component: PastExamComponent;
  let fixture: ComponentFixture<PastExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
