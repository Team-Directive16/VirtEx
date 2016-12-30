import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './unprotected/home/home.component';
import { NewsComponent } from './unprotected/news/news.component';
import { NewsDetailsComponent } from './unprotected/news/details/news-details.component';
import { TermsComponent } from './unprotected/terms/terms.component';
import { FaqComponent } from './unprotected/faq/faq.component';
import { AskComponent } from './unprotected/faq/ask/ask.component';
import { SupportComponent } from './unprotected/support/support.component';
import { ExchangeComponent } from './unprotected/exchange/exchange.component';
import { LoginComponent } from './unprotected/login/login.component';
import { SignupComponent } from './unprotected/signup/signup.component';
import { TrollboxComponent } from './shared/trollbox/trollbox.component';
import { BuyBoxComponent } from './shared/buy-box/buy-box.component';
import { SellBoxComponent } from './shared/sell-box/sell-box.component';
import { SellOrdersComponent } from './unprotected/exchange/sell-orders/sell-orders.component';
import { BuyOrdersComponent } from './unprotected/exchange/buy-orders/buy-orders.component';
import { AuthGuard } from "./shared/auth.guard";
import { AuthService } from './shared/auth.service';
import { ProfileComponent } from './protected/profile/profile.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NewsComponent,
    NewsDetailsComponent,
    TermsComponent,
    FaqComponent,
    AskComponent,
    SupportComponent,
    ExchangeComponent,
    LoginComponent,
    SignupComponent,
    TrollboxComponent,
    BuyBoxComponent,
    SellBoxComponent,
    SellOrdersComponent,
    BuyOrdersComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
