import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorAmigosComponent } from './buscador-amigos.component';

describe('BuscadorAmigosComponent', () => {
  let component: BuscadorAmigosComponent;
  let fixture: ComponentFixture<BuscadorAmigosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscadorAmigosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorAmigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
