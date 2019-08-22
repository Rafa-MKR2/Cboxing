import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecebimentoPage } from './recebimento.page';

describe('RecebimentoPage', () => {
  let component: RecebimentoPage;
  let fixture: ComponentFixture<RecebimentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecebimentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecebimentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
