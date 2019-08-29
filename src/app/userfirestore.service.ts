import { Injectable } from '@angular/core';

//Modulos para uso de la base de datos de usuarios
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserfirestoreService {

  //Inyectamos el Modulo
  constructor(private firestore: AngularFirestore) { }

  //Añadir un usuario con collection
  public createUser(uid, data: {contraseña: number, edad:number, nombre: string, sexo:string, correo:string}){
    console.log(uid);
    return this.firestore.collection('users').doc(uid).set(data);
  }

  //obtener un usuario mediante id con la funcion doc
  public getUser(correo: string){
    return this.firestore.collection('users').doc(correo).valueChanges();
  }

  //Obetener todos los usuarios de la base de datos
  public getUsers(){
    return this.firestore.collection('users').valueChanges();
  }

  //Funcion para que el usuario modifique sus datos
  public updateUser(correo:string, data:any){
    return this.firestore.collection('users').doc(correo).set(data);
  }

  public addCar(id:string, id_coche:string){
    return this.firestore.collection('users').doc(id).update({ coches: firebase.firestore.FieldValue.arrayUnion(id_coche)});
  }
}
