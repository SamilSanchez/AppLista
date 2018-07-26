import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaDeseosService } from '../../app/services/lista-deseos.services';
import { AgregarComponent } from '../agregar/agregar.component';


@Component({
    selector: 'app-pendientes',
    templateUrl: 'pendientes.component.html'
})

export class PendientesComponent implements OnInit {
    constructor( private _listaDeseos: ListaDeseosService, private navCtrl: NavController) {
        console.log(_listaDeseos);
    }

    ngOnInit() { }

    irAgregar () {
        // Permite moverme de una pantalla a otra 
        this.navCtrl.push(AgregarComponent);
    }
}