import { Component, OnInit } from '@angular/core';
import { UserfirestoreService } from '../userfirestore.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users = [];
  public documentId = null;
  public currentStatus = 1;
  public newUserForm = new FormGroup({
    contraseña: new FormControl('',Validators.required),
    edad: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
    id: new FormControl('')
  })
  constructor(private firestoreService: UserfirestoreService) {
    this.newUserForm.setValue({
      id:'',
      correo: '',
      sexo: '',
      nombre: '',
      edad: '',
      contraseña: ''
    });
  }

  ngOnInit() {
    this.firestoreService.getUsers().subscribe((usersSnapshot)=>{
      this.users = [];
      usersSnapshot.forEach((userData: any) =>{
        this.users.push({
          id: userData.payload.doc.id,
          data: userData.payload.doc.data()
        });
      })
    });
  }

  //METODO QUE DEPENDIENDO DEL ESTADO CREA O MODIFICA USUARIOS
  /*public newUser(form, documentId = this.documentId){
    console.log('Status: ${this.currentStatus}');
    let data = {
      contraseña: form.contraseña,
      edad: form.edad,
      nombre: form.nombre,
      sexo: form.sexo,
      correo: form.correo
    }
    this.firestoreService.createUser(data).then(()=>{
      console.log('Usuatio registrado de forma exitosa');
      this.newUserForm.setValue({
        id:'',
        correo: '',
        sexo: '',
        nombre: '',
        edad: '',
        contraseña: ''
      });
    },(error)=>{
      console.error(error);
    });
  }*/

  //TODO añadir los metodos de editar y eliminar
  //Si el de añadir funciona no habra problemas

}
