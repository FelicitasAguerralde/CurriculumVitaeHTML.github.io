import {Component, OnInit} from '@angular/core';
import { ViajeCartService } from '../viaje-cart.service';
import { ViajeDataService } from '../viaje-data.service';
import {Viajes} from './viajes';

@Component({
  selector: 'app-viajes-list',
  templateUrl: './viajes-list.component.html',
  styleUrls: ['./viajes-list.component.css']
})
export class ViajesListComponent implements OnInit{
      viajes : Viajes []= [];
  
  constructor(
    private cart: ViajeCartService,
    private viajesDataService: ViajeDataService) { 
}

ngOnInit():void{
  this.viajesDataService.getAll()
  .subscribe(viajes=>this.viajes=viajes);
}

addToCart(viaje: Viajes):void{
  this.cart.addToCart(viaje);
  viaje.lugares -= viaje.quantity;
  viaje.quantity=0;
}
}
