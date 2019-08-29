import { Injectable } from '@angular/core';

//MOdulos para hacer uso del logeo de firebase
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

//Hacer variables observables
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor( private auth: AngularFireAuth) {
    this.user = auth.authState;
  }

  //REGISTRO
  /*
    La función recibe dos string usuario y contraseña
    y con estos realiza una llamada a la funcion createUser
    de AngularFireAuth la cual devuelve el estado de la operacion
  */
  signup(email: string, password: string){
    return this.auth.auth.createUserWithEmailAndPassword(email, password);

  }

  //INICIO DE SESION
  /*
    La funcion recibe dos string usario y contraseña,
    y con estos realiza una llamada a la funcion singIn de
    AngularFireAuth que logeara correctamente al usuario solo si
    este está registradom, en caso contrario, error
  */
  login(email:string, password:string){
    this.auth.auth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Se ha iniciado sesion correctamente');
      }).catch(err =>{
        console.log('Ha habido un problema en el inicio de seion', err.message);
      }); 
  }

  //FIN DE SESION
  //lamada al método singout de AngularFireAuth
  logout(){
    this.auth.auth.signOut();
  }
  
}
