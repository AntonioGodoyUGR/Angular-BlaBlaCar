import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//service para utilizar las funciones de login
import { AuthService } from '../auth.service';
import { UserfirestoreService } from '../userfirestore.service';

//IMporto el usuario para poder añadir nuevos usuarios

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  email: string;
  password: string;

  public users = [];
  public documentId = null;
  public currentStatus = 1;

  constructor(public authService: AuthService, private firestoreService: UserfirestoreService) {
    this.newUserForm.setValue({
      id:'',
      correo: '',
      sexo: '',
      nombre: '',
      edad: '',
      contraseña: ''
    });
  }

  public newUserForm = new FormGroup({
    contraseña: new FormControl('',Validators.required),
    edad: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
    id: new FormControl('')
  })

  /*
    Estas tres funciones tienen como unico comportamiento la llamada
    a los metodos implementados en el AuthService, y seran llamadas con los
    botones de la vista
  */

  ngOnInit() {}
   /* this.firestoreService.getUsers().subscribe((usersSnapshot)=>{
      this.users = [];
      usersSnapshot.forEach((userData: any) =>{
        this.users.push({
          id: userData.payload.doc.id,
          data: userData.payload.doc.data()
        });
      })
    });
  }*/

  public newUser(uid, form, documentId = this.documentId){
    console.log('Status: ${this.currentStatus}');
    let data = {
      contraseña: form.contraseña,
      edad: form.edad,
      nombre: form.nombre,
      sexo: form.sexo,
      correo: form.correo
    }
    this.firestoreService.createUser(uid, data).then(()=>{
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
  }

  signup(form){
    
    this.authService.signup(form.correo, form.contraseña).then(data=>{
      console.log(data);
      this.newUser(data.user.uid, form);
    });
    this.email = this. password = '';
  }


}
