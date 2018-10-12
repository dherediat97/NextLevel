import { Component,NgZone  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'pagina-principal',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.css']
})
export class HomePageComponent {
  constructor(private router: Router) {
  }
  tabs = { backgroundcolor: "primary" };
  tituloApp = "Next Level";
  onSelectChange(event) {
    if (event.index == 0) {
      this.tabs.backgroundcolor = "primary";

    } else if(event.index == 1) {
      this.tabs.backgroundcolor = "accent";

    }else if(event.index == 2){
      this.tabs.backgroundcolor = "warn";

    }
  }

}
