import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundCountryComponent } from './not-found-country.component';

describe('NotFoundCountryComponent', () => {
  let component: NotFoundCountryComponent;
  let fixture: ComponentFixture<NotFoundCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
