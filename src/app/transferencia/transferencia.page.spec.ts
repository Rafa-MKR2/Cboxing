import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaPage } from './transferencia.page';

describe('TransferenciaPage', () => {
  let component: TransferenciaPage;
  let fixture: ComponentFixture<TransferenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferenciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
