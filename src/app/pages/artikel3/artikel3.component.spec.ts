import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Artikel3Component } from './artikel3.component';

describe('Artikel3Component', () => {
  let component: Artikel3Component;
  let fixture: ComponentFixture<Artikel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Artikel3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Artikel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
