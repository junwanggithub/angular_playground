import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngrxsharedfilter1Component } from './ngrxsharedfilter1.component';

describe('Ngrxsharedfilter1Component', () => {
  let component: Ngrxsharedfilter1Component;
  let fixture: ComponentFixture<Ngrxsharedfilter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ngrxsharedfilter1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngrxsharedfilter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
