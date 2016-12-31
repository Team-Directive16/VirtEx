//System
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ReactiveFormsModule } from '@angular/forms';

//Main
import { AppComponent } from './app.component';

//Pages
import { HomeComponent } from './unprotected/home/home.component';
import { NewsComponent } from './unprotected/news/news.component';
import { NewsDetailsComponent } from './unprotected/news/details/news-details.component';
import { TermsComponent } from './unprotected/terms/terms.component';
import { AskComponent } from './unprotected/faq/ask/ask.component';
import { FaqComponent } from './unprotected/faq/faq.component';
import { SupportComponent } from './unprotected/support/support.component';
import { ExchangeComponent } from './unprotected/exchange/exchange.component';
import { LoginComponent } from './unprotected/login/login.component';
import { SignupComponent } from './unprotected/signup/signup.component';
import { ProfileComponent } from './protected/profile/profile.component';

//Partials
import { HeaderComponent } from './shared/header/header.component';
import { TrollboxComponent } from './shared/trollbox/trollbox.component';
import { BuyBoxComponent } from './shared/buy-box/buy-box.component';
import { SellBoxComponent } from './shared/sell-box/sell-box.component';
import { SellOrdersComponent } from './unprotected/exchange/sell-orders/sell-orders.component';
import { BuyOrdersComponent } from './unprotected/exchange/buy-orders/buy-orders.component';
import { CommentComponent } from './unprotected/news/details/comment.component';

//Services
import { AuthGuard } from "./shared/auth.guard";
import { AuthService } from './shared/auth.service';
import { FaqService } from './shared/services/faq.service';
import { NewsService } from './shared/services/news.service';
import { NewsDetailsService } from './shared/services/news-details.service';
import { CommentsService } from './shared/services/comments.service';

//Pipes
import { FilterPosts, SortApp, OrderNews } from './shared/pipes/index';

//Directives


//Routing
import { routing } from './app.routing';

//Angular Fire
import { AngularFireModule } from 'angularfire2';
import { config } from '../../firebase.config';

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
    CommentComponent,
    ProfileComponent,
    FilterPosts,
    SortApp,
    OrderNews
  ],
  imports: [
    BrowserModule,
    SimpleNotificationsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing,
    AngularFireModule.initializeApp(config)
  ],
  providers: [
    AuthGuard,
    AuthService,
    FaqService,
    NewsService,
    NewsDetailsService,
    CommentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
