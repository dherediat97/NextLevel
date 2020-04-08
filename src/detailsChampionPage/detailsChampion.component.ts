import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../environments/environment';
@Component({
  selector: 'detalle-pagina-campeon',
  templateUrl: './detailsChampion.component.html',
  styleUrls: ['./detailsChampion.component.css']
})
export class DetailsChampionComponent {

  //Riot Games
  nombreCampeon: any;

  //HiRez Games
  idCampeon: any;
  PROD: any = environment.production;
  campeon: any;
  skinsCampeon: any;
  versionLol: any;
  juego: any;

  constructor(private http: Http, private route: ActivatedRoute) {
    this.idCampeon = this.route.snapshot.params['id'];
    this.juego = this.route.snapshot.params['juego'];
    this.versionLol = window.localStorage.getItem('versionLol');
  }

  ngOnInit() {
    this.juego = this.route.snapshot.params['juego'];
    if (this.juego == 'paladins') {
      this.idCampeon = this.route.snapshot.params['id'];
      this.cargarDatosCampeonPaladins();
    } else if (this.juego == 'smite') {
      this.nombreCampeon = this.route.snapshot.params['id'];
      this.cargarDatosCampeonSmite();
    } else if (this.juego == 'lol') {
      this.nombreCampeon = this.route.snapshot.params['id'];
      this.cargarDatosCampeonLol();
    }
  }
  cargarDatosCampeonLol() {
    this.nombreCampeon = this.route.snapshot.params['id'];
    this.obtenerCampeonLol(this.nombreCampeon);
  }
  cargarDatosCampeonSmite() {
    this.idCampeon = this.route.snapshot.params['id'];
    this.obtenerCampeonSmite(this.idCampeon);
    this.obtenerSkinDiosSmite(this.idCampeon);
  }
  cargarDatosCampeonPaladins() {
    this.idCampeon = this.route.snapshot.params['id'];
    this.obtenerCampeonPaladins(this.idCampeon);
    this.obtenerSkinCampeonPaladins(this.idCampeon);
  }
  obtenerSkinDiosSmite(idCampeon: any) {
    var url = "";
    if (this.PROD) {
      url = 'https://nextlevelserver.herokuapp.com/';
    } else {
      url = 'http://localhost:8081/';
    }
    this.http.get(url + 'smite/obtenerSkinDios/' + idCampeon)
      .subscribe(
        res => this.skinsCampeon = res.json().skin
      );
  }
  obtenerSkinCampeonPaladins(idCampeon: any) {
    var url = "";
    if (this.PROD) {
      url = 'https://nextlevelserver.herokuapp.com/';
    } else {
      url = 'http://localhost:8081/';
    }
    this.http.get(url + 'paladins/obtenerSkinCampeon/' + idCampeon)
      .subscribe(
        res => this.skinsCampeon = res.json().skin
      );
  }
  obtenerCampeonSmite(idCampeon: any) {
    if (idCampeon != undefined) {
      var url = "";
      if (this.PROD) {
        url = 'https://nextlevelserver.herokuapp.com/';
      } else {
        url = 'http://localhost:8081/';
      }
      //Cojer Datos Basicos del campeon (img y nombre)
      this.http.get(url + 'smite/obtenerDios/' + idCampeon)
        .subscribe(
          res => this.campeon = res.json().dios[0]
        );

    }
  }
  obtenerCampeonPaladins(idCampeon: any) {
    if (idCampeon != undefined) {
      var url = "";
      if (this.PROD) {
        url = 'https://nextlevelserver.herokuapp.com/';
      } else {
        url = 'http://localhost:8081/';
      }
      //Cojer Datos Basicos del campeon (img y nombre)
      this.http.get(url + 'paladins/obtenerCampeon/' + idCampeon)
        .subscribe(
          res => this.campeon = res.json().campeon[0]
        );

    }
  }
  obtenerCampeonLol(nombreCampeon: any) {
    if (nombreCampeon != undefined) {
      var url = "";
      if (this.PROD) {
        url = 'https://nextlevelserver.herokuapp.com/';
      } else {
        url = 'http://localhost:8081/';
      }
      //Cojer Datos Basicos del campeon (img y nombre)
      this.http.get(url + 'lol/obtenerCampeon/' + nombreCampeon)
        .subscribe(
          res => this.campeon = res.json()
        );
    }
  }
}
