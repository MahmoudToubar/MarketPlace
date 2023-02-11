import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemBoxComponent } from './item-box/item-box.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"
import { ItemsPageComponent } from './items-page/items-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemService } from './Shared/ItemService';
import { SlidersService } from './Shared/SlidersService';
import {HttpClientModule} from "@angular/common/http";
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { BillingInfoComponent } from './billing-info/billing-info.component'
import { ShoppingCartService } from './Shared/ShoppingCartService';

@NgModule({
  declarations: [
    AppComponent,
    ItemBoxComponent,
    HeaderComponent,
    FooterComponent,
    ItemsPageComponent,
    HomePageComponent,
    ItemDetailsComponent,
    ShoppingCartComponent,
    BillingInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ItemService,
    SlidersService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
