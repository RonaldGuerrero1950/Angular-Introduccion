import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Batman', 'Mujer Maravilla', 'Goku'];
  // borrados: any[] =[];
  heroeBorrado: string = "";
  borrarHeroe() {    
    this.heroeBorrado = this.heroes.shift()||"";
    
    
  }

}
