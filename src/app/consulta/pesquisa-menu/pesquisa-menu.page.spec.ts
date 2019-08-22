import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaMenuPage } from './pesquisa-menu.page';

describe('PesquisaMenuPage', () => {
  let component: PesquisaMenuPage;
  let fixture: ComponentFixture<PesquisaMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
