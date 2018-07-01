import { ListaItem } from "../clases/lista-item";

export class listas {
    nombre: string;
    terminada: boolean;
    items: ListaItem [];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.terminada = false;
    }
}