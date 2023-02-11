export interface IItems
{
  ItemId:number;
  ItemName:string;
  SalesPrice:number;
  PurchasePrice:number;
  CategoryName?:string;
  ImageName:string;
  CategoryId?:number;
}

export interface ISliders
{
  ImageName:string;
  SliderId:number;
  Title?:string;
  Description?:string;
}

export interface ICartItems
{
  ItemId:number;
  ItemName:string;
  SalesPrice:number;
  ImageName:string;
  Qty:number;
  Total:number;
}