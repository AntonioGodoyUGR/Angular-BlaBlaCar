import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlaBlaCar';

  constructor(public auth: AngularFireAuth, public authService:AuthService, private router: Router ) { }
  ngOnInit(){}

  logout(){
    this.authService.logout();
    this.router.navigate(['../']);
    console.log("abandono la sesion");
  }
}
