webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lolHomePage_lolHomePage_component__ = __webpack_require__("./src/lolHomePage/lolHomePage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paladinsHomePage_paladinsHomePage_component__ = __webpack_require__("./src/paladinsHomePage/paladinsHomePage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__smiteHomePage_smiteHomePage_component__ = __webpack_require__("./src/smiteHomePage/smiteHomePage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detailsChampionPage_detailsChampion_component__ = __webpack_require__("./src/detailsChampionPage/detailsChampion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__appPage_app_component__ = __webpack_require__("./src/appPage/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: 'champion/:juego/:id', component: __WEBPACK_IMPORTED_MODULE_5__detailsChampionPage_detailsChampion_component__["a" /* DetailsChampionComponent */] },
    {
        path: 'homePageSmite',
        component: __WEBPACK_IMPORTED_MODULE_4__smiteHomePage_smiteHomePage_component__["a" /* HomePageSmiteComponent */],
        data: { title: 'Página Principal Smite' }
    },
    {
        path: 'homePagePaladins',
        component: __WEBPACK_IMPORTED_MODULE_3__paladinsHomePage_paladinsHomePage_component__["a" /* HomePagePaladinsComponent */],
        data: { title: 'Página Principal Paladins' }
    },
    {
        path: 'homePageLol',
        component: __WEBPACK_IMPORTED_MODULE_2__lolHomePage_lolHomePage_component__["a" /* HomePageLolComponent */],
        data: { title: 'Página Principal League Of Legends' }
    },
    { path: '',
        redirectTo: '/homePageLol',
        pathMatch: 'full'
    }
    //{ path: '**', component: PageNotFoundComponent }
];
//Angular Material






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__appPage_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__paladinsHomePage_paladinsHomePage_component__["a" /* HomePagePaladinsComponent */],
                __WEBPACK_IMPORTED_MODULE_2__lolHomePage_lolHomePage_component__["a" /* HomePageLolComponent */],
                __WEBPACK_IMPORTED_MODULE_4__smiteHomePage_smiteHomePage_component__["a" /* HomePageSmiteComponent */],
                __WEBPACK_IMPORTED_MODULE_5__detailsChampionPage_detailsChampion_component__["a" /* DetailsChampionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["i" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["A" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["B" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material__["F" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__appPage_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/appPage/app.component.css":
/***/ (function(module, exports) {

module.exports = "mat-toolbar#footerPaginaPrincipal{\r\n  position: relative;\r\n  bottom: 100;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 10000;\r\n}"

/***/ }),

/***/ "./src/appPage/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"{{tabs.backgroundcolor}}\">\r\n  <span>{{tituloApp}}</span>\r\n  <span class=\"espacio-invisible-izquierda\"></span>\r\n  <!--<span matTooltip=\"Activa el modo Noche\" matSuffix>\r\n    <button aria-haspopup=\"true\" mat-icon-button=\"\" tabindex=\"-1\" style=\"touch-action: none; -moz-user-select: none;\" class=\"mat-icon-button\" aria-describedby=\"cdk-describedby-message-0\" cdk-describedby-host=\"\">\r\n    <span class=\"mat-button-wrapper\" >\r\n      <mat-icon class=\"mat-icon material-icons\" role=\"img\" aria-hidden=\"true\">format_color_fill</mat-icon>\r\n    </span>\r\n  </button>\r\n  </span>-->\r\n</mat-toolbar>\r\n<mat-tab-group (selectedTabChange)=\"onSelectChange($event)\" backgroundColor=\"{{tabs.accentcolor}}\" color=\"{{tabs.backgroundcolor}}\">\r\n  <mat-tab label=\"League of Legends\"></mat-tab>\r\n  <mat-tab label=\"Paladins\"></mat-tab>\r\n  <mat-tab label=\"Smite\"></mat-tab>\r\n</mat-tab-group>\r\n<router-outlet></router-outlet>\r\n\r\n<mat-toolbar id=\"footerPaginaPrincipal\" color=\"{{tabs.backgroundcolor}}\">\r\n  <span>{{tituloApp}} © - Creado y Desarrollado por dherediat97</span>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/appPage/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(route, router) {
        this.route = route;
        this.router = router;
        this.tabs = { backgroundcolor: "warn", accentcolor: "warn" };
        this.urlPortofolio = "https://dherediat97.github.io/SlimPortoflio/";
        this.tituloApp = "Next Level";
    }
    AppComponent.prototype.onSelectChange = function (event) {
        if (event.index == 0) {
            this.tabs.backgroundcolor = "warn";
            this.tabs.accentcolor = "warn";
            this.router.navigate(['homePageLol']);
        }
        else if (event.index == 1) {
            this.tabs.backgroundcolor = "accent";
            this.tabs.accentcolor = "accent";
            this.router.navigate(['homePagePaladins']);
        }
        else if (event.index == 2) {
            this.tabs.backgroundcolor = "primary";
            this.tabs.accentcolor = "primary";
            this.router.navigate(['homePageSmite']);
        }
    };
    AppComponent.prototype.openPortfolio = function () {
        window.open(this.urlPortofolio, "_blank");
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'next-level-app',
            template: __webpack_require__("./src/appPage/app.component.html"),
            styles: [__webpack_require__("./src/appPage/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/detailsChampionPage/detailsChampion.component.css":
/***/ (function(module, exports) {

module.exports = ".imagenCampeon{\r\n\twidth: 100px;\r\n\theight: 100px;\r\n}\r\n.imagenSkinCampeon{\r\n\twidth: 415px;\r\n\tpadding-bottom: 10px;\r\n\tpadding-top: 10px;\r\n}\r\n.detallesCampeon{\r\n\tfloat: right;\r\n\tpadding-right: 70px;\r\n\tpadding-top: 47.5px;\r\n\twidth: 30%;\r\n}\r\n.contenedorCampeon{\r\n\tfloat: left;\r\n\twidth: 60%;\r\n\tpadding-left: 50px;\r\n\tpadding-top: 30px;\r\n}\r\n.habilidad .habilidadCampeonImagen{\r\n\twidth: 100px;\r\n\theight: 100px;\r\n}"

/***/ }),

/***/ "./src/detailsChampionPage/detailsChampion.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"juego=='paladins'\">\r\n  <div *ngIf=\"campeon\">\r\n    <div class=\"detallesCampeon\">\r\n      <h3>{{campeon.Name}} - {{campeon.Title}}</h3>\r\n      <img class=\"imagenCampeon\" src=\"{{campeon.ChampionIcon_URL}}\"/>\r\n      <div class=\"campeonLore\">\r\n        Lore:\r\n        <span>{{campeon.Lore}}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"contenedorCampeon\">\r\n      <mat-tab-group>\r\n        <mat-tab label=\"Habilidades\">\r\n          <div class=\"habilidad\">\r\n            <div>{{campeon.Ability1}}</div>\r\n            <div style=\"display: inline-block; vertical-align: top;\">\r\n              <img class=\"habilidadCampeonImagen\" src=\"{{campeon.Ability_1.URL}}\"/>\r\n            </div>\r\n            <div style=\"width: 70%;display: inline-block;margin-left: 50px;text-align: justify;\">\r\n              {{campeon.Ability_1.Description}}\r\n            </div>\r\n          </div>\r\n          <div class=\"habilidad\">\r\n            <div>{{campeon.Ability2}}</div>\r\n            <div style=\"display: inline-block; vertical-align: top;\">\r\n              <img class=\"habilidadCampeonImagen\" src=\"{{campeon.Ability_2.URL}}\"/>\r\n            </div>\r\n            <div style=\"width: 70%;display: inline-block;margin-left: 50px;text-align: justify;\">\r\n              {{campeon.Ability_2.Description}}\r\n            </div>\r\n          </div>\r\n          <div class=\"habilidad\">\r\n            <div>{{campeon.Ability3}}</div>\r\n            <div style=\"display: inline-block; vertical-align: top;\">\r\n              <img class=\"habilidadCampeonImagen\" src=\"{{campeon.Ability_3.URL}}\"/>\r\n            </div>\r\n            <div style=\"width: 70%;display: inline-block;margin-left: 50px;text-align: justify;\">\r\n              {{campeon.Ability_3.Description}}\r\n            </div>\r\n            \r\n          </div>\r\n          <div class=\"habilidad\">\r\n            <div>{{campeon.Ability4}}</div>\r\n            <div style=\"display: inline-block; vertical-align: top;\">\r\n              <img class=\"habilidadCampeonImagen\" src=\"{{campeon.Ability_4.URL}}\"/>\r\n            </div>\r\n            <div style=\"width: 70%;display: inline-block;margin-left: 50px;text-align: justify;\">\r\n              {{campeon.Ability_4.Description}}\r\n            </div>\r\n            \r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Skins\">\r\n            Aspectos de {{campeon.Name}}:\r\n            <div *ngFor=\"let skin of skinsCampeon\">\r\n              <p>{{skin.skin_name}}</p>\r\n              <img class=\"imagenSkinCampeon\" src=\"\" alt=\"\">\r\n            </div>\r\n          </mat-tab>\r\n      </mat-tab-group>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"juego=='smite'\">\r\n  <div *ngIf=\"campeon\">\r\n    <div class=\"detallesCampeon\">\r\n      <h3>{{campeon.Name}} - {{campeon.Title}}</h3>\r\n\r\n      <img class=\"imagenCampeon\" src=\"{{campeon.godIcon_URL}}\"/>\r\n\r\n      <div class=\"campeonLore\">\r\n        Lore:\r\n        <br/>\r\n        <br/>\r\n        <span>{{campeon.Lore}}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"contenedorCampeon\">\r\n      <mat-tab-group>\r\n      <mat-tab label=\"Habilidades\">\r\n      <div class=\"habilidad\">\r\n        <div>{{campeon.Ability1}}</div>\r\n        <div style=\"display: inline-block; vertical-align: top;\">\r\n          <img class=\"habilidadCampeonImagen\" src=\"{{campeon.Ability_1.URL}}\"/>\r\n        </div>\r\n        <div style=\"width: 70%;display: inline-block;margin-left: 50px;text-align: justify;\">\r\n          {{campeon.Ability_1.Description.itemDescription.description}}\r\n        </div>\r\n      </div>\r\n      <div class=\"habilidad\">\r\n        <div>{{campeon.Ability2}}</div>\r\n        <div style=\"display: inline-block; vertical-align: top;\">\r\n          <img class=\"habilidadCampeonImagen\" src=\"{{campeon.Ability_2.URL}}\"/>\r\n        </div>\r\n        <div style=\"width: 70%;display: inline-block;margin-left: 50px;text-align: justify;\">\r\n          {{campeon.Ability_2.Description.itemDescription.description}}\r\n        </div>\r\n      </div>\r\n      <div class=\"habilidad\">\r\n        <div>{{campeon.Ability3}}</div>\r\n        <div style=\"display: inline-block; vertical-align: top;\">\r\n          <img class=\"habilidadCampeonImagen\" src=\"{{campeon.Ability_3.URL}}\"/>\r\n        </div>\r\n        <div style=\"width: 70%;display: inline-block;margin-left: 50px;text-align: justify;\">\r\n          {{campeon.Ability_1.Description.itemDescription.description}}\r\n        </div>\r\n      </div>\r\n      <div class=\"habilidad\">\r\n        <div>{{campeon.Ability4}}</div>\r\n        <div style=\"display: inline-block; vertical-align: top;\">\r\n          <img class=\"habilidadCampeonImagen\" src=\"{{campeon.Ability_4.URL}}\"/>\r\n        </div>\r\n        <div style=\"width: 70%;display: inline-block;margin-left: 50px;text-align: justify;\">\r\n          {{campeon.Ability_4.Description.itemDescription.description}}\r\n        </div>\r\n      </div>\r\n      </mat-tab>\r\n      <mat-tab label=\"Skins\">\r\n        Aspectos de {{campeon.Name}}:\r\n        <div *ngFor=\"let skin of skinsCampeon\">\r\n          <p>{{skin.skin_name}}</p>\r\n          <img class=\"imagenSkinCampeon\" src=\"{{skin.godSkin_URL}}\" alt=\"\">\r\n        </div>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"juego=='lol'\">\r\n  <div *ngIf=\"campeon\">\r\n    <div class=\"detallesCampeon\">\r\n      <img class=\"imagenCampeon\" src=\"https://ddragon.leagueoflegends.com/cdn/9.20.1/img/champion/{{campeon.name}}.png\"/>\r\n      <h3>{{campeon.name}} - {{campeon.title}}</h3>\r\n      \r\n\r\n      <div class=\"campeonLore\">\r\n        Lore:\r\n        <br/>\r\n        <br/>\r\n        <span>{{campeon.lore}}</span>\r\n      </div>\r\n      <div *ngIf=\"campeon.partype != 'Nada'\">\r\n        <p>{{campeon.name}} consume {{campeon.partype}} en sus habilidades</p>\r\n      </div>\r\n      <div *ngIf=\"campeon.partype == 'Nada'\">\r\n        <p>{{campeon.name}} no necesita mána, energía o  furia en sus habilidades</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"contenedorCampeon\">\r\n    <mat-tab-group>\r\n        <mat-tab label=\"Habilidades\">\r\n            \r\n                <div class=\"pasivaCampeon\" style=\"padding-top: 20px;padding-bottom: 20px;\">\r\n                  <div>Pasiva: {{campeon.passive.name}}</div>\r\n                  <div style=\"display: inline-block; vertical-align: top;\">\r\n                      <img style=\"width: 100%;\" src=\"https://ddragon.leagueoflegends.com/cdn/9.20.1/img/passive/{{campeon.passive.image.full}}\"/>\r\n                  </div>\r\n                  <div style=\"width: 70%;display: inline-block;margin-left: 50px;text-align: justify;\">{{campeon.passive.description}}</div>\r\n                </div>\r\n                <div *ngFor=\"let habilidadCampeon of campeon.spells\" style=\"padding-top: 20px;padding-bottom: 20px;\">\r\n                  <div>{{habilidadCampeon.name}}:</div>\r\n                  <div style=\"display: inline-block; vertical-align: top;\">\r\n                    <img src=\"https://ddragon.leagueoflegends.com/cdn/9.20.1/img/spell/{{habilidadCampeon.id}}.png\"/>\r\n                  </div>\r\n                  <div style=\"width: 70%;display: inline-block;margin-left: 50px;text-align: justify;\">\r\n                    {{habilidadCampeon.description}}\r\n                  </div>\r\n                </div> \r\n        </mat-tab>\r\n        <mat-tab label=\"Detalles\">\r\n            Consejos como aliado:\r\n            <ul>\r\n              <li *ngFor=\"let consejosAliado of campeon.allytips\">\r\n                {{consejosAliado}}\r\n              </li>\r\n            </ul>\r\n            Consejos como enemigo:\r\n            <ul>\r\n              <li *ngFor=\"let consejosEnemigo of campeon.enemytips\">\r\n                {{consejosEnemigo}}\r\n              </li>\r\n            </ul>\r\n        </mat-tab>\r\n        <mat-tab label=\"Skins\">\r\n                Aspectos de {{campeon.name}}:\r\n                <div *ngFor=\"let skin of campeon.skins\">\r\n                  <p *ngIf=\"skin.name!='default'\">{{skin.name}}</p>\r\n                  <p *ngIf=\"skin.name=='default'\">Aspecto por Defecto</p>\r\n                  <img class=\"imagenSkinCampeon\" src=\"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/{{campeon.name}}_{{skin.num}}.jpg\" alt=\"\">\r\n                </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n      </div>\r\n        \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/detailsChampionPage/detailsChampion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsChampionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetailsChampionComponent = /** @class */ (function () {
    function DetailsChampionComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.PROD = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production;
        this.idCampeon = this.route.snapshot.params['id'];
        this.juego = this.route.snapshot.params['juego'];
    }
    DetailsChampionComponent.prototype.ngOnInit = function () {
        this.juego = this.route.snapshot.params['juego'];
        if (this.juego == 'paladins') {
            this.idCampeon = this.route.snapshot.params['id'];
            this.cargarDatosCampeonPaladins();
        }
        else if (this.juego == 'smite') {
            this.nombreCampeon = this.route.snapshot.params['id'];
            this.cargarDatosCampeonSmite();
        }
        else if (this.juego == 'lol') {
            this.nombreCampeon = this.route.snapshot.params['id'];
            this.cargarDatosCampeonLol();
        }
    };
    DetailsChampionComponent.prototype.cargarDatosCampeonLol = function () {
        this.nombreCampeon = this.route.snapshot.params['id'];
        this.obtenerCampeonLol(this.nombreCampeon);
    };
    DetailsChampionComponent.prototype.cargarDatosCampeonSmite = function () {
        this.idCampeon = this.route.snapshot.params['id'];
        this.obtenerCampeonSmite(this.idCampeon);
        this.obtenerSkinDiosSmite(this.idCampeon);
    };
    DetailsChampionComponent.prototype.cargarDatosCampeonPaladins = function () {
        this.idCampeon = this.route.snapshot.params['id'];
        this.obtenerCampeonPaladins(this.idCampeon);
        this.obtenerSkinCampeonPaladins(this.idCampeon);
    };
    DetailsChampionComponent.prototype.obtenerSkinDiosSmite = function (idCampeon) {
        var _this = this;
        var url = "";
        if (this.PROD) {
            url = 'https://nextlevelserver.herokuapp.com/';
        }
        else {
            url = 'http://localhost:8081/';
        }
        this.http.get(url + 'smite/obtenerSkinDios/' + idCampeon)
            .subscribe(function (res) { return _this.skinsCampeon = res.json().skin; });
    };
    DetailsChampionComponent.prototype.obtenerSkinCampeonPaladins = function (idCampeon) {
        var _this = this;
        var url = "";
        if (this.PROD) {
            url = 'https://nextlevelserver.herokuapp.com/';
        }
        else {
            url = 'http://localhost:8081/';
        }
        this.http.get(url + 'paladins/obtenerSkinCampeon/' + idCampeon)
            .subscribe(function (res) { return _this.skinsCampeon = res.json().skin; });
    };
    DetailsChampionComponent.prototype.obtenerCampeonSmite = function (idCampeon) {
        var _this = this;
        if (idCampeon != undefined) {
            var url = "";
            if (this.PROD) {
                url = 'https://nextlevelserver.herokuapp.com/';
            }
            else {
                url = 'http://localhost:8081/';
            }
            //Cojer Datos Basicos del campeon (img y nombre)
            this.http.get(url + 'smite/obtenerDios/' + idCampeon)
                .subscribe(function (res) { return _this.campeon = res.json().dios[0]; });
        }
    };
    DetailsChampionComponent.prototype.obtenerCampeonPaladins = function (idCampeon) {
        var _this = this;
        if (idCampeon != undefined) {
            var url = "";
            if (this.PROD) {
                url = 'https://nextlevelserver.herokuapp.com/';
            }
            else {
                url = 'http://localhost:8081/';
            }
            //Cojer Datos Basicos del campeon (img y nombre)
            this.http.get(url + 'paladins/obtenerCampeon/' + idCampeon)
                .subscribe(function (res) { return _this.campeon = res.json().campeon[0]; });
        }
    };
    DetailsChampionComponent.prototype.obtenerCampeonLol = function (nombreCampeon) {
        var _this = this;
        if (nombreCampeon != undefined) {
            var url = "";
            if (this.PROD) {
                url = 'https://nextlevelserver.herokuapp.com/';
            }
            else {
                url = 'http://localhost:8081/';
            }
            //Cojer Datos Basicos del campeon (img y nombre)
            this.http.get(url + 'lol/obtenerCampeon/' + nombreCampeon)
                .subscribe(function (res) { return _this.campeon = res.json(); });
        }
    };
    DetailsChampionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'detalle-pagina-campeon',
            template: __webpack_require__("./src/detailsChampionPage/detailsChampion.component.html"),
            styles: [__webpack_require__("./src/detailsChampionPage/detailsChampion.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], DetailsChampionComponent);
    return DetailsChampionComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/lolHomePage/lolHomePage.component.css":
/***/ (function(module, exports) {

module.exports = ".cardChampion{\r\n  margin: 20px;\r\n  display: inline-block;\r\n  text-align: left;\r\n}\r\n\r\n.cardChampion .championRol{\r\n  margin-top: 20px;\r\n}\r\n\r\n.imagenCampeon{\r\n  margin:0 auto;display:block;\r\n}\r\n\r\n.listaCampeones{\r\n  margin:0 auto;display:block;\r\n}"

/***/ }),

/***/ "./src/lolHomePage/lolHomePage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"listaCampeones\">\r\n  <mat-card class=\"cardChampion\" *ngFor='let campeon of campeones' (click)=\"detallesCampeon(campeon.name)\">\r\n    <mat-card-header>\r\n      <mat-card-title>{{campeon.name}}</mat-card-title>\r\n      <mat-card-subtitle>{{campeon.title}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <img class=\"imagenCampeon\" mat-card-lg-image  src=\"https://ddragon.leagueoflegends.com/cdn/9.20.1/img/champion/{{campeon.id}}.png\" />\r\n    <mat-card-content>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/lolHomePage/lolHomePage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageLolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePageLolComponent = /** @class */ (function () {
    function HomePageLolComponent(http, router) {
        this.http = http;
        this.router = router;
        this.PROD = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production;
        this.tabs = { backgroundcolor: "primary" };
    }
    HomePageLolComponent.prototype.detallesCampeon = function (nombreCampeon) {
        this.router.navigate(['champion/lol/' + nombreCampeon]);
    };
    HomePageLolComponent.prototype.buscarEstadisticas = function (nombreInvocador) {
        this.http.get('http://localhost:4200/buscarInvocador/' + nombreInvocador)
            .subscribe(function (res) { return console.log(res); });
    };
    HomePageLolComponent.prototype.ngOnInit = function () {
        this.cargando = true;
        this.obtenerCampeonesLol();
        this.obtenerCampeonesGratuitos();
    };
    HomePageLolComponent.prototype.obtenerCampeonesLol = function () {
        var _this = this;
        var url = "";
        if (this.PROD) {
            url = 'https://nextlevelserver.herokuapp.com/';
        }
        else {
            url = 'http://localhost:8081/';
        }
        this.http.get(url + 'lol/obtenerCampeones')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.champions = { type: data.type, version: data.version, champions: [] };
            var keyArr = Object.keys(data.data);
            keyArr.forEach(function (key) {
                _this.champions.champions.push(data.data[key]);
            });
            _this.campeones = _this.champions.champions;
        });
    };
    HomePageLolComponent.prototype.obtenerCampeonesGratuitos = function () {
        var _this = this;
        var url = "";
        if (this.PROD) {
            url = 'https://nextlevelserver.herokuapp.com/';
        }
        else {
            url = 'http://localhost:8081/';
        }
        this.http.get(url + 'lol/obtenerCampeonesGratuitos')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.campeonesGratuitos = data;
        });
    };
    HomePageLolComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pagina-principal-lol',
            template: __webpack_require__("./src/lolHomePage/lolHomePage.component.html"),
            styles: [__webpack_require__("./src/lolHomePage/lolHomePage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HomePageLolComponent);
    return HomePageLolComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/paladinsHomePage/paladinsHomePage.component.css":
/***/ (function(module, exports) {

module.exports = ".cardChampion, .cardGod {\r\n  max-width: 200px;\r\n  margin: 20px;\r\n  display: inline-block;\r\n  text-align: left;\r\n}\r\n\r\n.cardChampion .championRol{\r\n  margin-top: 20px;\r\n}\r\n\r\n.listaCampeones{\r\n  margin:0 auto;display:block;\r\n}"

/***/ }),

/***/ "./src/paladinsHomePage/paladinsHomePage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"listaCampeones\">\r\n  <mat-card class=\"cardChampion\" *ngFor='let campeon of campeones' (click)=\"detallesCampeon(campeon.id)\">\r\n    <mat-card-header>\r\n      <mat-card-title>{{campeon.Name}}</mat-card-title>\r\n      <mat-card-subtitle>{{campeon.Title}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <div *ngIf=\"campeon.OnFreeRotation == ''\">\r\n      <img mat-card-lg-image style=\"background-size: cover;\" src=\"{{campeon.ChampionIcon_URL}}\" />\r\n    </div>\r\n    <div *ngIf=\"campeon.OnFreeRotation\">\r\n      <img mat-card-lg-image class=\"cintaCampeonGratuito\" style=\"background-size: cover;\" src=\"{{campeon.ChampionIcon_URL}}\" />\r\n    </div>\r\n    <mat-card-content>\r\n      <div class=\"championRol\">\r\n        <mat-chip-list>\r\n          <mat-chip color=\"accent\" selected=\"true\">{{campeon.Roles}}</mat-chip>\r\n        </mat-chip-list>\r\n      </div>\r\n    </mat-card-content>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/paladinsHomePage/paladinsHomePage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePagePaladinsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePagePaladinsComponent = /** @class */ (function () {
    function HomePagePaladinsComponent(http, router) {
        this.http = http;
        this.router = router;
        this.PROD = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production;
        this.tabs = { backgroundcolor: "primary" };
    }
    HomePagePaladinsComponent.prototype.detallesCampeon = function (id) {
        this.router.navigate(['champion/paladins/' + id]);
    };
    HomePagePaladinsComponent.prototype.ngOnInit = function () {
        this.cargando = true;
        this.obtenerCampeonesPaladins();
    };
    HomePagePaladinsComponent.prototype.obtenerCampeonesPaladins = function () {
        var _this = this;
        var url = "";
        if (this.PROD) {
            url = 'https://nextlevelserver.herokuapp.com/';
        }
        else {
            url = 'http://localhost:8081/';
        }
        this.http.get(url + 'paladins/obtenerCampeones')
            .subscribe(function (res) { return _this.campeones = res.json().campeones; });
        this.cargando = false;
    };
    HomePagePaladinsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pagina-principal-paladins',
            template: __webpack_require__("./src/paladinsHomePage/paladinsHomePage.component.html"),
            styles: [__webpack_require__("./src/paladinsHomePage/paladinsHomePage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HomePagePaladinsComponent);
    return HomePagePaladinsComponent;
}());



/***/ }),

/***/ "./src/smiteHomePage/smiteHomePage.component.css":
/***/ (function(module, exports) {

module.exports = ".cardGod {\r\n  max-width: 200px;\r\n  margin: 20px;\r\n  display: inline-block;\r\n  text-align: left;\r\n}\r\n\r\n.cardGod .diosRol{\r\n  margin-top: 20px;\r\n}\r\n\r\n.cardGod .egipcio{\r\n\tbackground-color: yellow;\r\n\tcolor: black;\r\n}\r\n\r\n.cardGod .romano{\r\n\tbackground-color:#930000;\r\n\tcolor: #f7c042;\r\n}\r\n\r\n.cardGod .griego{\r\n\tbackground-color:blue;\r\n}\r\n\r\n.cardGod .maya{\r\n\tbackground-color: green;\r\n}\r\n\r\n.cardGod .japones{\r\n\tbackground-color:#aa2f3d;\r\n\tcolor: #fff;\r\n}\r\n\r\n.cardGod .chino{\r\n\tbackground-color:#770706;\r\n\tcolor: #dabd7a;\r\n}\r\n\r\n.cardGod .arturiano{\r\n\tbackground-color:#ffc324;\r\n\tcolor: #fff;\r\n}\r\n\r\n.cardGod .joruba{\r\n\tbackground-color: brown;\r\n\tcolor: #fff;\r\n}\r\n\r\n.cardGod .hindu{\r\n\tbackground-color: green;\r\n\tcolor: #fff;\r\n}\r\n\r\n.cardGod .nordico{\r\n\tbackground-color: #1F262A;\r\n\tcolor: #fff;\r\n}\r\n\r\n.cardGod .celta{\r\n\tbackground-color: violet;\r\n\tcolor: #fff;\r\n}\r\n\r\n.cardGod .eslavo{\r\n\tbackground-color: #ff2f5e;\r\n\tcolor: #fff;\r\n}\r\n\r\n.cardGod .vudu{\r\n\tbackground-color: violet;\r\n\tcolor: #fff;\r\n}\r\n\r\n.cardGod .polinesio{\r\n\tbackground-color: black;\r\n\tcolor: #fff;\r\n}\r\n\r\n.listaCampeones{\r\n\tmargin:0 auto;display:block;\r\n}"

/***/ }),

/***/ "./src/smiteHomePage/smiteHomePage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"listaCampeones\">\r\n  <mat-card class=\"cardGod\" *ngFor='let dios of dioses' (click)=\"detallesCampeon(dios.id)\">\r\n  <mat-card-header>\r\n    <mat-card-title>{{dios.Name}}</mat-card-title>\r\n    <mat-card-subtitle>{{dios.Title}}</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n     <img mat-card-lg-image style=\"background-size: cover;\" src=\"{{dios.godIcon_URL}}\" />\r\n    <div class=\"diosRol\">\r\n      <mat-chip-list>\r\n        <mat-chip class=\"griego\" *ngIf=\"dios.Pantheon == 'Griego'\" selected=\"true\">{{dios.Pantheon}}</mat-chip>\r\n\r\n        <mat-chip class=\"egipcio\" *ngIf=\"dios.Pantheon == 'Egipcio'\" selected=\"true\">{{dios.Pantheon}}</mat-chip>\r\n\r\n        <mat-chip class=\"romano\" *ngIf=\"dios.Pantheon == 'Romano'\" selected=\"true\">{{dios.Pantheon}}</mat-chip>\r\n        \r\n        <mat-chip class=\"vudu\" *ngIf=\"dios.Pantheon == 'Vudú'\" selected=\"true\">{{dios.Pantheon}}</mat-chip>\r\n\r\n        <mat-chip class=\"hindu\" *ngIf=\"dios.Pantheon == 'Hindú'\" selected=\"true\">{{dios.Pantheon}}</mat-chip>\r\n\r\n        <mat-chip class=\"celta\" *ngIf=\"dios.Pantheon == 'Celta'\" selected=\"true\">{{dios.Pantheon}}</mat-chip>\r\n\r\n        <mat-chip class=\"japones\" *ngIf=\"dios.Pantheon == 'Japonés'\" selected=\"true\">{{dios.Pantheon}}</mat-chip>\r\n\r\n        <mat-chip class=\"chino\" *ngIf=\"dios.Pantheon == 'Chino'\" selected=\"true\">{{dios.Pantheon}}</mat-chip>\r\n\r\n        <mat-chip class=\"nordico\" *ngIf=\"dios.Pantheon == 'Nórdico'\" selected=\"true\">{{dios.Pantheon}}</mat-chip>\r\n\r\n        <mat-chip class=\"arturiano\" *ngIf=\"dios.Pantheon == 'Arturiano'\" selected=\"true\">{{dios.Pantheon}}</mat-chip>\r\n\r\n        <mat-chip class=\"maya\" *ngIf=\"dios.Pantheon == 'Maya'\" selected=\"true\">{{dios.Pantheon}}</mat-chip>\r\n\r\n        <mat-chip class=\"yoruba\" *ngIf=\"dios.Pantheon == 'Yoruba'\" selected=\"true\">{{dios.Pantheon}}</mat-chip>\r\n\r\n        <mat-chip class=\"eslavo\" *ngIf=\"dios.Pantheon == 'Eslavo'\" selected=\"true\">{{dios.Pantheon}}</mat-chip>\r\n\r\n        <mat-chip class=\"polinesio\" *ngIf=\"dios.Pantheon == 'Polinesio'\" selected=\"true\">{{dios.Pantheon}}</mat-chip>\r\n\r\n        <mat-chip color=\"accent\" selected=\"true\">{{dios.Roles}}</mat-chip>\r\n      </mat-chip-list>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n</div>"

/***/ }),

/***/ "./src/smiteHomePage/smiteHomePage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageSmiteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePageSmiteComponent = /** @class */ (function () {
    function HomePageSmiteComponent(http, router) {
        this.http = http;
        this.router = router;
        this.PROD = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production;
        this.tituloApp = "Next Level";
    }
    HomePageSmiteComponent.prototype.detallesCampeon = function (id) {
        this.router.navigate(['champion/smite/' + id]);
    };
    HomePageSmiteComponent.prototype.ngOnInit = function () {
        this.obtenerDioses();
    };
    HomePageSmiteComponent.prototype.obtenerDioses = function () {
        var _this = this;
        var url = "";
        if (this.PROD) {
            url = 'https://nextlevelserver.herokuapp.com/';
        }
        else {
            url = 'http://localhost:8081/';
        }
        this.http.get(url + 'smite/obtenerDioses')
            .subscribe(function (res) { return _this.dioses = res.json().dioses; });
    };
    HomePageSmiteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pagina-principal-smite',
            template: __webpack_require__("./src/smiteHomePage/smiteHomePage.component.html"),
            styles: [__webpack_require__("./src/smiteHomePage/smiteHomePage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], HomePageSmiteComponent);
    return HomePageSmiteComponent;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map