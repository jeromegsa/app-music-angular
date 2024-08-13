import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DetailsComponentsComponent } from './components/details-components/details-components.component';
import { AsideComponent } from './components/aside/aside.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent,
    children:[
      {path:'albums/:id', component:AsideComponent}
    ]
   },
  { path: 'login', component: LoginComponent },
  {path:'album/:id',component:DetailsComponentsComponent},

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
