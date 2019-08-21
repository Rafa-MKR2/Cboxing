import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColsultaPage } from './colsulta.page';

describe('ColsultaPage', () => {
  let component: ColsultaPage;
  let fixture: ComponentFixture<ColsultaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColsultaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
