import { Component, OnInit } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'pagina-principal-paladins',
  templateUrl: './paladinsHomePage.component.html',
  styleUrls: ['./paladinsHomePage.component.css']
})
export class HomePagePaladinsComponent implements OnInit{
  constructor(private http: Http, private router: Router) {
  }
  campeones: any;
  tabs = { backgroundcolor: "primary" };

  detallesCampeon(id) {

  }
  ngOnInit(){
    this.obtenerCampeonesPaladins();
  }
  obtenerCampeonesPaladins(){
    this.http.get('http://localhost:4200/campeonesPaladins')
      .subscribe(
        res => this.campeones = res.json().campeones
      );
  }

}
