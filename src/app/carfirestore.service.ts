import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

//Modulos para uso de la base de datos de usuarios
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarfirestoreService {

   //Inyectamos el Modulo
  constructor(private firestore: AngularFirestore) { }

  //Añadir un coche con collection


  //obtener un coche mediante id con la funcion doc
  public getCar(id: string){
    return this.firestore.collection('cars').doc(id).valueChanges();
  }

  //Obetener todos los coches de la base de datos
  public getCars(){
    return this.firestore.collectionGroup('cars');//.snapshotChanges();
  }

  //Funcion para que se modifiquen los datos de un coche
  public updateCar(documentId:string, id:any){
    return this.firestore.collection('cars').doc(documentId).set({id: id},{merge: true});
  }

  public createCar(data: {conductor: string, lleno: boolean, precio: number, end: string, horafin: string, horaini:string, orig:string}){
    return this.firestore.collection('cars').add(data).then(id => {
      this.updateCar(id.id, id.id);
    });
  }

  public getCarsWhere(parameterone: string, parametertwo: string){
    return this.firestore.collection('cars', ref => ref.where(parameterone, '==', parametertwo));
    //return coches;*/
    //return this.firestore.collection('cars');
  }

  public addUser(id:string, id_usuario: string){
    this.firestore.collection('cars').doc(id).update({ users: firebase.firestore.FieldValue.arrayUnion(id_usuario), num_users: firebase.firestore.FieldValue.increment(1)});
  }
}
