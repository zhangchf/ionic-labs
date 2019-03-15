import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridLayoutPage } from './grid-layout.page';

describe('GridLayoutPage', () => {
  let component: GridLayoutPage;
  let fixture: ComponentFixture<GridLayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridLayoutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
