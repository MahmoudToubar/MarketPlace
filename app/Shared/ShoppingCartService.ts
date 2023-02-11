import {Injectable} from "@angular/core"
import {IItems,ICartItems} from "./GeneralObjects"
import {ApiConfig} from "./ApiConfig"
import {HttpClient} from "@angular/common/http"
import {Observable, observable} from "rxjs"
@Injectable()
export class ShoppingCartService
{
    items:Array<ICartItems>=[];
    total:number=0;
    constructor(private http:HttpClient)
    {
        let myItems:any;
        if(localStorage.getItem("Cart")!==null)
        {
            myItems=localStorage.getItem("Cart");
        }
        
        this.items=JSON.parse( myItems);
    }

    AddItem(item:any,qty:number)
    {
        for(let i=0;i<this.items.length;i++)
        {
            if(this.items[i].ItemId===item.ItemId)
            {
                this.items[i].Qty+=1;
                return;
            }
        }
        let myItem:ICartItems={
            ItemId:item.ItemId,
            ItemName:item.ItemName,
            SalesPrice:item.SalesPrice,
            ImageName:item.ImageName,
            Qty:qty,
            Total:item.SalesPrice*qty
        }
        this.items.push(myItem);
        localStorage.setItem("Cart",JSON.stringify(this.items));
    }

    RemoveItem(ItemId:number)
    {
        for(let i=0;i<this.items.length;i++)
        {
            if(this.items[i].ItemId===ItemId)
            {
                this.items.splice(i,1);
                localStorage.setItem("Cart",JSON.stringify(this.items));
                return;
            }
        }
    }

    
}