import { Component } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Component({
  selector: 'detalle-pagina-campeon',
  templateUrl: './detailsChampion.component.html',
  styleUrls: ['./detailsChampion.component.css']
})
export class DetailsChampionComponent {
  idCampeon: any;
  PROD:any = environment.production;
  campeon: any;
  skinsCampeon: any;
  constructor(private http: Http, private router: Router,private route: ActivatedRoute) {
    this.idCampeon = this.route.snapshot.params['id'];
  }
  
  ngOnInit(){
    this.idCampeon = this.route.snapshot.params['id'];
    this.cargarDatosCampeon();
  }

  cargarDatosCampeon(){
   this.idCampeon = this.route.snapshot.params['id'];
   this.obtenerCampeonPaladins(this.idCampeon);
   this.obtenerSkinCampeonPaladins(this.idCampeon);
  }

  obtenerSkinCampeonPaladins(idCampeon){
    var url ="";
    if(this.PROD){
      url = 'https://nextlevelserver.herokuapp.com/';
    }else{
      url = 'http://localhost:8081/';
    }
    this.http.get(url+'paladins/obtenerSkinCampeon/'+idCampeon)
      .subscribe(
        res => this.skinsCampeon = res.json().skin
    );
  }
  obtenerCampeonPaladins(idCampeon){
    if(idCampeon != undefined){
      var url ="";
        if(this.PROD){
          url = 'https://nextlevelserver.herokuapp.com/';
        }else{
          url = 'http://localhost:8081/';
        }
         //Cojer Datos Basicos del campeon (img y nombre)
        this.http.get(url+'paladins/obtenerCampeon/'+idCampeon)
          .subscribe(
            res => this.campeon = res.json().campeon[0]
        );
      
    }
  }
}
