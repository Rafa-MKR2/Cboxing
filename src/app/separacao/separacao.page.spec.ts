import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparacaoPage } from './separacao.page';

describe('SeparcaoPage', () => {
  let component: SeparacaoPage;
  let fixture: ComponentFixture<SeparacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeparacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
