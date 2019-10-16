import { Component } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { environment } from '../environments/environment';
@Component({
  selector: 'pagina-principal-lol',
  templateUrl: './lolHomePage.component.html',
  styleUrls: ['./lolHomePage.component.css']
})
export class HomePageLolComponent {
  PROD:any = environment.production;
  constructor(private http: Http) {
  }
  campeones: any;
  tabs = { backgroundcolor: "primary" };
  nombreInvocador: any;
  cargando: any;

  detallesCampeon(id) {
  //  this.router.navigate(['championDetail',id]);
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
      .subscribe(
        res => this.campeones = res.json().campeones
      );
      this.cargando = false;
  }
}
