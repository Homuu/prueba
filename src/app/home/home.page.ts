import { Component } from '@angular/core';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}

  resultadoScan:any='';


  ngOnInit() {
  }
  async scan(){
    this.resultadoScan = (await  BarcodeScanner.scan()).code;
    console.log("Resultado scan",JSON.parse(this.resultadoScan));
  }
  
  logout(){
    this.router.navigateByUrl("login");
  }

}
