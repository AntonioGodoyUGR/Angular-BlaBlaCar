import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AngularFireAuth, private router:Router) {}

  canActivate(){
    if(this.auth.auth.currentUser){
      return true;
    }else{
      this.router.navigate(['../login']);
      return false;
    }
  }
}
