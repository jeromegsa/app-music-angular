import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { AsideComponent } from './components/aside/aside.component';
import { SearchAlbumsComponent } from './components/search-albums/search-albums.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListAlbumsComponent } from './components/list-albums/list-albums.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponentsComponent } from './components/details-components/details-components.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AsideComponent,
    SearchAlbumsComponent,
    LoginComponent,
    PageNotFoundComponent,
    ListAlbumsComponent,
    DetailsComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
