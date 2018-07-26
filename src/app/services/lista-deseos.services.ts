import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';

@Injectable()
export class ListaDeseosService {

    // ARRAY PARA CARGAS LAS LISTA DE COSAS DEL USUARIO
    listas: Lista [] = [];

    constructor() {
        // let lista1 = new Lista('Lista de supermercado');
        // let lista2 = new Lista('Juegos que Deseo');
        // let lista3 = new Lista('Cosas de la Universidad');        
        // this.listas.push(lista1);
        // this.listas.push(lista2);
        // this.listas.push(lista3);
        // console.log('Servicio Inicializado !!!');

        this.cargarData();
     }

     actualizarData(){
        localStorage.setItem( "data", JSON.stringify(this.listas))
     }

     cargarData(){
         if (localStorage.getItem( "data")) {
            this.listas = JSON.parse(localStorage.getItem( "data"));
         }
    }

    agregarlista(lista:Lista){
        this.listas.push(lista);
        this.actualizarData();
    }
}