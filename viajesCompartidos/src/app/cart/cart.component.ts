import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ViajeCartService } from '../viaje-cart.service';
import { Viajes } from '../viajes-list/viajes';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartList$!: Observable<Viajes[]>;

  constructor(private cart: ViajeCartService) {
    this.cartList$=cart.cartList.asObservable();
  }

  ngOnInit(): void {

  }
  
 
}
