import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './unprotected/home/home.component';
import { ExchangeComponent } from './unprotected/exchange/exchange.component';
import { NewsComponent } from './unprotected/news/news.component';
import { TermsComponent } from './unprotected/terms/terms.component';
import { FaqComponent } from './unprotected/faq/faq.component';
import { SupportComponent } from './unprotected/support/support.component';
import { LoginComponent } from './unprotected/login/login.component';
import { SignupComponent } from './unprotected/signup/signup.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'exchange', component: ExchangeComponent },
    { path: 'news', component: NewsComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'support', component: SupportComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);