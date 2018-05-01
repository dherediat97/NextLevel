import { Component } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
@Component({
  selector: 'pagina-principal-lol',
  templateUrl: './lolHomePage.component.html',
  styleUrls: ['./lolHomePage.component.css']
})
export class HomePageLolComponent {
  constructor(private http: Http) {
  }
  tabs = { backgroundcolor: "primary" };
  invocador: any;
  nombreInvocador: any;


  detallesCampeon(id) {
  //  this.router.navigate(['championDetail',id]);
  }

  buscarEstadisticas(nombreInvocador) {
    this.http.get('http://localhost:4200/buscarInvocador/' + nombreInvocador)
      .subscribe(
        res => console.log(res)
      );
  }
}
