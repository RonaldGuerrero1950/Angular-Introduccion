import { Component } from "@angular/core";

@Component({
    selector: "app-heroe",
    templateUrl: "./heroe.component.html"
})
export class HeroeComponent {
    public nombre: string = "Iroman";
    public Edad: number = 45;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre}    ${this.Edad}`;
    }

    cambiarNombre():void {
        this.nombre = "Spiderman";
    }

    cambiarEdad():void {
        this.Edad = 30;
    }
}