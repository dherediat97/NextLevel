import { Component } from '@angular/core';
import {HttpModule, Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
@Component({
  selector: 'next-level-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: Http) {
  }

  tituloApp="Next Level";
  regiones = [
    {value: 'euw', viewValue: 'Oeste de Europa'},
    {value: 'eune', viewValue: 'Este y Norte de Europa'},
    {value: 'lan', viewValue: 'Norte de Latino América'},
    {value: 'las', viewValue: 'Sur de Latino América'},
    {value: 'br', viewValue: 'Brasil'},
    {value: 'jp', viewValue: 'Japón'},
    {value: 'ru', viewValue: 'Rusia'},
    {value: 'tr', viewValue: 'Turquia'},
    {value: 'oc', viewValue: 'Oceanía'},
    {value: 'kr', viewValue: 'República de Corea'}
  ];
  invocador: any;
  api_key = "RGAPI-78647b29-9558-4849-805b-08b06a8e7823";

  // buscarEstadisticas(nombreInvocador){
  //   let headers: Headers = new Headers();
  //   headers.set('Content-Type', 'application/json');
  //   headers.set('X-Riot-Token',this.api_key);
  //   let opts: RequestOptions = new RequestOptions();
  //   opts.headers = headers;
  //   this.http.get('https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/'+nombreInvocador,opts)
  //   .subscribe(
  //     res => console.log(res),
  //     msg => console.error(msg)
  //   );
  // }
}
