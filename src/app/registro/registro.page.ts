import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { HelperService } from '../../services/helper.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario:string = '';
  contrasena:string = '';
  

  constructor(    private storage:StorageService,
                  private helper:HelperService) {
              
   }

  ngOnInit() {
  }

  registro(){
    if (this.usuario == '') {
      this.helper.showAlert("Debe ingresar un usuario","Error");
      return;
    }
    if (this.contrasena == '') {
      this.helper.showAlert("Debe ingresar una contraseña","Error");
      return;
    }

    var usuario = [{
      correo:this.usuario,
      contrasena:this.contrasena
    }];

    this.storage.guardarUsuario(usuario);
    this.helper.showAlert("Usuario registrado correctamente.","Información");
    
  }

}
