import { Component, OnInit } from '@angular/core';
import { IItems } from '../Shared/GeneralObjects';
import {ItemService} from "../Shared/ItemService";
declare var $: any;
@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.css']
})
export class ItemsPageComponent implements OnInit {

  constructor(private service:ItemService) { }
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

    this.service.GetAllItems().subscribe((data)=>
    {
      this.items=data;
    });
  }

}
