import { Component, OnInit } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
@Component({
  selector: 'pagina-principal-paladins',
  templateUrl: './paladinsHomePage.component.html',
  styleUrls: ['./paladinsHomePage.component.css']
})
export class HomePagePaladinsComponent implements OnInit{
  constructor(private http: Http) {
  }
  campeones: any;
  tabs = { backgroundcolor: "primary" };

  detallesCampeon(id) {
  //  this.router.navigate(['championDetail',id]);
  }
  ngOnInit(){
    this.http.get('http://localhost:4200/campeonesPaladins')
      .subscribe(
        res => this.campeones = res.json().campeones
      );
  }


}
