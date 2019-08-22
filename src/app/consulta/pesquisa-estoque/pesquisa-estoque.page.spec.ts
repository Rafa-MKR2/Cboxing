import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaEstoquePage } from './pesquisa-estoque.page';

describe('PesquisaEstoquePage', () => {
  let component: PesquisaEstoquePage;
  let fixture: ComponentFixture<PesquisaEstoquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaEstoquePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaEstoquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
