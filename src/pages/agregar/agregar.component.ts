import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.services'
import { Lista, ListaItem } from '../../app/clases/index';

@Component({
    selector: 'app-agregar',
    templateUrl: 'agregar.component.html'
})

export class AgregarComponent implements OnInit {

    nombreLista: string = "";
    nombreItem: string = "";

    items: ListaItem[] = [];

    constructor( private _listaDeseos: ListaDeseosService,
                private alertCtrl: AlertController,
                private navCtrl: NavController) {
        console.log(_listaDeseos);
    }

    ngOnInit() { }

    // funcion para agregar item a la lista
    agregar() {
        if (this.nombreItem.length == 0) {
            return;
        }
        let item = new ListaItem();
        item.nombre = this.nombreItem;
        this.items.push(item);
        this.nombreItem = "";
    }

    // Funcion para eliminar item de la lista
    eliminarItem(indexItem){
        // Remueve el elemento de la lista a partir de su posicion
        this.items.splice(indexItem, 1);
    }

    // Agrega la lista completa 
    agregarLista() {
        if (this.nombreLista.length == 0) {
            const alert = this.alertCtrl.create({
                title: 'Nombre de la Lista!',
                subTitle: 'El nombre de la lista es necesario!',
                buttons: ['OK']
              });
              alert.present();
            return;
        }

        let lista = new Lista(this.nombreLista);
        lista.items = this.items;
        // this._listaDeseos.lista.push(lista);
        this._listaDeseos.agregarlista(lista);
        this.navCtrl.pop();
    }
}