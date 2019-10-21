import { Component } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'
import { environment } from '../environments/environment';
@Component({
  selector: 'pagina-principal-lol',
  templateUrl: './lolHomePage.component.html',
  styleUrls: ['./lolHomePage.component.css']
})
export class HomePageLolComponent {
  PROD:any = environment.production;
  constructor(private http: Http, private router: Router) {
  }
  campeones: any;
  tabs = { backgroundcolor: "primary" };
  nombreInvocador: any;
  cargando: any;
  champions: any;
  detallesCampeon(nombreCampeon) {
    this.router.navigate(['champion/lol/'+ nombreCampeon]);
  }

  buscarEstadisticas(nombreInvocador) {
    this.http.get('http://localhost:4200/buscarInvocador/' + nombreInvocador)
      .subscribe(
        res => console.log(res)
      );
  }
  ngOnInit(){
    this.cargando =true;
    this.obtenerCampeonesLol();
  }
  obtenerCampeonesLol(){
    var url ="";
    if(this.PROD){
      url = 'https://nextlevelserver.herokuapp.com/';
    }else{
      url = 'http://localhost:8081/';
    }
    this.http.get(url+'lol/obtenerCampeones')
    .map(res => res.json())
    .subscribe(data => { 
    this.champions = {type:data.type,version:data.version,champions:[]}      
    let keyArr: any[] = Object.keys(data.data);
    keyArr.forEach(key => {
      this.champions.champions.push(data.data[key]);
    });
    this.campeones = this.champions.champions;
  })
  
  }
}
