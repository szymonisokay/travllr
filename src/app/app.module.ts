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
import { MatButtonModule } from '@angular/material/button';
import { CartComponent } from './cart/cart.component';
import { SearchbarComponent } from './offers/searchbar/searchbar.component';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TripDetailsComponent } from './offers/content/trip-details/trip-details.component';
import { FormsModule } from '@angular/forms';
import { SearchDataService } from './service/search-data.service';
import { SearchPipe } from './search.pipe';
import { FilterPipe } from './pipes/filter.pipe';

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
    ContentComponent,
    CartComponent,
    SearchbarComponent,
    FooterComponent,
    TripDetailsComponent,
    SearchPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [SearchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
