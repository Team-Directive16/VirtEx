import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './unprotected/home/home.component';
import { NewsComponent } from './unprotected/news/news.component';
import { TermsComponent } from './unprotected/terms/terms.component';
import { FaqComponent } from './unprotected/faq/faq.component';
import { SupportComponent } from './unprotected/support/support.component';
import { routing} from './app.routing';
import { ExchangeComponent } from './unprotected/exchange/exchange.component';
import { LoginComponent } from './unprotected/login/login.component';
import { SignupComponent } from './unprotected/signup/signup.component';
import { TrollboxComponent } from './shared/trollbox/trollbox.component';
import { BuyBoxComponent } from './shared/buy-box/buy-box.component';
import { SellBoxComponent } from './shared/sell-box/sell-box.component';
import { SellOrdersComponent } from './unprotected/exchange/sell-orders/sell-orders.component';
import { BuyOrdersComponent } from './unprotected/exchange/buy-orders/buy-orders.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    TermsComponent,
    FaqComponent,
    SupportComponent,
    ExchangeComponent,
    LoginComponent,
    SignupComponent,
    TrollboxComponent,
    BuyBoxComponent,
    SellBoxComponent,
    SellOrdersComponent,
    BuyOrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
