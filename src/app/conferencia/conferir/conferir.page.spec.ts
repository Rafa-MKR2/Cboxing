import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferirPage } from './conferir.page';

describe('ConferirPage', () => {
  let component: ConferirPage;
  let fixture: ComponentFixture<ConferirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferirPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
