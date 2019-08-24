import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferidosPage } from './conferidos.page';

describe('ConferidosPage', () => {
  let component: ConferidosPage;
  let fixture: ComponentFixture<ConferidosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferidosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
