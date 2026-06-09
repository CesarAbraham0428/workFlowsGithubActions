import { TestBed } from '@angular/core/testing';
import { CalculadoraService } from './prueba.service';

describe('CalculadoraService', () => {
  let servicioCalculadora: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
    servicioCalculadora = TestBed.inject(CalculadoraService);
  });

  it('debe crearse el servicio', () => {
    expect(servicioCalculadora).toBeTruthy();
  });

  it('debe sumar dos números de forma correcta', () => {
    const resultado = servicioCalculadora.sumar(5,7);
    expect(resultado).toBe(12);
  });
});