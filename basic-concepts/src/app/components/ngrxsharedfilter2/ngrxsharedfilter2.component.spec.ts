import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngrxsharedfilter2Component } from './ngrxsharedfilter2.component';

describe('Ngrxsharedfilter2Component', () => {
  let component: Ngrxsharedfilter2Component;
  let fixture: ComponentFixture<Ngrxsharedfilter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ngrxsharedfilter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngrxsharedfilter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
