import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemsPageComponent } from './items-page/items-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BillingInfoComponent } from './billing-info/billing-info.component';
const routes: Routes = [
  {"path":"Home",component:HomePageComponent},
  {"path":"Items",component:ItemsPageComponent},
  {"path":"Cart",component:ShoppingCartComponent},
  {"path":"BillingInfo",component:BillingInfoComponent},
  {"path":"ItemsDetails/:id",component:ItemDetailsComponent},
  {"path":"",redirectTo:"Home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
