import { Component } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
@Component({
  selector: 'pagina-principal',
  templateUrl: './paladinsHomePage.component.html',
  styleUrls: ['./paladinsHomePage.component.css']
})
export class HomePagePaladinsComponent {
  constructor(private http: Http) {
  }
  tabs = { backgroundcolor: "primary" };
  campeones: any;
  dioses: any;
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
    } else if(event.index == 1) {
      this.tabs.backgroundcolor = "accent";
      this.cargarCampeones();
    }else if(event.index == 2){
      this.tabs.backgroundcolor = "warn";
      this.cargarDioses();
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
  cargarDioses() {
    this.http.get('http://localhost:4200/diosesSmite')
      .subscribe(
        res => this.dioses = res.json().dioses
      );
  }
  buscarEstadisticas(nombreInvocador) {
    this.http.get('http://localhost:4200/buscarInvocador/' + nombreInvocador)
      .subscribe(
        res => console.log(res)
      );
  }
}
