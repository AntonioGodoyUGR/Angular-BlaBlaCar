import { Component, OnInit } from '@angular/core';
//service para utilizar las funciones de login
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email: string;
  password: string;

  constructor(public authService: AuthService, private router: Router) { }

  /*
    Estas tres funciones tienen como unico comportamiento la llamada
    a los metodos implementados en el AuthService, y seran llamadas con los
    botones de la vista
  */
  login(){
    this.authService.login(this.email, this.password);
    this.email = this. password = '';
    this.router.navigate(['../']);
  }

}
