import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecamentoPage } from './enderecamento.page';

describe('EnderecamentoPage', () => {
  let component: EnderecamentoPage;
  let fixture: ComponentFixture<EnderecamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnderecamentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
