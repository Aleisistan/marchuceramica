import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajosPersonalizadosComponent } from './trabajos-personalizados.component';

describe('TrabajosPersonalizadosComponent', () => {
  let component: TrabajosPersonalizadosComponent;
  let fixture: ComponentFixture<TrabajosPersonalizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrabajosPersonalizadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajosPersonalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
