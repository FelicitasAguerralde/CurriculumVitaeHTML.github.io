import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { __classPrivateFieldSet } from 'tslib';
import { Viajes } from './viajes-list/viajes';

@Injectable({
  providedIn: 'root'
})
export class ViajeCartService {
  private _cartList: Viajes[] = [];
  cartList: BehaviorSubject<Viajes[]> = new BehaviorSubject (this._cartList); // si pongo un arreglo vacio tira error

  constructor() { }

  addToCart(viaje: Viajes) {
    let item=this._cartList.find((v1)=>v1.salida==viaje.salida);
    if(!item){
      this._cartList.push({... viaje});
    }
    else{
      item.quantity += viaje.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList); //equivalente al emitt de eventos
  }

   
}
