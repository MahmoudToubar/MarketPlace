import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import { IItems } from '../Shared/GeneralObjects';
import {ItemService} from "../Shared/ItemService"
import {ShoppingCartService} from "../Shared/ShoppingCartService"
declare var $: any;
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  item:any;

  constructor(private route:ActivatedRoute,
    private itemService:ItemService,
    private shoppingCart:ShoppingCartService) { }

    items:Array<IItems>=[];

  ngOnInit(): void {
    $(document).ready(function()
    {
      let body =<HTMLDivElement> document.body;
      let script = document.createElement('script');
      script.innerHTML='';
      script.src = '../assets/js/script.js';
      script.async = true;
      script.defer = true;
      body.appendChild(script);
    });
    let id:any;
    this.route.paramMap.subscribe(params => { 
      id = params.get('id'); 
      console.log(id);
      this.itemService.GetItemById(id).subscribe((data)=>
      {
          this.item=data;
          console.log(this.item);
      });
    });
  }

  AddToCart()
  {
    this.shoppingCart.AddItem(this.item,1);
    
  }

}
 