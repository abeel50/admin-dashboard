/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RidersComponent } from './riders.component';

describe('RidersComponent', () => {
  let component: RidersComponent;
  let fixture: ComponentFixture<RidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
