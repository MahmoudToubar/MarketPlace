import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../Shared/ShoppingCartService"
import {IItems,ICartItems} from "../Shared/GeneralObjects"

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  items:Array<ICartItems>=[];

  constructor(private shoppingCart:ShoppingCartService) { }

  ngOnInit(): void {
    this.items=this.shoppingCart.items;
    console.log(this.items);
  }

  RemoveItem(ItemId:number)
  {
    this.shoppingCart.RemoveItem(ItemId);
    this.items=this.shoppingCart.items;
    console.log(this.items);
  }

}
