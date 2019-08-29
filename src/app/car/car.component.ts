import { Component, OnInit } from '@angular/core';

//Modulos para utilizar la base de datos
import { CarfirestoreService } from '../carfirestore.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  public cars = [];
  public documentId = null;
  public newUserForm = new FormGroup({
    conductor: new FormControl('',Validators.required),
    lleno: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    end: new FormControl('', Validators.required),
    horafin: new FormControl('', Validators.required),
    horaend: new FormControl('', Validators.required),
    orig: new FormControl('', Validators.required),
    id: new FormControl('')
  })

  constructor(private firestoreService: CarfirestoreService) {
    this.newUserForm.setValue({
      id:'',
      orig: '',
      horaini: '',
      horafin: '',
      end: '',
      precio: '',
      lleno:'',
      conductor:''
    });
  }

 /* ngOnInit() {
    this.firestoreService.getCars().subscribe((carsSnapshot)=>{
      this.cars = [];
      carsSnapshot.forEach((carData: any) =>{
        this.cars.push({
          id: carData.payload.doc.id,
          data: carData.payload.doc.data()
        });
      })
    });
  }*/

  ngOnInit(){}

  //Funcion que utiliza el service de la base de datos de coches
  //Para añadir un nuevo coche y limpiar los valores de las variables del Form
  public newCar(form, documentId = this.documentId){
    console.log('Status: ${this.currentStatus}');
    let data = {
      conductor: form.conductor,
      lleno: form.lleno,
      precio: form.precio,
      end: form.end,
      horaini: form.horaini,
     horafin: form.horafin,
      orig: form.orig
    }
    this.firestoreService.createCar(data).then(()=>{
      console.log('Usuatio registrado de forma exitosa');
      this.newUserForm.setValue({
        id:'',
        orig: '',
        horaini: '',
        horafin: '',
        end: '',
        precio: '',
        lleno:'',
        conductor:''
      });
    },(error)=>{
      console.error(error);
    });
  }
  //TODO añadir los metodos de editar y eliminar
  //Si el de añadir funciona no habra problemas

}
