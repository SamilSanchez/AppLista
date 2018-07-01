import { Injectable } from '@angular/core';
import { listas } from '../clases/listas';

@Injectable()
export class ListaDeseosService {

    // ARRAY PARA CARGAS LAS LISTA DE COSAS DEL USUARIO
    lista: listas [] = [];

    constructor() {
        let lista1 = new listas('Lista de supermercado');
        let lista2 = new listas('Juegos que Deseo');
        let lista3 = new listas('Cosas de la Universidad');
        
        this.lista.push(lista1);
        this.lista.push(lista2);
        this.lista.push(lista3);

       console.log('Servicio Inicializado !!!');
     }
}