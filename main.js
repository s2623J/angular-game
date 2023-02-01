"use strict";
(self["webpackChunkng_cert_nba"] = self["webpackChunkng_cert_nba"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _game_results_game_results_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-results/game-results.component */ 6083);
/* harmony import */ var _game_stats_game_stats_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-stats/game-stats.component */ 6273);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: "results/:teamAbbr",
  component: _game_results_game_results_component__WEBPACK_IMPORTED_MODULE_0__.GameResultsComponent
}, {
  path: "**",
  component: _game_stats_game_stats_component__WEBPACK_IMPORTED_MODULE_1__.GameStatsComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 4,
    vars: 0,
    consts: [[1, "container"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "NBA Score Tracking App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _team_stats_team_stats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team-stats/team-stats.component */ 9101);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _game_results_game_results_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-results/game-results.component */ 6083);
/* harmony import */ var _game_stats_game_stats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-stats/game-stats.component */ 6273);
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popup/popup.component */ 5122);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);










class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _team_stats_team_stats_component__WEBPACK_IMPORTED_MODULE_2__.TeamStatsComponent, _game_results_game_results_component__WEBPACK_IMPORTED_MODULE_3__.GameResultsComponent, _game_stats_game_stats_component__WEBPACK_IMPORTED_MODULE_4__.GameStatsComponent, _popup_popup_component__WEBPACK_IMPORTED_MODULE_5__.PopupComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule]
  });
})();

/***/ }),

/***/ 6083:
/*!********************************************************!*\
  !*** ./src/app/game-results/game-results.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameResultsComponent": () => (/* binding */ GameResultsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _nba_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nba.service */ 3120);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function GameResultsComponent_div_0_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const game_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](game_r2.home_team.abbreviation);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", game_r2.home_team_score, " - ", game_r2.visitor_team_score, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](game_r2.visitor_team.abbreviation);
  }
}
function GameResultsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Scores of past 12 days: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, GameResultsComponent_div_0_p_8_Template, 6, 4, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "<< Back to all team stats");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.team.full_name, " [", ctx_r0.team.abbreviation, "]");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.team.conference, "ern conference");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 4, ctx_r0.games$));
  }
}
class GameResultsComponent {
  constructor(activatedRoute, nbaService) {
    this.activatedRoute = activatedRoute;
    this.nbaService = nbaService;
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.team = this.nbaService.getTrackedTeams().find(team => team.abbreviation === paramMap.get("teamAbbr"));
      if (this.team) this.games$ = this.nbaService.getLastResults(this.team);
    });
  }
  static #_ = this.ɵfac = function GameResultsComponent_Factory(t) {
    return new (t || GameResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nba_service__WEBPACK_IMPORTED_MODULE_0__.NbaService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GameResultsComponent,
    selectors: [["app-game-results"]],
    decls: 1,
    vars: 1,
    consts: [["class", "card", 4, "ngIf"], [1, "card"], [4, "ngFor", "ngForOf"], ["routerLink", "", 1, "tertiary"]],
    template: function GameResultsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, GameResultsComponent_div_0_Template, 12, 6, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.team);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6273:
/*!****************************************************!*\
  !*** ./src/app/game-stats/game-stats.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameStatsComponent": () => (/* binding */ GameStatsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _team_stats_team_stats_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../team-stats/team-stats.component */ 9101);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _nba_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nba.service */ 3120);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popup/popup.component */ 5122);








