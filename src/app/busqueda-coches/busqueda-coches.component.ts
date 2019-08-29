import { Component, OnInit } from '@angular/core';

// Componente para acceder a los coches
import { CarfirestoreService } from '../carfirestore.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarComponent } from '../car/car.component'
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// importamos servicio de usuarios para acceder al usuario actual
import { UserfirestoreService } from '../userfirestore.service';
// servicio de autentificacion
import { AngularFireAuth } from 'angularfire2/auth';
// servicio de la API apixu
import { ApixuService } from '../apixu.service';

@Component({
  selector: 'app-busqueda-coches',
  templateUrl: './busqueda-coches.component.html',
  styleUrls: ['./busqueda-coches.component.css']
})
export class BusquedaCochesComponent implements OnInit {

  coches: any;
  coches$: Observable<any[]>;
  mostrarCoches = false;
  mostrarInfo = false;
  mostrarBusqueda = true;
  dispensadorCoches: CarComponent;
  carsChanges;
  usuario: any;
  usuario$: Observable<any>;
  coche: any;
  coche$: Observable<any>;
  clima: any;
  clima2: any;
/////////////////////////////////////////////////////////////////

  cochemostrar: any;
  public newListForm = new FormGroup({
    orig: new FormControl('',Validators.required),
    end: new FormControl('', Validators.required),
  })

  constructor(private firestoreService: CarfirestoreService,
              private userService: UserfirestoreService,
              private auth: AngularFireAuth,
              private router: Router,
              private apixu: ApixuService) { }

  ngOnInit() {
  }

  public findCars(form){  
    this.coches$ = this.firestoreService.getCarsWhere('orig', form.orig).valueChanges();
    this.newListForm.setValue({
      orig: '',
      end: ''
    });
    this.carsChanges = this.coches$.subscribe((data) =>{
      this.coches = data;
      console.log(this.coches);
    });
    this.mostrarCoches=true;
    this.mostrarBusqueda=false;
  }

  // NEcesita recibir la informacion del coche seleccionado para mostrarla por pantalla
  public selectCar(coche: string){
    this.mostrarCoches=false;
    this.mostrarBusqueda=false;
    this.mostrarInfo=true;
    this.cochemostrar = coche;
    this.apixu.getWeather(this.cochemostrar.orig).subscribe(data=>{
      console.log(data)
      this.clima = data.current.condition.text;
    });
    this.apixu.getWeather(this.cochemostrar.end).subscribe(data=>{
      console.log(data)
      this.clima2 = data.current.condition.text;
    });

  }

  public seleccionado(coche:any){

    if(this.auth.auth.currentUser){
      this.userService.addCar(this.auth.auth.currentUser.uid, coche.id);
      this.firestoreService.addUser(coche.id, this.auth.auth.currentUser.uid);
      this.router.navigate(['../']);
    } else {
      this.router.navigate(['../login']);
    }
  }

  /*gOnDestroy(){
    this.carsChanges.unsubscribe();
  }*/

}
