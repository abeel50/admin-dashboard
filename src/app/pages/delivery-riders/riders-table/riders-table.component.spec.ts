/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RidersTableComponent } from './riders-table.component';

describe('RidersTableComponent', () => {
  let component: RidersTableComponent;
  let fixture: ComponentFixture<RidersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
