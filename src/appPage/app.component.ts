import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'next-level-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route:ActivatedRoute,private router:Router) {
  }
  tabs = { backgroundcolor: "warn" };
  tituloApp = "Next Level";
  onSelectChange(event: MatTabChangeEvent) {
    if (event.index == 0) {
      this.tabs.backgroundcolor = "warn";
      this.router.navigate(['homePageLol']);
    } else if(event.index == 1) {
      this.tabs.backgroundcolor = "accent";
      this.router.navigate(['homePagePaladins']);
    }else if(event.index == 2){
      this.tabs.backgroundcolor = "primary";
      this.router.navigate(['homePageSmite']);
    }
  }
}
