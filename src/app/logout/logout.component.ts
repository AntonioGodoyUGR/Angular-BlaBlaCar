import { Component, OnInit } from '@angular/core';

//service para utilizar las funciones de login
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  email: string;
  password: string;

  constructor(public authService: AuthService, private router: Router) { }

  /*
    Estas tres funciones tienen como unico comportamiento la llamada
    a los metodos implementados en el AuthService, y seran llamadas con los
    botones de la vista
  */
  logout(){
    this.authService.logout();
    this.router.navigate(['../']);
  }
}
