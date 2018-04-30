import { Component } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
//import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
@Component({
  selector: 'next-level-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: Http) {
  }
  tabs = { backgroundcolor: "primary" };
  campeones: any;
  invocador: any;
  nombreInvocador: any;
  tituloApp = "Next Level";
  regiones = [
    { value: 'euw', viewValue: 'Oeste de Europa' },
    { value: 'eune', viewValue: 'Este y Norte de Europa' },
    { value: 'lan', viewValue: 'Norte de Latino América' },
    { value: 'las', viewValue: 'Sur de Latino América' },
    { value: 'br', viewValue: 'Brasil' },
    { value: 'jp', viewValue: 'Japón' },
    { value: 'ru', viewValue: 'Rusia' },
    { value: 'tr', viewValue: 'Turquia' },
    { value: 'oc', viewValue: 'Oceanía' },
    { value: 'kr', viewValue: 'República de Corea' }
  ];
  onSelectChange(event) {
    if (event.index == 0) {
      this.tabs.backgroundcolor = "primary";
    } else {
      this.tabs.backgroundcolor = "accent";
      this.cargarCampeones();
    }
  }
  detallesCampeon(id) {
  //  this.router.navigate(['championDetail',id]);
  }
  cargarCampeones() {
    this.http.get('http://localhost:4200/campeonesPaladins')
      .subscribe(
        res => this.campeones = res.json().campeones
      );
  }
  buscarEstadisticas(nombreInvocador) {
    this.http.get('http://localhost:4200/buscarInvocador/' + nombreInvocador)
      .subscribe(
        res => console.log(res)
      );
  }
}
