import { Component, OnInit } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map'
import { Router } from '@angular/router';
@Component({
  selector: 'pagina-principal-smite',
  templateUrl: './smiteHomePage.component.html',
  styleUrls: ['./smiteHomePage.component.css']
})
export class HomePageSmiteComponent implements OnInit{
  constructor(private http: Http, private router: Router) {
  }
  PROD:any = environment.production;
  dioses: any;
  tituloApp = "Next Level";

  detallesCampeon(id) {
    this.router.navigate(['champion/smite/'+ id]);
  }
  ngOnInit(){
    this.obtenerDioses();
  }
  obtenerDioses(){
    var url ="";
    if(this.PROD){
      url = 'https://nextlevelserver.herokuapp.com/';
    }else{
      url = 'http://localhost:8081/';
    }
    this.http.get(url+'smite/obtenerDioses')
      .subscribe(
        res => this.dioses = res.json().dioses
      );
    }
}
