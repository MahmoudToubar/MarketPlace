import {Injectable} from "@angular/core"
import {ISliders} from "./GeneralObjects"
import {ApiConfig} from "./ApiConfig"
import {HttpClient} from "@angular/common/http"
import {Observable, observable} from "rxjs"
@Injectable()
export class SlidersService
{
    constructor(private http:HttpClient)
    {

    }
    GetSliders() : Observable<Array<ISliders>>
    {
        return this.http.get<Array<ISliders>>(ApiConfig.ServerUrl+ApiConfig.SlidersApiEndPoint);
    }
}