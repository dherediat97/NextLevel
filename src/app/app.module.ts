
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomePageComponent } from '../homePage/homePage.component';
import { HomePageLolComponent } from '../lolHomePage/lolHomePage.component';
import { HomePagePaladinsComponent } from '../paladinsHomePage/paladinsHomePage.component';
import { HomePageSmiteComponent } from '../smiteHomePage/smiteHomePage.component';
import { DetailsChampionComponent } from '../detailsChampionPage/detailsChampion.component';
import { AppComponent } from '../appPage/app.component';
const appRoutes: Routes = [
  { path: '**', redirectTo: 'homePage', pathMatch: 'full' },
  { path: 'champion/:id',component: DetailsChampionComponent },
  {
    path: 'homePage',
    component: HomePageComponent,
    data: { title: 'Página Principal' }
  },
  {
    path: 'homePage/homePageSmite',
    component: HomePageSmiteComponent,
    data: { title: 'Página Principal Smite' }
  },
  {
    path: 'homePage/homePagePaladins',
    component: HomePagePaladinsComponent,
    data: { title: 'Página Principal Paladins' }
  },
  {
    path: 'homePage/homePageLol',
    component: HomePageLolComponent,
    data: { title: 'Página Principal League Of Legends' }
  },
  { path: '',
    redirectTo: '/homePage',
    pathMatch: 'full'
  }
  //{ path: '**', component: PageNotFoundComponent }
];
//Angular Material
import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HomePagePaladinsComponent,
    HomePageLolComponent,
    HomePageSmiteComponent,
    DetailsChampionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
