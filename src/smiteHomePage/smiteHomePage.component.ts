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
  //  this.router.navigate(['championDetail',id]);
  }

  ngOnInit(){
    this.http.get('http://localhost:4200/diosesSmite')
      .subscribe(
        res => this.dioses = res.json().dioses
      );
  }

}