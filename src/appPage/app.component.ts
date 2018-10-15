import { Component } from '@angular/core';
@Component({
  selector: 'next-level-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
  }
  tabs = { backgroundcolor: "primary" };
  tituloApp = "Next Level";
  onSelectChange(event) {
    console.log(event)
    if (event.index == 0) {
      this.tabs.backgroundcolor = "primary";

    } else if(event.index == 1) {
      this.tabs.backgroundcolor = "accent";

    }else if(event.index == 2){
      this.tabs.backgroundcolor = "warn";

    }
  }
}
