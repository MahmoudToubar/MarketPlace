import { Component,Input, OnInit } from '@angular/core';
import {IItems,ISliders} from "../Shared/GeneralObjects"
import {Router} from "@angular/router"
import {ItemService} from "../Shared/ItemService"
import {SlidersService} from "../Shared/SlidersService"
declare var $: any;
@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.css']
})
export class ItemBoxComponent implements OnInit {
  @Input() item:any; 
  constructor(private route:Router, 
    private iService:ItemService,
    private sliderService:SlidersService) { }

    title = 'MarketPlace';

    items:Array<IItems>=[];

    popularItems:Array<IItems>=[];
  
    newItems:Array<IItems>=[];
  
    sliders:Array<ISliders>=[];
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
  
      this.iService.GetPopularItems().subscribe((data)=>
      {
        this.popularItems=data;
      });
      this.iService.GetAllItems().subscribe((data)=>
      {
        this.items=data;
      });
      this.iService.GetNewItems().subscribe((data)=>
      {
        this.newItems=data;
      });
      this.sliderService.GetSliders().subscribe((data)=>
      {
        this.sliders=data;
      });
    }

}
