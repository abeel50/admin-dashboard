/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StockInComponent } from './stock-in.component';

describe('StockInComponent', () => {
  let component: StockInComponent;
  let fixture: ComponentFixture<StockInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
