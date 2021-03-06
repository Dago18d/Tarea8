import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmcabezadoComponent } from './emcabezado.component';

describe('EmcabezadoComponent', () => {
  let component: EmcabezadoComponent;
  let fixture: ComponentFixture<EmcabezadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmcabezadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmcabezadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
