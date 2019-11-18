import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecirAlgoComponent } from './decir-algo.component';

describe('DecirAlgoComponent', () => {
  let component: DecirAlgoComponent;
  let fixture: ComponentFixture<DecirAlgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecirAlgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecirAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
