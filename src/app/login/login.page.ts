import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario:string = "";
  contrasena:string = "";

  constructor(private router:Router,private helper:HelperService) { }

  ngOnInit() {
  }

  registro(){
    this.router.navigateByUrl("registro");
  }

  onLogin(){
/*     console.log("Usuario",this.usuario);
    console.log("Contraseña",this.contrasena); */


    if (this.usuario == "") {
      //alert("Debe ingresar un usuario");
      this.helper.showAlert("Debe ingresar un usuario","Error");
      return;
    }
    if (this.contrasena == "") {
      this.helper.showAlert("Debe ingresar una contraseña", "Error");
      return;
    }

    if (this.usuario == this.usuario && this.contrasena == this.contrasena) {
      //alert("Login correcto");
      this.router.navigateByUrl('home');
    }else{
      this.helper.showAlert("Usuario o contraseña incorrecta.", "Error");
    }

    
    
  }



}