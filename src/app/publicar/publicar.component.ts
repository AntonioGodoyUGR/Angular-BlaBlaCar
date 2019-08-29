import { Component, OnInit } from '@angular/core';

import { CarfirestoreService } from '../carfirestore.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarComponent } from '../car/car.component'
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {

  public documentId = null;
  public currentStatus = 1;
  
  constructor(public firestoreService: CarfirestoreService) {
    this.newCarForm.setValue({
      id:'',
      orig: '',
      horafin: '',
      horaini: '',
      end: '',
      precio: '',
      conductor: '',
      lleno:'',
    });
  }

  public newCarForm = new FormGroup({
    conductor: new FormControl('',Validators.required),
    precio: new FormControl('',Validators.required),
    end: new FormControl('',Validators.required),
    horaini: new FormControl('',Validators.required),
    horafin: new FormControl('',Validators.required),
    orig: new FormControl('',Validators.required),
    id: new FormControl(''),
    lleno: new FormControl(''),
  })

  ngOnInit() {
  }

  public newCar(form, documentId = this.documentId){
    console.log('Status: ${this.currentStatus}');
    let data = {
      conductor: form.conductor,
      lleno: false,
      precio: form.precio,
      end: form.end,
      horaini: form.horaini,
      horafin: form.horafin,
      orig: form.orig
    }
    this.firestoreService.createCar(data).then((data)=>{
      console.log('Viaje registrado de forma exitosa', data);
      this.newCarForm.setValue({
        id:'',
        orig: '',
        horafin: '',
        horaini: '',
        end: '',
        precio: '',
        conductor: '',
        lleno: '',
      });
    },(error)=>{
      console.error(error);
    });
  }
}
