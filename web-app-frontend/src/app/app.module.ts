import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';


import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './login/home/home.component';
import { LoginNavComponent } from './login/login-nav/login-nav.component';
import { RegNavComponent } from './register/reg-nav/reg-nav.component';
import { HomeNavComponent } from './login/home/home-nav/home-nav.component';
import { ServerService } from './services/server.service';
import { HttpClientModule } from '@angular/common/http';
import { AddFoodComponent } from './login/home/add-food/add-food.component';
import { FoodAPIService } from './services/food-api.service';
import { FoodDBComponent } from './login/home/food-db/food-db.component';

const routes: Routes =([
  {path: "", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "home", component: HomeComponent},
  {path: "foods", component: FoodDBComponent},
  
  

])

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LoginNavComponent,
    RegNavComponent,
    HomeNavComponent,
    AddFoodComponent,
    FoodDBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [ServerService, FoodAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
