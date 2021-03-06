import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './unprotected/home/home.component';
import { ExchangeComponent } from './unprotected/exchange/exchange.component';
import { NewsComponent } from './unprotected/news/news.component';
import { NewsDetailsComponent } from './unprotected/news/details/news-details.component';
import { TermsComponent } from './unprotected/terms/terms.component';
import { FaqComponent } from './unprotected/faq/faq.component';
import { AskComponent } from './unprotected/faq/ask/ask.component';
import { SupportComponent } from './unprotected/support/support.component';
import { TicketDetailComponent } from './unprotected/support/detail/ticket-detail.component';
import { SubmitTicketComponent } from './unprotected/support/submit-ticket/submit-ticket.component';
import { LoginComponent } from './unprotected/login/login.component';
import { SignupComponent } from './unprotected/signup/signup.component';
import { ProfileComponent } from './protected/profile/profile.component';
import { AuthGuardService } from './shared/services/auth-guard.service';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'exchange', component: ExchangeComponent, pathMatch: 'full' },
  { path: 'news', component: NewsComponent },
  { path: 'news/:id', component: NewsDetailsComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'ask', component: AskComponent, canActivate:[AuthGuardService] },
  { path: 'support', component: SupportComponent, canActivate:[AuthGuardService] },
  { path: 'support/:id', component: TicketDetailComponent, canActivate:[AuthGuardService] },
  { path: 'submit', component: SubmitTicketComponent, canActivate:[AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
