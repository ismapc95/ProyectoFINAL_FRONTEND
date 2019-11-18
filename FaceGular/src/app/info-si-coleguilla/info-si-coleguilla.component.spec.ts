import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSiColeguillaComponent } from './info-si-coleguilla.component';

describe('InfoSiColeguillaComponent', () => {
  let component: InfoSiColeguillaComponent;
  let fixture: ComponentFixture<InfoSiColeguillaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSiColeguillaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSiColeguillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
