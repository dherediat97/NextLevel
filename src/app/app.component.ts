import { Component } from '@angular/core';

@Component({
  selector: 'next-level-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
