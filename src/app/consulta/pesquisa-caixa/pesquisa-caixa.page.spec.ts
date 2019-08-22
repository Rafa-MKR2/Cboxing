import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaCaixaPage } from './pesquisa-caixa.page';

describe('PesquisaCaixaPage', () => {
  let component: PesquisaCaixaPage;
  let fixture: ComponentFixture<PesquisaCaixaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaCaixaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaCaixaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
