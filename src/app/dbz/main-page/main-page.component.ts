import { Component } from '@angular/core';
import { Personaje } from '../dbz.interface';
import { AgregarComponent } from '../agregar/agregar.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder: 15000
    },
    {
      nombre: "Vegeta",
      poder: 8500
    }
  ];

  nuevo: Personaje={
    nombre:"rrr",
    poder:1
  }

  agregarNuevoPersonaje(argumento:Personaje){
    
    this.personajes.push(argumento);
  }

}
