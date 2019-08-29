import { Component, OnInit } from '@angular/core';

//Modulo de autentificacion que nos dara la ID del usuario en sesion
import { AuthService } from '../auth.service';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserfirestoreService } from '../userfirestore.service';
import { CarfirestoreService } from '../carfirestore.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  constructor(private auth: AngularFireAuth, private firestore: AngularFirestore, private firestoreService: UserfirestoreService, private carService: CarfirestoreService) { }
  
  usuario: any;
  usuario$ : any;
  viajes : any[];
  coches : any[] = [];
  coche$: Observable<any>;
  ngOnInit() {
    this.usuario$ = this.firestoreService.getUser(this.auth.auth.currentUser.uid);
    this.usuario$.subscribe((data)=>{
      this.usuario = data;
      this.viajes = this.usuario.coches;
      this.viajes.forEach(data=>{
        this.coche$ = this.carService.getCar(data);
        this.coche$.subscribe((data) =>{
          this.coches.push(data);
        });
      });
    }); 
  }
}
