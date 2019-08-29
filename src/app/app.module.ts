import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Para autenticacion
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Service que implementara las funciones de auth
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { UserComponent } from './user/user.component';


import { AngularFirestoreModule } from 'angularfire2/firestore';
//Service para acceder a la base de datos de usuarios
import { UserfirestoreService } from './userfirestore.service';
//Service para acceder a la base de datos de coches
import { CarfirestoreService } from './carfirestore.service';

//Modulos para formularios de modificacion de base de datos
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//Modulo para el componente coche
import { CarComponent } from './car/car.component';

//MOdulo para routing
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BusquedaCochesComponent } from './busqueda-coches/busqueda-coches.component';
import { PublicarComponent } from './publicar/publicar.component';
import { ProfileComponent } from './profile/profile.component';
import { CarProfileComponent } from './car-profile/car-profile.component';

import { AuthGuardService } from './guards/auth-guard.service';

//MODULOS PARA CONECTAR CON LA API DE APIXU
import { HttpClientModule } from '@angular/common/http';
import { ApixuService } from './apixu.service';
//RUTAS
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cars', component: CarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'users', component: UserComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'busqueda-coches', component: BusquedaCochesComponent},
  {path: 'publicar', component: PublicarComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'car-profile', component: CarProfileComponent, canActivate: [AuthGuardService]},
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    UserComponent,
    CarComponent,
    HomeComponent,
    BusquedaCochesComponent,
    PublicarComponent,
    ProfileComponent,
    CarProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [AuthService, UserfirestoreService, CarfirestoreService, ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