const _c0 = ["teamStats"];
function GameStatsComponent_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const conference_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", conference_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", conference_r8, " ");
  }
}
function GameStatsComponent_option_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const division_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", division_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", division_r9, " ");
  }
}
function GameStatsComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const team_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", team_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", team_r10.full_name, " ");
  }
}
function GameStatsComponent_app_team_stats_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-team-stats", 17, 18)(2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameStatsComponent_app_team_stats_22_Template_span_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const team_r11 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.handleRemoveTrackedTeam(team_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "select", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function GameStatsComponent_app_team_stats_22_Template_select_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.setSelectionOption($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "12");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const team_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("team", team_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "6 " + team_r11.abbreviation);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "12 " + team_r11.abbreviation);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "20 " + team_r11.abbreviation);
  }
}
class GameStatsComponent {
  constructor(nbaService) {
    this.nbaService = nbaService;
    this.showPopup = false;
    this.conferences = [];
    this.divisions = [];
    this.allTeams = [];
    this.selectedValue = '12 ';
    this.teams$ = nbaService.getAllTeams().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(data => {
      data.map(item => {
        if (!this.conferences.includes(item.conference + ' Conference')) {
          this.conferences.push(item.conference + ' Conference');
        }
        if (!this.divisions.includes(item.division + ' Division')) {
          this.divisions.push(item.division + ' Division');
        }
      });
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(data => this.allTeams = data));
  }
  trackTeam(teamId, filteredForm) {
    const formChildren = filteredForm.children;
    const selectArr = [formChildren[0], formChildren[1], formChildren[2]];
    const divSelect = selectArr[1];
    let team = this.allTeams.find(team => team.id == Number(teamId));
    if (team) this.nbaService.addTrackedTeam(team);
    if (divSelect.value === '') {
      divSelect.options[0].selected = true;
    }
  }
  filterTeams(selectBox, filteredForm) {
    const formChildren = filteredForm.children;
    const selectArr = [formChildren[0], formChildren[1], formChildren[2]];
    const filterString = selectBox.value;
    const titleString = selectBox.innerText.split('\n')[0];
    const divSelect = selectArr[1];
    const teamSelect = selectArr[2];
    let result = [...this.allTeams];
    if (titleString === 'Filter By Conference') {
      result = result.filter(item => {
        return item.conference === filterString.split(' ')[0];
      });
      this.divisions = [];
      result.map(item => {
        if (!this.divisions.includes(item.division + ' Division')) {
          this.divisions.push(item.division + ' Division');
        }
      });
      if (teamSelect.value === '') teamSelect.options[0].selected = true;
      divSelect.options[0].selected = true;
      teamSelect.options[0].selected = true;
    }
    if (titleString === 'Filter By Division') {
      result = result.filter(item => {
        return item.division === filterString.split(' ')[0];
      });
      teamSelect.options[0].selected = true;
    }
    this.teams$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(result);
  }
  handleModal(event) {
    let target = event.target;
    this.showPopup = false;
    if (this.selectedTeam !== undefined && target.innerHTML === 'Yes') this.nbaService.removeTrackedTeam(this.selectedTeam);
  }
  handleRemoveTrackedTeam(team) {
    this.showPopup = true;
    this.selectedTeam = team;
  }
  setSelectionOption(event) {
    let target = event.target;
    console.log('Selected Value: ', target.selectedOptions[0].value);
    this.selectedValue = target.selectedOptions[0].value;
    this.resetGameHistory();
  }
  resetGameHistory() {
    // Trying to sync all selected game histories
    let trackedTeams = this.nbaService.getTrackedTeams();
    let selVal = Number(this.selectedValue.split(' ')[0]);
    trackedTeams.forEach(team => {
      if (this.stats instanceof _team_stats_team_stats_component__WEBPACK_IMPORTED_MODULE_0__.TeamStatsComponent) {
        this.stats.games$ = this.nbaService.getLastResults(team, selVal);
      }
    });
  }
  static #_ = this.ɵfac = function GameStatsComponent_Factory(t) {
    return new (t || GameStatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nba_service__WEBPACK_IMPORTED_MODULE_1__.NbaService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: GameStatsComponent,
    selectors: [["app-game-stats"]],
    viewQuery: function GameStatsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.stats = _t.first);
      }
    },
    decls: 31,
    vars: 7,
    consts: [[1, "row"], [1, "col-sm-11"], ["filteredForm", ""], ["name", "conference", 3, "change"], ["selectConf", ""], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "division", 3, "change"], ["selectDiv", ""], ["name", "teamList"], ["teamSelect", ""], ["type", "submit", 1, "primary", 3, "click"], ["class", "col-sm-4", 3, "team", 4, "ngFor", "ngForOf"], [3, "isOpen"], [1, "modalBody"], [1, "close", 3, "click"], [3, "value"], [1, "col-sm-4", 3, "team"], ["teamStats", ""], [3, "click"], [3, "change"], ["daysHistory", ""], ["name", "6", "ng-selected", "selectedValue.split(' ')[0] === '6'", 3, "value"], ["name", "12", "ng-selected", "selectedValue.split(' ')[0] === '12'", 3, "value"], ["name", "20", "ng-selected", "selectedValue.split(' ')[0] === '20'", 3, "value"]],
    template: function GameStatsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "form", 1, 2)(3, "select", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function GameStatsComponent_Template_select_change_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.filterTeams(_r1, _r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Filter By Conference");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, GameStatsComponent_option_7_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "select", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function GameStatsComponent_Template_select_change_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
          const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.filterTeams(_r3, _r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Filter By Division");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, GameStatsComponent_option_12_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "select", 9, 10)(15, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "List of Teams");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, GameStatsComponent_option_17_Template, 2, 2, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameStatsComponent_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);
          const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
          return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.trackTeam(_r5.value, _r0));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Track team");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, GameStatsComponent_app_team_stats_22_Template, 12, 4, "app-team-stats", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "app-popup", 13)(24, "body", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Are you sure you want to remove this team? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameStatsComponent_Template_button_click_27_listener($event) {
          return ctx.handleModal($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GameStatsComponent_Template_button_click_29_listener($event) {
          return ctx.handleModal($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.conferences);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.divisions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 5, ctx.teams$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.nbaService.getTrackedTeams());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isOpen", ctx.showPopup);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _team_stats_team_stats_component__WEBPACK_IMPORTED_MODULE_0__.TeamStatsComponent, _popup_popup_component__WEBPACK_IMPORTED_MODULE_2__.PopupComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
    styles: ["body.modalBody[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  font-family: arial;\r\n  color: gray !important;\r\n  background: white;\r\n  text-align: center;\r\n}\r\n\r\nspan[_ngcontent-%COMP%]{\r\n  float: right;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  color: #000;\r\n  font-size: 17px;\r\n  font-weight: bold;\r\n  border-radius: 14px;\r\n  background: white;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  background: #d2d2d2;\r\n}\r\n\r\n.modalW-body[_ngcontent-%COMP%] {\r\n  padding: 10px 10px;\r\n  min-height: 50px;\r\n}\n/*# sourceURL=webpack://./src/app/game-stats/game-stats.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ2FtZS1zdGF0cy9nYW1lLXN0YXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5Lm1vZGFsQm9keSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5zcGFue1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIFRoZSBNb2RhbCBDbG9zZSBCdXR0b24gKi9cclxuLmNsb3NlIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyLFxyXG4uY2xvc2U6Zm9jdXMge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2QyZDJkMjtcclxufVxyXG5cclxuLm1vZGFsVy1ib2R5IHtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3120:
/*!********************************!*\
  !*** ./src/app/nba.service.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NbaService": () => (/* binding */ NbaService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ 6712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ 8393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);




class NbaService {
  constructor(http) {
    this.http = http;
    this.headers = {
      'X-RapidAPI-Key': '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    };
    this.API_URL = "https://free-nba.p.rapidapi.com";
    this.trackedTeams = [];
  }
  addTrackedTeam(team) {
    this.trackedTeams.push(team);
  }
  removeTrackedTeam(team) {
    let index = this.trackedTeams.findIndex(t => t.id == team.id);
    this.trackedTeams.splice(index, 1);
  }
  getTrackedTeams() {
    return this.trackedTeams;
  }
  getAllTeams() {
    return this.http.get(`${this.API_URL}/teams?page=0`, {
      headers: this.headers
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => res.data));
  }
  getLastResults(team, numberOfDays = 12) {
    return this.http.get(`${this.API_URL}/games?page=0${this.getDaysQueryString(numberOfDays)}`, {
      headers: this.headers,
      params: {
        per_page: 12,
        "team_ids[]": "" + team.id
      }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(res => res.data));
  }
  getStatsFromGames(games, team) {
    const stats = {
      wins: 0,
      losses: 0,
      averagePointsScored: 0,
      averagePointsConceded: 0,
      lastGames: []
    };
    games.forEach(game => {
      const gameStats = this.getSingleGameStats(team, game);
      stats.wins += gameStats.wins;
      stats.losses += gameStats.losses;
      stats.averagePointsConceded += gameStats.averagePointsConceded;
      stats.averagePointsScored += gameStats.averagePointsScored;
      stats.lastGames.push(gameStats.wins == 1 ? 'W' : 'L');
    });
    stats.averagePointsScored = Math.round(stats.averagePointsScored / games.length);
    stats.averagePointsConceded = Math.round(stats.averagePointsConceded / games.length);
    return stats;
  }
  getDaysQueryString(nbOfDays = 12) {
    let qs = "";
    for (let i = 1; i < nbOfDays; i++) {
      let date = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(), i), "yyyy-MM-dd");
      qs = qs.concat("&dates[]=" + date);
    }
    return qs;
  }
  getSingleGameStats(team, game) {
    const stats = {
      wins: 0,
      losses: 0,
      averagePointsScored: 0,
      averagePointsConceded: 0,
      lastGames: []
    };
    if (game.home_team.id === team.id) {
      stats.averagePointsScored = game.home_team_score;
      stats.averagePointsConceded = game.visitor_team_score;
      if (game.home_team_score > game.visitor_team_score) {
        stats.wins += 1;
      } else {
        stats.losses += 1;
      }
    }
    if (game.visitor_team.id === team.id) {
      stats.averagePointsScored = game.visitor_team_score;
      stats.averagePointsConceded = game.home_team_score;
      if (game.visitor_team_score > game.home_team_score) {
        stats.wins = 1;
      } else {
        stats.losses = 1;
      }
    }
    return stats;
  }
  static #_ = this.ɵfac = function NbaService_Factory(t) {
    return new (t || NbaService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: NbaService,
    factory: NbaService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5122:
/*!******************************************!*\
  !*** ./src/app/popup/popup.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupComponent": () => (/* binding */ PopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



function PopupComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
const _c0 = [[["body"]]];
const _c1 = ["body"];
class PopupComponent {
  constructor() {
    this.isOpen = false;
    this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {}
  closePopup() {
    this.isOpen = false;
    this.onClose.emit('Pop-up window closed');
  }
  static #_ = this.ɵfac = function PopupComponent_Factory(t) {
    return new (t || PopupComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PopupComponent,
    selectors: [["app-popup"]],
    inputs: {
      isOpen: "isOpen"
    },
    outputs: {
      onClose: "onClose"
    },
    ngContentSelectors: _c1,
    decls: 1,
    vars: 1,
    consts: [["class", "modalW", 4, "ngIf"], [1, "modalW"], [1, "modalW-content"], [1, "modalW-body"]],
    template: function PopupComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PopupComponent_div_0_Template, 4, 0, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
    styles: [".modalW[_ngcontent-%COMP%] {\r\n  position: fixed; \r\n  z-index: 1; \r\n  padding-top: 100px; \r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; \r\n  height: 100%; \r\n  overflow: auto; \r\n  background-color: rgb(0,0,0); \r\n  background-color: rgba(0,0,0,0.4); \r\n}\r\n\r\n\r\n.modalW-content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  background-color: white;\r\n  margin: auto;\r\n  padding: 0;\r\n  border: 1px solid #888;\r\n  width: 540px;\r\n  padding: 20px;\r\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\r\n  -webkit-animation-name: _ngcontent-%COMP%_animatetop;\r\n  -webkit-animation-duration: 0.4s;\r\n  animation-name: _ngcontent-%COMP%_animatetop;\r\n  animation-duration: 0.4s;\r\n  border-radius: 9px;\r\n}\r\n\r\n\r\n\r\n@keyframes _ngcontent-%COMP%_animatetop {\r\n  from {top:-300px; opacity:0}\r\n  to {top:0; opacity:1}\r\n}\n/*# sourceURL=webpack://./src/app/popup/popup.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcG9wdXAvcG9wdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWUsRUFBRSxrQkFBa0I7RUFDbkMsVUFBVSxFQUFFLGVBQWU7RUFDM0Isa0JBQWtCLEVBQUUsd0JBQXdCO0VBQzVDLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVyxFQUFFLGVBQWU7RUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtFQUM5QixjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtFQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7QUFDMUQ7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLHFFQUFxRTtFQUNyRSxrQ0FBa0M7RUFDbEMsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVBLGtCQUFrQjs7QUFNbEI7RUFDRSxNQUFNLFVBQVUsRUFBRSxTQUFTO0VBQzNCLElBQUksS0FBSyxFQUFFLFNBQVM7QUFDdEIiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWxXIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cclxuICB6LWluZGV4OiAxOyAvKiBTaXQgb24gdG9wICovXHJcbiAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudCAqL1xyXG4ubW9kYWxXLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gIHdpZHRoOiA1NDBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBhbmltYXRldG9wO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbn1cclxuXHJcbi8qIEFkZCBBbmltYXRpb24gKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGFuaW1hdGV0b3Age1xyXG4gIGZyb20ge3RvcDotMzAwcHg7IG9wYWNpdHk6MH1cclxuICB0byB7dG9wOjA7IG9wYWNpdHk6MX1cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmltYXRldG9wIHtcclxuICBmcm9tIHt0b3A6LTMwMHB4OyBvcGFjaXR5OjB9XHJcbiAgdG8ge3RvcDowOyBvcGFjaXR5OjF9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9101:
/*!****************************************************!*\
  !*** ./src/app/team-stats/team-stats.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamStatsComponent": () => (/* binding */ TeamStatsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _nba_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nba.service */ 3120);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);





const _c0 = ["daysHistory"];
function TeamStatsComponent_div_0_mark_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mark", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const result_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](result_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](result_r3);
  }
}
function TeamStatsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div")(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2)(9, "div", 3)(10, "div", 4)(11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Results of past ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](13, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " days: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, TeamStatsComponent_div_0_mark_16_Template, 2, 3, "mark", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Avg pts scored: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Avg pts conceded: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div")(28, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "See game results >>");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.team.full_name, " [", ctx_r0.team.abbreviation, "] ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.team.conference, "ern conference");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.stats.lastGames);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.stats.averagePointsScored);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.stats.averagePointsConceded);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://interstate21.com/nba-logos/", ctx_r0.team.abbreviation, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "results/" + ctx_r0.team.abbreviation);
  }
}
const _c1 = [[["span"]], [["select"]]];
const _c2 = ["span", "select"];
class TeamStatsComponent {
  constructor(nbaService) {
    this.nbaService = nbaService;
    this.daysHistory = 12;
    this.oldDaysHistory = 12;
    this.optionObj = [6, 12, 20];
  }
  ngOnInit() {
    this.render(12);
  }
  ngAfterContentChecked() {
    let selectedVals = this.selectDaysHistory.nativeElement.value.split(' ');
    this.daysHistory = Number(selectedVals[0]);
    if (this.daysHistory !== this.oldDaysHistory) {
      this.oldDaysHistory = this.daysHistory;
      this.render(this.daysHistory);
    }
  }
  render(daysHistory) {
    this.games$ = this.nbaService.getLastResults(this.team, daysHistory).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.tap)(games => this.stats = this.nbaService.getStatsFromGames(games, this.team)));
  }
  static #_ = this.ɵfac = function TeamStatsComponent_Factory(t) {
    return new (t || TeamStatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nba_service__WEBPACK_IMPORTED_MODULE_0__.NbaService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: TeamStatsComponent,
    selectors: [["app-team-stats"]],
    contentQueries: function TeamStatsComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.selectDaysHistory = _t.first);
      }
    },
    inputs: {
      team: "team"
    },
    ngContentSelectors: _c2,
    decls: 2,
    vars: 3,
    consts: [["class", "card", 4, "ngIf"], [1, "card"], [1, "container"], [1, "row"], [1, "col-sm-6"], ["class", "tag", 3, "class", 4, "ngFor", "ngForOf"], [3, "src"], [1, "tertiary", 3, "routerLink"], [1, "tag"]],
    template: function TeamStatsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TeamStatsComponent_div_0_Template, 30, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.games$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  padding: 10px;\n  margin: 5px;\n  display: block;\n}\n\nmark.W[_ngcontent-%COMP%] {\n  background-color: green;\n}\n\nmark.L[_ngcontent-%COMP%] {\n  background-color: red;\n}\n\nmark[_ngcontent-%COMP%] {\n  width: 50px;\n  margin-right: 5px;\n}\n\n.card[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n/*# sourceURL=webpack://./src/app/team-stats/team-stats.component.css */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdGVhbS1zdGF0cy90ZWFtLXN0YXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5tYXJrLlcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxubWFyay5MIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG5tYXJrIHtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uY2FyZCB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map