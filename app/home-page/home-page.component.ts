import { Component, OnInit } from '@angular/core';
import {IItems,ISliders} from "../Shared/GeneralObjects"
import {Router} from "@angular/router"
import {ItemService} from "../Shared/ItemService"
import {SlidersService} from "../Shared/SlidersService"
declare var $: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private route:Router, 
   
    private sliderService:SlidersService) { }

   
  
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

  
    this.sliderService.GetSliders().subscribe((data)=>
    {
      this.sliders=data;
    });
  }

}
