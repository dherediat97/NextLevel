import { Component, OnInit } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Component({
  selector: 'pagina-principal-paladins',
  templateUrl: './paladinsHomePage.component.html',
  styleUrls: ['./paladinsHomePage.component.css']
})
export class HomePagePaladinsComponent implements OnInit{
  constructor(private http: Http, private router: Router) {
  }
  PROD:any = environment.production;
  cargando:any;
  campeones: any;
  tabs = { backgroundcolor: "primary" };

  detallesCampeon(id) {
    this.router.navigate(['champion/paladins/'+ id]);
  }
  ngOnInit(){
    this.cargando = true;
    this.obtenerCampeonesPaladins();
  }
  obtenerCampeonesPaladins(){
    var url ="";
    if(this.PROD){
      url = 'https://nextlevelserver.herokuapp.com/';
    }else{
      url = 'http://localhost:8081/';
    }
    this.http.get(url+'paladins/obtenerCampeones')
      .subscribe(
        res => this.campeones = res.json().campeones
    );
    this.cargando = false;
  }

}
