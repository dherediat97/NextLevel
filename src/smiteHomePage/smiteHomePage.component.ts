import { Component, OnInit } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
@Component({
  selector: 'pagina-principal-smite',
  templateUrl: './smiteHomePage.component.html',
  styleUrls: ['./smiteHomePage.component.css']
})
export class HomePageSmiteComponent implements OnInit{
  constructor(private http: Http) {
  }
  dioses: any;
  tituloApp = "Next Level";

  detallesCampeon(id) {

  }
  ngOnInit(){
    this.obtenerDioses();
  }
  obtenerDioses(){
    this.http.get('http://localhost:9797/obtenerDioses')
      .subscribe(
        res => this.dioses = res.json().dioses
      );
  }
}
