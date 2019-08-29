import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaCochesComponent } from './busqueda-coches.component';

describe('BusquedaCochesComponent', () => {
  let component: BusquedaCochesComponent;
  let fixture: ComponentFixture<BusquedaCochesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaCochesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaCochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
