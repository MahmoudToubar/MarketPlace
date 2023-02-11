import {Injectable} from "@angular/core"
import { IItems } from "./GeneralObjects";
import { ApiConfig } from "./ApiConfig";
import { HttpClient } from "@angular/common/http";
import {Observable, observable} from "rxjs"

@Injectable()
export class ItemService
{
    constructor(private http:HttpClient)
    {

    }
    GetPopularItems() : Observable<Array<IItems>>
    {
        return this.http.get<Array<IItems>>(ApiConfig.ServerUrl+ApiConfig.ItemApiEndPoint+"/PopularItems");
    }

    GetAllItems() : Observable<Array<IItems>>
    {
        return this.http.get<Array<IItems>>(ApiConfig.ServerUrl+ApiConfig.ItemApiEndPoint);
    }

    GetNewItems() : Observable<Array<IItems>>
    {
        return this.http.get<Array<IItems>>(ApiConfig.ServerUrl+ApiConfig.ItemApiEndPoint+"/NewItems");
    }

    GetItemById(id:number) : Observable<IItems>
    {
        return this.http.get<IItems>(ApiConfig.ServerUrl+ApiConfig.ItemApiEndPoint+"/"+id);
    }
}