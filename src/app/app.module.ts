import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './propert/property-card/property-card.component';
import { PropertyListComponent } from './propert/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './propert/add-property/add-property.component';
import { Routes,RouterModule } from '@angular/router';
import { PropertyDetailComponent } from './propert/property-detail/property-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

const appRoutes : Routes = [
  {path:'add-property',component:AddPropertyComponent},
  {path:'property-detail/:id',component:PropertyDetailComponent},
  {path:'rent-property',component:PropertyListComponent},
  {path:'user/login',component:UserLoginComponent},
  {path:'user/register',component:UserRegisterComponent},
  {path:'',component:PropertyListComponent},
  {path:'**',component:PropertyListComponent},


]

@NgModule({
  declarations: [	
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
      NavBarComponent,
      AddPropertyComponent,
      PropertyDetailComponent,
      UserRegisterComponent,
      UserLoginComponent,
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),FormsModule
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
