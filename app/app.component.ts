import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MarketPlace';
  items=[4234,23432,3423,234,3432,23423,45,45,45,45,45,2343,2343,32423,23423];

  popularItems:Array<IItems>=[
    {id:1,name:"Item 1",price:4545},
    {id:2,name:"Item 2",price:5656},
    {id:3,name:"Item 3",price:4565},
    {id:4,name:"Item 4",price:6767},
    {id:5,name:"Item 5",price:6767}
  ]
  ngOnInit(): void {

  $(document).ready(function()
  {
    let body = <HTMLDivElement> document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = '../assets/js/script.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  });
}


}

interface IItems
{
  id:number;
  name:string;
  price:number;
}
