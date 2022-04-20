import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';


import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginNavComponent } from './login/login-nav/login-nav.component';
import { RegNavComponent } from './register/reg-nav/reg-nav.component';
import { HomeNavComponent } from './home/home-nav/home-nav.component';
import { ServerService } from './services/server.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes =([
  {path: "", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "home", component: HomeComponent},
  
  

])

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LoginNavComponent,
    RegNavComponent,
    HomeNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
