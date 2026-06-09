import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  sumar(primerNumero: number, segundoNumero: number): number {
    return primerNumero + segundoNumero;
  }
}