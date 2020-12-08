import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { SubmenuComponent } from './submenu/submenu.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { BlogComponent } from './blog/blog.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { FiltersComponent } from './offers/filters/filters.component';
import { ContentComponent } from './offers/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SubmenuComponent,
    HomeComponent,
    OffersComponent,
    BlogComponent,
    AccountComponent,
    LoginComponent,
    FiltersComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
