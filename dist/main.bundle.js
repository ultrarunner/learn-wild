webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authService, _router) {
        var _this = this;
        this.authService = authService;
        this._router = _router;
        authService.authenticated$.subscribe(function (authUser) {
            if (authUser != null) {
                //console.log("user: " + authUser.email);
                authService.user$.subscribe(function (user) {
                    _this.currentUser = user;
                    _this._router.navigate['/protected'];
                });
            }
            else {
                console.log("user: NONE");
                _this.currentUser = null;
                _this._router.navigate['/'];
            }
        });
    }
    AppComponent.prototype.googleLogin = function () {
        var _this = this;
        this.authService.signInWithGoogle().then(function () {
            console.log("redirecting to protected route from GOOGLE...");
            _this.postSignIn();
        });
    };
    AppComponent.prototype.githubLogin = function () {
        var _this = this;
        this.authService.signInWithGithub().then(function () {
            console.log("redirecting to protected route from GITHUB...");
            _this.postSignIn();
        });
    };
    AppComponent.prototype.twitterLogin = function () {
        var _this = this;
        this.authService.signInWithTwitter().then(function () {
            console.log("redirecting to protected route from TWITTER...");
            _this.postSignIn();
        });
    };
    AppComponent.prototype.logout = function () {
        this.authService.signOut();
        this.postSignOut();
    };
    AppComponent.prototype.postSignIn = function () {
        this._router.navigate(['protected']);
    };
    AppComponent.prototype.postSignOut = function () {
        this._router.navigate(['login']);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: "\n        <md-toolbar style=\"background-color: black;\">\n            <span style=\"color: white;\">\n                <a href=\"\">\n                    <img \n                    src=\"/assets/borntolearnwild.png\" \n                    style=\"margin-right: 10px; width:30px; height: 30px;\" \n                    title=\"Learn Wild | Not every site can become a great source of knowledge but a great source of knowledge can come from any site. Just keep learning.\">\n                </a>                \n            </span>\n            <span class=\"example-spacer\" style=\"text-align:center; white-space:pre-wrap; font-size: 0.6em;\">\n                Learn Wild <font color=\"red\" > | </font> Never Stop Learning. Ever.           \n            </span>\n\n            <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n                <md-icon style=\"color: white;\" *ngIf=\"!(currentUser)\">account_circle</md-icon>\n                <md-icon style=\"color: white;\" *ngIf=\"(currentUser)\">face</md-icon>\n            </button>\n            \n            <md-menu #menu=\"mdMenu\">\n                <button md-menu-item (click)=\"googleLogin()\" *ngIf=\"!(currentUser)\">\n                    <button md-raised-button color=\"warn\">Google</button>\n                </button>\n                <button md-menu-item (click)=\"githubLogin()\" *ngIf=\"!(currentUser)\">\n                    <button md-raised-button color=\"warn\">GitHub</button>\n                </button>\n                <button md-menu-item (click)=\"twitterLogin()\" *ngIf=\"!(currentUser)\">\n                    <button md-raised-button color=\"warn\">Twitter</button>\n                </button>                \n                <md-list class=\"mat-list-stacked\" *ngIf=\"(currentUser)\">\n                    <md-list-item style=\"font-weight: bold;\">{{currentUser.email}}</md-list-item>\n                </md-list>\n                <button class=\"btn btn-link\" *ngIf=\"(currentUser)\" (click)=\"logout()\">logout</button>\n                <button md-menu-item (click)=\"logout()\" *ngIf=\"(currentUser)\">\n                    <button md-raised-button>Logout</button>\n                </button>\n            </md-menu>\n        </md-toolbar>\n        <md-toolbar style=\"background-color: black;\">\n            <span style=\"width: 100%\"><app-single-media-player></app-single-media-player></span>        \n        </md-toolbar>\n        <router-outlet></router-outlet> \n    "
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_masonry__ = __webpack_require__("../../../../angular2-masonry/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component_outlet__ = __webpack_require__("../../../../../src/app/dashboard/dashboard-component-outlet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboard_cards_rss_rss_component__ = __webpack_require__("../../../../../src/app/dashboard/cards/rss/rss-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_cards_rss_rss_service__ = __webpack_require__("../../../../../src/app/dashboard/cards/rss/rss.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_cards_nyt_nyt_component__ = __webpack_require__("../../../../../src/app/dashboard/cards/nyt/nyt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dashboard_cards_nyt_nyt_service__ = __webpack_require__("../../../../../src/app/dashboard/cards/nyt/nyt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__dashboard_cards_quote_quote_component__ = __webpack_require__("../../../../../src/app/dashboard/cards/quote/quote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_quote_service__ = __webpack_require__("../../../../../src/app/shared/quote.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_simple_dialog_dialog_service__ = __webpack_require__("../../../../../src/app/shared/simple-dialog/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_events_service__ = __webpack_require__("../../../../../src/app/shared/events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_endpoint_service__ = __webpack_require__("../../../../../src/app/shared/endpoint.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__shared_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_simple_dialog_simple_dialog_component__ = __webpack_require__("../../../../../src/app/shared/simple-dialog/simple-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/shared/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipe_strip_html_tags_pipe__ = __webpack_require__("../../../../../src/app/pipe/strip-html-tags.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pipe_upper_case_first_letter_pipe__ = __webpack_require__("../../../../../src/app/pipe/upper-case-first-letter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pipe_today_pipe__ = __webpack_require__("../../../../../src/app/pipe/today.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_videogular2_core__ = __webpack_require__("../../../../videogular2/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_videogular2_controls__ = __webpack_require__("../../../../videogular2/controls.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_videogular2_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_videogular2_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_videogular2_overlay_play__ = __webpack_require__("../../../../videogular2/overlay-play.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_videogular2_overlay_play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_videogular2_overlay_play__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_videogular2_buffering__ = __webpack_require__("../../../../videogular2/buffering.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_videogular2_buffering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34_videogular2_buffering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__shared_single_media_player_single_media_player_component__ = __webpack_require__("../../../../../src/app/shared/single-media-player/single-media-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__dashboard_cards_hot_hot_component__ = __webpack_require__("../../../../../src/app/dashboard/cards/hot/hot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__protected_protected_component__ = __webpack_require__("../../../../../src/app/protected/protected.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__shared_sign_in_sign_in_component__ = __webpack_require__("../../../../../src/app/shared/sign-in/sign-in.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// dashboard


// card components


// card services




// shared services







// pipes



// media player component










var firebaseConfig = {
    apiKey: "AIzaSyBqUwpcipAsqWtLtIlRlDpNfOT38B-sYwo",
    authDomain: "learnwild-d9b69.firebaseapp.com",
    databaseURL: "https://learnwild-d9b69.firebaseio.com",
    projectId: "learnwild-d9b69",
    storageBucket: "learnwild-d9b69.appspot.com",
    messagingSenderId: "187124471014"
};
var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_39__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'test',
        component: __WEBPACK_IMPORTED_MODULE_39__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_37__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'protected',
        component: __WEBPACK_IMPORTED_MODULE_38__protected_protected_component__["a" /* ProtectedComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_25__shared_auth_guard_service__["a" /* AuthGuardService */]]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_37__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_38__protected_protected_component__["a" /* ProtectedComponent */],
                __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard__["a" /* Dashboard */],
                __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component_outlet__["a" /* DashboardComponentOutlet */],
                __WEBPACK_IMPORTED_MODULE_15__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                __WEBPACK_IMPORTED_MODULE_17__dashboard_cards_nyt_nyt_component__["a" /* NytComponent */],
                __WEBPACK_IMPORTED_MODULE_29__pipe_upper_case_first_letter_pipe__["a" /* UpperCaseFirstLetterPipe */],
                __WEBPACK_IMPORTED_MODULE_28__pipe_strip_html_tags_pipe__["a" /* StripHtmlTagsPipe */],
                __WEBPACK_IMPORTED_MODULE_30__pipe_today_pipe__["a" /* TodayPipe */],
                __WEBPACK_IMPORTED_MODULE_26__shared_simple_dialog_simple_dialog_component__["a" /* SimpleDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_35__shared_single_media_player_single_media_player_component__["a" /* SingleMediaPlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_27__shared_toolbar_toolbar_component__["a" /* ToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_36__dashboard_cards_hot_hot_component__["a" /* HotComponent */],
                __WEBPACK_IMPORTED_MODULE_39__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__dashboard_cards_quote_quote_component__["a" /* QuoteComponent */],
                __WEBPACK_IMPORTED_MODULE_40__shared_sign_in_sign_in_component__["a" /* SignInComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular2_masonry__["b" /* MasonryModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_31_videogular2_core__["VgCoreModule"],
                __WEBPACK_IMPORTED_MODULE_32_videogular2_controls__["VgControlsModule"],
                __WEBPACK_IMPORTED_MODULE_33_videogular2_overlay_play__["VgOverlayPlayModule"],
                __WEBPACK_IMPORTED_MODULE_34_videogular2_buffering__["VgBufferingModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["DatePipe"],
                __WEBPACK_IMPORTED_MODULE_16__dashboard_cards_rss_rss_service__["a" /* RssService */],
                __WEBPACK_IMPORTED_MODULE_18__dashboard_cards_nyt_nyt_service__["a" /* NytService */],
                __WEBPACK_IMPORTED_MODULE_20__shared_quote_service__["a" /* QuoteService */],
                __WEBPACK_IMPORTED_MODULE_22__shared_simple_dialog_dialog_service__["a" /* DialogService */],
                __WEBPACK_IMPORTED_MODULE_21__shared_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_23__shared_events_service__["a" /* EventService */],
                __WEBPACK_IMPORTED_MODULE_24__shared_endpoint_service__["a" /* EndPointService */],
                __WEBPACK_IMPORTED_MODULE_25__shared_auth_guard_service__["a" /* AuthGuardService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]
                // don't do this:
                // http://stackoverflow.com/questions/38787795/why-ngoninit-called-twice
                // SingleMediaPlayerComponent
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_15__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                __WEBPACK_IMPORTED_MODULE_17__dashboard_cards_nyt_nyt_component__["a" /* NytComponent */],
                __WEBPACK_IMPORTED_MODULE_36__dashboard_cards_hot_hot_component__["a" /* HotComponent */],
                __WEBPACK_IMPORTED_MODULE_19__dashboard_cards_quote_quote_component__["a" /* QuoteComponent */],
                __WEBPACK_IMPORTED_MODULE_26__shared_simple_dialog_simple_dialog_component__["a" /* SimpleDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_27__shared_toolbar_toolbar_component__["a" /* ToolbarComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/cards/hot/hot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_simple_dialog_dialog_service__ = __webpack_require__("../../../../../src/app/shared/simple-dialog/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_events_service__ = __webpack_require__("../../../../../src/app/shared/events.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HotComponent = (function () {
    function HotComponent(dialogService, radio) {
        this.dialogService = dialogService;
        this.radio = radio;
        this.rssItems = [];
        this.nytItems = [];
        this.podcastItems = [];
        this.today = new Date();
        this.componentSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.nytItems = new Array();
        this.rssItems = new Array();
        this.podcastItems = new Array();
    }
    HotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.radio.on('HotArticle:nyt').subscribe(function (message) {
            //console.log('Hot Article (NYT) Radio Receiving:' + (<Result>message).title);
            if (_this.title == "Today's Articles") {
                _this.nytItems.push(message);
            }
        });
        this.radio.on('HotArticle:rss').subscribe(function (message) {
            //console.log('Hot Article (RSS) Radio Receiving:' + (<FeedEntry>message).title);
            if (_this.title == "Today's Articles") {
                _this.rssItems.push(message);
            }
        });
        this.radio.on('HotPodcast:rss').subscribe(function (message) {
            //console.log('Hot Article (RSS) Radio Receiving:' + (<FeedEntry>message).title);
            if (_this.title == "Today's Podcasts") {
                _this.podcastItems.push(message);
            }
        });
        //console.log("title: " + this.title);
    };
    HotComponent.prototype.onSelectMedia = function (enclosure) {
        console.log('Media Selection Radio Casting:' + enclosure.link);
        var mediaType = enclosure.type.substring(0, enclosure.type.indexOf('/'));
        var key = 'PlayMedia:' + mediaType;
        // console.log('key: ' + key);
        this.radio.cast(key, enclosure);
    };
    HotComponent.prototype.onSelected = function () {
        // console.log('Component Selection Event Emitted:'  + this.end_point);
        this.componentSelected.emit(this);
    };
    HotComponent.prototype.onOpenNytLink = function (item) {
        window.open(item.short_url, '_blank');
    };
    HotComponent.prototype.onOpenNytDialog = function (item) {
        var title = item.feedTitle + ' | ' + item.title + ' | ' + new __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]('en-US').transform(item.published_date, 'yyyy-MM-dd');
        this.dialogService.confirm(title, item.abstract);
    };
    HotComponent.prototype.onOpenRssLink = function (item) {
        window.open(item.link, '_blank');
    };
    HotComponent.prototype.onOpenRssDialog = function (item) {
        var title = item.feedtitle + ' | ' + item.title + ' | ' + new __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]('en-US').transform(item.pubDate, 'yyyy-MM-dd');
        this.dialogService.confirm(title, item.description);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], HotComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], HotComponent.prototype, "end_point", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], HotComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], HotComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HotComponent.prototype, "componentSelected", void 0);
    HotComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-component-hot',
            template: "\n      <md-card masonry-brick style=\"min-width: 280px; max-width: 412px; margin: 5px;\" (click)=\"onSelected()\">\n        <md-card-header>\n          <div md-card-avatar><img src=\"/assets/borntolearnwild.png\" style=\"margin-right: 10px; width:30px; height: 30px;\"/></div>\n          <md-card-title>{{title}} <font color=\"red\">|</font> Born To Learn Wild</md-card-title>\n          <md-card-subtitle>Today's news from your sources.</md-card-subtitle>\n        </md-card-header>\n\n        <md-card-content *ngIf=\"!nytItems.length && !rssItems.length && !podcastItems.length\">\n          <md-list-item>         \n            Waiting for latest news... Nothing so far. Great news!\n          </md-list-item>\n        </md-card-content>\n\n        <md-card-content>\n\n          <!-- NYT ENTRIES -->\n          <md-list-item *ngFor=\"let item of nytItems\">\n            <div class=\"md-list-item-text\" layout=\"column\">                   \n              <button md-icon-button (click)=\"onOpenNytDialog(item)\" mdTooltip=\"View Summary\">\n                <md-icon [style.color]=\"item.today ? '#b62025' : 'white'\">info</md-icon>\n              </button>\n              <button md-icon-button (click)='onOpenNytLink(item)' mdTooltip=\"Open in New Window\" mdTooltipPosition=\"above\">\n                <md-icon>open_in_new</md-icon>\n              </button>            \n              {{item.title}}\n            </div>            \n          </md-list-item>\n\n          <!-- RSS ENTRIES - ARTICLES -->\n          <md-list-item *ngFor=\"let item of rssItems\">\n            <div class=\"md-list-item-text\" layout=\"column\">                     \n              <button md-icon-button (click)=\"onOpenRssDialog(item)\" mdTooltip=\"View Summary\">\n                <md-icon [style.color]=\"item.today ? '#b62025' : 'white'\">info</md-icon>\n              </button>\n              <button md-icon-button (click)='onOpenRssLink(item)' mdTooltip=\"Open in New Window\" mdTooltipPosition=\"above\">\n                <md-icon>open_in_new</md-icon>\n              </button>         \n              {{item.title}}\n            </div>\n          </md-list-item>\n\n          <!-- RSS ENTRIES - PODCASTS -->\n          <md-list-item *ngFor=\"let item of podcastItems\">\n            <div class=\"md-list-item-text\" layout=\"column\">                     \n              <button md-icon-button (click)=\"onOpenRssDialog(item)\" mdTooltip=\"View Summary\">\n                <md-icon [style.color]=\"item.today ? '#b62025' : 'white'\">info</md-icon>\n              </button>\n              <button md-icon-button (click)='onOpenRssLink(item)' mdTooltip=\"Open in New Window\" mdTooltipPosition=\"above\">\n                <md-icon>open_in_new</md-icon>\n              </button>         \n              <button mdTooltip=\"Play Audio\" md-icon-button *ngIf=\"item.enclosure.link != null\" (click)=\"onSelectMedia(item.enclosure)\">\n                <md-icon>play_circle_filled</md-icon>\n              </button>                    \n              {{item.title}}\n            </div>            \n          </md-list-item>                     \n\n        </md-card-content>\n      </md-card>\n      "
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_simple_dialog_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_simple_dialog_dialog_service__["a" /* DialogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_events_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_events_service__["a" /* EventService */]) === "function" && _b || Object])
    ], HotComponent);
    return HotComponent;
    var _a, _b;
}());

//# sourceMappingURL=hot.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/cards/nyt/nyt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NytComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipe_today_pipe__ = __webpack_require__("../../../../../src/app/pipe/today.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nyt_service__ = __webpack_require__("../../../../../src/app/dashboard/cards/nyt/nyt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_simple_dialog_dialog_service__ = __webpack_require__("../../../../../src/app/shared/simple-dialog/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_events_service__ = __webpack_require__("../../../../../src/app/shared/events.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NytComponent = (function () {
    function NytComponent(nytService, dialogService, radio, todayPipe) {
        this.nytService = nytService;
        this.dialogService = dialogService;
        this.radio = radio;
        this.todayPipe = todayPipe;
        this.nyt = {};
        this.results = [];
        this.componentSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NytComponent.prototype.ngOnInit = function () {
        this.onPullData();
    };
    NytComponent.prototype.onOpenLink = function (result) {
        window.open(result.short_url, '_blank');
    };
    NytComponent.prototype.onPullData = function () {
        var _this = this;
        this.nytService.getFeedContent(this.options)
            .delay(1000)
            .subscribe(function (result) {
            // console.log(result.items);
            _this.nyt = result;
            _this.results = result.results.filter(function (item, index) {
                item.today = _this.todayPipe.transform(item.published_date.toString());
                item.feedTitle = _this.title;
                if (item.today && (index < _this.count)) {
                    //console.log('Hot Article (NYT) Radio Casting:' + item.title);
                    _this.radio.cast("HotArticle:nyt", item);
                }
                return index < _this.count;
            });
        }, function (error) { return console.log(error); });
    };
    NytComponent.prototype.openDialog = function (result) {
        // console.log(feedEntry);
        var title = result.feedTitle + ' - ' + this.options.section + ' | ' + result.title + ' | ' + new __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]('en-US').transform(result.published_date, 'yyyy-MM-dd');
        this.dialogService.confirm(title, result.abstract);
    };
    NytComponent.prototype.onSelected = function () {
        // console.log('Component Selection Event Emitted:'  + this.end_point);
        this.componentSelected.emit(this);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NytComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NytComponent.prototype, "end_point", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], NytComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NytComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NytComponent.prototype, "componentSelected", void 0);
    NytComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-component-nyt',
            template: "\n      <md-card masonry-brick style=\"min-width: 280px; max-width: 412px; margin: 5px;\" (click)=\"onSelected()\">\n        <md-card-header *ngIf=\"results.length\">\n          <md-card-title>{{title}} <font color='red'>|</font> {{ options.section | upperCaseFirstLetter }}</md-card-title>\n        </md-card-header>\n        <md-card-content *ngIf=\"!results.length\">\n          <md-spinner style=\"margin-bottom: 10px;\"></md-spinner>              \n          Loading data from... {{end_point}}\n        </md-card-content>\n        <md-card-content *ngIf=\"results.length\">\n          <md-list-item *ngFor=\"let item of results\">\n            <div class=\"md-list-item-text\" layout=\"column\">         \n              <button md-icon-button (click)=\"openDialog(item)\">\n                <md-icon [style.color]=\"item.today ? '#b62025' : 'white'\">info</md-icon>\n              </button>\n              <button md-icon-button (click)='onOpenLink(item)' mdTooltip=\"Open Article in New Window\" mdTooltipPosition=\"above\">\n                <md-icon>open_in_new</md-icon>\n              </button>            \n              {{item.title}}\n            </div>             \n          </md-list-item>\n        </md-card-content>\n        <md-card-actions style=\"text-align: right;\">\n          <button md-mini-fab (click)='onPullData()' mdTooltip=\"Refresh\" mdTooltipPosition=\"above\">\n            <md-icon>refresh</md-icon>\n          </button>\n        </md-card-actions>\n      </md-card>",
            providers: [__WEBPACK_IMPORTED_MODULE_2__pipe_today_pipe__["a" /* TodayPipe */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__nyt_service__["a" /* NytService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__nyt_service__["a" /* NytService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_simple_dialog_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_simple_dialog_dialog_service__["a" /* DialogService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_events_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_events_service__["a" /* EventService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__pipe_today_pipe__["a" /* TodayPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__pipe_today_pipe__["a" /* TodayPipe */]) === "function" && _d || Object])
    ], NytComponent);
    return NytComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=nyt.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/cards/nyt/nyt.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NytService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NytService = (function () {
    function NytService(http) {
        this.http = http;
        this.nytBaseEndPoint = 'https://api.nytimes.com/svc/';
        this.nytApiTopStories = {
            endpoint: 'topstories/v2/{options}.json',
            apikey: 'ddaa74ef8a3d2b23e69f612bbd6c0321:3:70269458'
        };
    }
    NytService.prototype.getFeedContent = function (options) {
        var parameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        parameters.set('api-key', this.nytApiTopStories.apikey);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        requestOptions.search = parameters;
        return this.http.get(this.nytBaseEndPoint + this.nytApiTopStories.endpoint.replace('{options}', options.section.toLowerCase()), requestOptions)
            .map(this.extractFeeds)
            .catch(this.handleError);
    };
    NytService.prototype.extractFeeds = function (res) {
        var feed = res.json();
        return feed || {};
    };
    NytService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errorMessage = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errorMessage); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errorMessage);
    };
    NytService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], NytService);
    return NytService;
    var _a;
}());

//# sourceMappingURL=nyt.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/cards/quote/quote.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/cards/quote/quote.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_quote_service__ = __webpack_require__("../../../../../src/app/shared/quote.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuoteComponent = (function () {
    function QuoteComponent(quoteService) {
        this.quoteService = quoteService;
        this.componentSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.items = [];
    }
    QuoteComponent.prototype.ngOnInit = function () {
        this.onPullData();
    };
    QuoteComponent.prototype.onPullData = function () {
        var _this = this;
        this.quoteService.getContent().subscribe(function (result) {
            _this.items.push(result[Math.floor(Math.random() * result.length)]);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], QuoteComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], QuoteComponent.prototype, "end_point", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], QuoteComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], QuoteComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], QuoteComponent.prototype, "componentSelected", void 0);
    QuoteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quote',
            template: "\n      <md-card masonry-brick style=\"min-width: 280px; max-width: 412px; margin: 5px;\" (click)=\"onSelected()\">\n        <md-card-header>\n          <div md-card-avatar><img src=\"/assets/borntolearnwild.png\" style=\"margin-right: 10px; width:30px; height: 30px;\"/></div>\n          <md-card-title>{{title}} <font color=\"red\">|</font> Born To Learn Wild</md-card-title>\n          <md-card-subtitle>A random quote.</md-card-subtitle>\n        </md-card-header>\n\n        <md-card-content *ngIf=\"!items.length\">\n          <md-list-item>         \n            Waiting for latest quote... Come on! Give me something!\n          </md-list-item>\n        </md-card-content>\n\n        <md-card-content>\n          <md-list-item *ngFor=\"let item of items\">         \n          <p>\n            <span style=\"float:left;\">\"{{item.text}}\"</span>            \n            <span style=\"float:right;\">{{item.author}}</span>\n            <span style=\"float:right; clear: both;\">{{item.source}}</span>            \n          </p>\n          </md-list-item>\n        </md-card-content>\n      </md-card>\n      ",
            styles: [__webpack_require__("../../../../../src/app/dashboard/cards/quote/quote.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_quote_service__["a" /* QuoteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_quote_service__["a" /* QuoteService */]) === "function" && _a || Object])
    ], QuoteComponent);
    return QuoteComponent;
    var _a;
}());

//# sourceMappingURL=quote.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/cards/rss/rss-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RssComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rss_service__ = __webpack_require__("../../../../../src/app/dashboard/cards/rss/rss.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_simple_dialog_dialog_service__ = __webpack_require__("../../../../../src/app/shared/simple-dialog/dialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_events_service__ = __webpack_require__("../../../../../src/app/shared/events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipe_today_pipe__ = __webpack_require__("../../../../../src/app/pipe/today.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RssComponent = (function () {
    function RssComponent(feedService, dialogService, radio, todayPipe) {
        this.feedService = feedService;
        this.dialogService = dialogService;
        this.radio = radio;
        this.todayPipe = todayPipe;
        this.feed = {};
        this.items = [];
        this.today = new Date();
        this.componentSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    RssComponent.prototype.ngOnInit = function () {
        this.onPullData();
    };
    RssComponent.prototype.onPullData = function () {
        var _this = this;
        this.feedService.getFeedContent(this.end_point)
            .delay(1000)
            .subscribe(function (result) {
            //console.log(result.items);
            _this.feed = result.feed;
            if (result && result.items)
                _this.items = result.items.filter(function (item, index) {
                    item.today = _this.todayPipe.transform(item.pubDate.toString());
                    item.feedtitle = _this.feed.title;
                    if (item.today && (index < _this.count)) {
                        if (item.enclosure.link != null) {
                            //console.log('Hot Podcast (RSS) Radio Casting:' + item.title);                            
                            _this.radio.cast("HotPodcast:rss", item);
                        }
                        else {
                            //console.log('Hot Article (RSS) Radio Casting:' + item.title);              
                            _this.radio.cast("HotArticle:rss", item);
                        }
                    }
                    return index < _this.count;
                });
        }, function (error) { return console.log(error); });
    };
    RssComponent.prototype.openDialog = function (feedEntry) {
        // console.log(feedEntry);
        var title = feedEntry.feedtitle + ' | ' + feedEntry.title + ' | ' + new __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]('en-US').transform(feedEntry.pubDate, 'yyyy-MM-dd');
        this.dialogService.confirm(title, feedEntry.description);
    };
    RssComponent.prototype.onSelectMedia = function (enclosure) {
        //console.log('Media Selection Radio Casting:' + enclosure.link);
        var mediaType = enclosure.type.substring(0, enclosure.type.indexOf('/'));
        var key = 'PlayMedia:' + mediaType;
        // console.log('key: ' + key);
        this.radio.cast(key, enclosure);
    };
    RssComponent.prototype.onSelected = function () {
        // console.log('Component Selection Event Emitted:'  + this.end_point);
        this.componentSelected.emit(this);
    };
    RssComponent.prototype.onOpenItemLink = function (item) {
        if (item && item.link && item.link !== '') {
            window.open(item.link, '_blank');
        }
    };
    RssComponent.prototype.onOpenFeedLink = function () {
        window.open(this.feed.link, '_blank');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], RssComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], RssComponent.prototype, "end_point", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], RssComponent.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], RssComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], RssComponent.prototype, "componentSelected", void 0);
    RssComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-component-rss',
            template: "\n      <md-card masonry-brick style=\"min-width: 280px; max-width: 412px; margin: 5px;\" (click)=\"onSelected()\">\n        <md-card-header *ngIf=\"items.length\">\n          <div md-card-avatar *ngIf=\"feed.image!=''\"><img src=\"{{feed.image}}\" style=\"width: 30px;\"/></div>\n          <md-card-title>{{feed.title}} <font color=\"red\">|</font> {{feed.author}}</md-card-title>\n          <md-card-subtitle>{{feed.description}} </md-card-subtitle>\n        </md-card-header>\n        <md-card-content *ngIf=\"!items.length\">\n          <md-spinner style=\"margin-bottom: 10px;\"></md-spinner>              \n          Loading data from... {{end_point}}\n        </md-card-content>\n        <md-card-content *ngIf=\"items.length\">\n          <md-list-item *ngFor=\"let item of items\">\n            <div class=\"md-list-item-text\" layout=\"column\">                     \n              <button md-icon-button (click)=\"openDialog(item)\" mdTooltip=\"View Summary\">\n                <md-icon [style.color]=\"item.today ? '#b62025' : 'white'\">info</md-icon>\n              </button>\n              <button md-icon-button *ngIf=\"item && item.link\" (click)=\"onOpenItemLink(item)\" mdTooltip=\"Open in New Window\" mdTooltipPosition=\"above\">\n                <md-icon>open_in_new</md-icon>\n              </button>            \n              <button mdTooltip=\"Play Audio\" md-icon-button *ngIf=\"item.enclosure.type != null\" (click)=\"onSelectMedia(item.enclosure)\" mdTooltipPosition=\"above\">\n                <md-icon>play_circle_filled</md-icon>\n              </button>            \n              {{item.title}}\n            </div>            \n          </md-list-item>\n        </md-card-content>\n        <md-card-actions style=\"text-align: right;\">\n          <button md-mini-fab (click)=\"onOpenFeedLink(feed)\" mdTooltip=\"Open in New Window\" mdTooltipPosition=\"above\" target=\"_blank\">\n            <md-icon>open_in_new</md-icon>\n          </button>\n          <button md-mini-fab (click)='onPullData()' mdTooltip=\"Refresh\" mdTooltipPosition=\"above\">\n            <md-icon>refresh</md-icon>\n          </button>\n        </md-card-actions>\n      </md-card>\n      ",
            providers: [__WEBPACK_IMPORTED_MODULE_5__pipe_today_pipe__["a" /* TodayPipe */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__rss_service__["a" /* RssService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__rss_service__["a" /* RssService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_simple_dialog_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_simple_dialog_dialog_service__["a" /* DialogService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_events_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_events_service__["a" /* EventService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__pipe_today_pipe__["a" /* TodayPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__pipe_today_pipe__["a" /* TodayPipe */]) === "function" && _d || Object])
    ], RssComponent);
    return RssComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=rss-component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/cards/rss/rss.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RssService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RssService = (function () {
    function RssService(http) {
        this.http = http;
        this.rssToJsonServiceBaseUrl = 'https://rss2json.com/api.json?rss_url=';
    }
    RssService.prototype.getFeedContent = function (url) {
        return this.http.get(this.rssToJsonServiceBaseUrl + url)
            .map(this.extractFeeds)
            .catch(this.handleError);
    };
    RssService.prototype.extractFeeds = function (res) {
        var feed = res.json();
        //console.log(feed);
        return feed || {};
    };
    RssService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    RssService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], RssService);
    return RssService;
    var _a;
}());

//# sourceMappingURL=rss.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-component-outlet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponentOutlet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponentOutlet = (function () {
    function DashboardComponentOutlet(viewContainer, componentFactoryResolver) {
        this.viewContainer = viewContainer;
        this.componentFactoryResolver = componentFactoryResolver;
        this.componentSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DashboardComponentOutlet.prototype.ngOnInit = function () {
    };
    DashboardComponentOutlet.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.type) {
            this.viewContainer.clear();
            // Create Component
            var factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
            var componentRef = this.viewContainer.createComponent(factory);
            this.dynamicInstance = componentRef.instance;
            // Set up Event-Handlers and delegate to own handlers
            this.dynamicInstance.componentSelected.subscribe(function (e) { return _this.componentSelected.emit(e); });
        }
        // Delegate Properties
        if (changes.title) {
            this.dynamicInstance.title = this.title;
            this.dynamicInstance.end_point = this.end_point;
            this.dynamicInstance.count = this.count;
            this.dynamicInstance.options = this.options;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DashboardComponentOutlet.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DashboardComponentOutlet.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DashboardComponentOutlet.prototype, "end_point", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], DashboardComponentOutlet.prototype, "count", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DashboardComponentOutlet.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DashboardComponentOutlet.prototype, "componentSelected", void 0);
    DashboardComponentOutlet = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard-component-outlet',
            template: ''
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _b || Object])
    ], DashboardComponentOutlet);
    return DashboardComponentOutlet;
    var _a, _b;
}());

//# sourceMappingURL=dashboard-component-outlet.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_masonry__ = __webpack_require__("../../../../angular2-masonry/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_endpoint_service__ = __webpack_require__("../../../../../src/app/shared/endpoint.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Dashboard = (function () {
    function Dashboard(endpointService) {
        this.componentInfos = [];
        this.options = {
            transitionDuration: '0.35',
            fitWidth: true,
            gutter: 5,
            percentPosition: true
        };
        this.componentInfos = endpointService.endPoints.filter(function (item, index) {
            return item.active === true;
        });
    }
    Dashboard.prototype.ngAfterViewInit = function () {
        this.masonry.layoutComplete.subscribe(function () {
            //console.log('masonry layout complete.');
        });
    };
    Dashboard.prototype.selectComponent = function (selected) {
        this.selectedComponent = selected;
        console.log('Component Selection Event received by Dashboard: ' + selected.title + ' | ' + selected.end_point + ' | ' + selected.count);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_angular2_masonry__["a" /* AngularMasonry */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_masonry__["a" /* AngularMasonry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_masonry__["a" /* AngularMasonry */]) === "function" && _a || Object)
    ], Dashboard.prototype, "masonry", void 0);
    Dashboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dashboard',
            template: "\n        <masonry style=\"margin: 0 auto;\">\n            <dashboard-component-outlet *ngFor=\"let info of componentInfos\"\n                [type]=\"info.type\" \n                [title]=\"info.title\" \n                [end_point]=\"info.end_point\"\n                [count]=\"info.count\"\n                [options]=\"info.options\"\n                (componentSelected)=\"selectComponent($event)\">\n            </dashboard-component-outlet>\n        </masonry>\n    "
        })
        // <div *ngIf="selectedComponent" class="col-sm-12">
        //     <b>Selected: </b> {{ selectedComponent.title }} | {{ selectedComponent.end_point }} | {{ selectedComponent.count }}
        // </div>
        ,
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_endpoint_service__["a" /* EndPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_endpoint_service__["a" /* EndPointService */]) === "function" && _b || Object])
    ], Dashboard);
    return Dashboard;
    var _a, _b;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log("hello from the home page...");
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: "\n        <div style=\"margin-top:5px;\">\n            <dashboard></dashboard>\n        </div>        \n    "
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: "\n        <div style=\"margin-top:5px;\">\n          LOGIN ROUTE REACHED...\n        </div>        \n    "
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatMenuModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatMenuModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/strip-html-tags.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripHtmlTagsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StripHtmlTagsPipe = (function () {
    function StripHtmlTagsPipe() {
        this.tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';
        this.tagOrComment = new RegExp('<(?:'
            + '!--(?:(?:-*[^->])*--+|-?)'
            + '|script\\b' + this.tagBody + '>[\\s\\S]*?</script\\s*'
            + '|style\\b' + this.tagBody + '>[\\s\\S]*?</style\\s*'
            + '|/?[a-z]'
            + this.tagBody
            + ')>', 'gi');
    }
    StripHtmlTagsPipe.prototype.transform = function (value) {
        var oldHtml;
        do {
            oldHtml = value;
            value = value.replace(this.tagOrComment, '');
        } while (value !== oldHtml);
        return value.replace(/</g, '&lt;');
    };
    StripHtmlTagsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'stripHtmlTags'
        })
    ], StripHtmlTagsPipe);
    return StripHtmlTagsPipe;
}());

//# sourceMappingURL=strip-html-tags.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/today.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodayPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodayPipe = (function () {
    function TodayPipe() {
    }
    TodayPipe.prototype.transform = function (value) {
        var today = new Date();
        var dateValue = new Date(value);
        //console.log("today: " + today.getDate() + " " + today.getMonth() + " " + today.getFullYear());
        return today.getDate() === dateValue.getDate()
            && today.getMonth() === dateValue.getMonth()
            && today.getFullYear() === dateValue.getFullYear();
    };
    TodayPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'todayPipe'
        }),
        __metadata("design:paramtypes", [])
    ], TodayPipe);
    return TodayPipe;
}());

//# sourceMappingURL=today.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipe/upper-case-first-letter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpperCaseFirstLetterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UpperCaseFirstLetterPipe = (function () {
    function UpperCaseFirstLetterPipe() {
    }
    UpperCaseFirstLetterPipe.prototype.transform = function (value) {
        return (!!value) ? value.charAt(0).toUpperCase() + value.substr(1).toLowerCase() : '';
    };
    UpperCaseFirstLetterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'upperCaseFirstLetter'
        })
    ], UpperCaseFirstLetterPipe);
    return UpperCaseFirstLetterPipe;
}());

//# sourceMappingURL=upper-case-first-letter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/protected/protected.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtectedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProtectedComponent = (function () {
    function ProtectedComponent() {
    }
    ProtectedComponent.prototype.ngOnInit = function () {
    };
    ProtectedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-protected',
            template: "\n        <div style=\"margin-top:5px;\">\n          PROTECTED ROUTE REACHED...\n        </div>        \n    "
        }),
        __metadata("design:paramtypes", [])
    ], ProtectedComponent);
    return ProtectedComponent;
}());

//# sourceMappingURL=protected.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuardService = (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        var _this = this;
        return this.authService.authenticated$
            .take(1)
            .map(function (authState) { return !!authState; })
            .do(function (authenticated) {
            console.log("authenticated? " + authenticated);
            if (!authenticated) {
                console.log("navigating back to login...");
                _this.router.navigate(['/login']);
            }
        });
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], AuthGuardService);
    return AuthGuardService;
    var _a, _b;
}());

//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(afAuth) {
        this.afAuth = afAuth;
        this.authenticated$ = afAuth.authState.map(function (user) { return !!user; });
        this.user$ = afAuth.authState.map(function (user) { return user; });
        this.uid$ = afAuth.authState.map(function (user) { return user.uid; });
    }
    AuthService.prototype.signIn = function (provider) {
        return this.afAuth.auth.signInWithPopup(provider)
            .catch(function (error) { return console.log('ERROR @ AuthService#signIn() :', error); });
    };
    AuthService.prototype.signInAnonymously = function () {
        return this.afAuth.auth.signInAnonymously()
            .catch(function (error) { return console.log('ERROR @ AuthService#signInAnonymously() :', error); });
    };
    AuthService.prototype.signInWithGithub = function () {
        return this.signIn(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GithubAuthProvider());
    };
    AuthService.prototype.signInWithGoogle = function () {
        return this.signIn(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.signInWithTwitter = function () {
        return this.signIn(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].TwitterAuthProvider());
    };
    AuthService.prototype.signInWithFacebook = function () {
        return this.signIn(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].FacebookAuthProvider());
    };
    AuthService.prototype.signOut = function () {
        this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/endpoint.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndPointService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__ = __webpack_require__("../../../../../src/app/dashboard/cards/rss/rss-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_cards_nyt_nyt_component__ = __webpack_require__("../../../../../src/app/dashboard/cards/nyt/nyt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_cards_hot_hot_component__ = __webpack_require__("../../../../../src/app/dashboard/cards/hot/hot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_cards_quote_quote_component__ = __webpack_require__("../../../../../src/app/dashboard/cards/quote/quote.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EndPointService = (function () {
    function EndPointService(af) {
        // this.items = af.list('/endpoints',
        //   query: {
        //     limitToLast: 50
        //   }
        // })
        this.af = af;
        this.endPoints = [];
        this.endPoints = [
            {
                type: __WEBPACK_IMPORTED_MODULE_4__dashboard_cards_hot_hot_component__["a" /* HotComponent */],
                title: "Today's Articles",
                end_point: '',
                options: {
                    type: 'Article'
                },
                count: 0,
                active: true
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_4__dashboard_cards_hot_hot_component__["a" /* HotComponent */],
                title: "Today's Podcasts",
                end_point: '',
                options: {
                    type: 'Podcast'
                },
                count: 0,
                active: true
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_5__dashboard_cards_quote_quote_component__["a" /* QuoteComponent */],
                title: "Today's Quotes",
                end_point: '',
                options: {},
                count: 1,
                active: true
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'Freakonomics',
                end_point: 'http://feeds2.feedburner.com/freakonomicsradio',
                options: {},
                count: 6,
                active: true
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_3__dashboard_cards_nyt_nyt_component__["a" /* NytComponent */],
                title: 'NYT - Top Stories',
                end_point: '',
                options: {
                    section: 'World'
                },
                count: 5,
                active: true
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_3__dashboard_cards_nyt_nyt_component__["a" /* NytComponent */],
                title: 'NYT - Top Stories',
                end_point: '',
                options: {
                    section: 'Technology'
                },
                count: 7,
                active: true
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'Ted Talks (Audio)',
                end_point: 'http://feeds2.feedburner.com/tedtalks_audio/',
                count: 5,
                options: '',
                active: true
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'Ted Talks (Video)',
                end_point: 'http://feeds2.feedburner.com/tedtalks_video/',
                count: 5,
                options: '',
                active: true
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'Adventures in Angular',
                end_point: 'https://feeds.feedwrench.com/AdventuresInAngular.rss',
                options: {},
                count: 10,
                active: true
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'Javascript Jabber',
                end_point: 'https://feeds.feedwrench.com/JavascriptJabber.rss',
                options: {},
                count: 5,
                active: true
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'Scott Hanselman\'s blog',
                end_point: 'http://feeds.hanselman.com/scotthanselman',
                options: {},
                count: 4,
                active: true
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'The Minimalists',
                end_point: 'http://theminimalists.libsyn.com/rss',
                options: {},
                count: 5,
                active: true
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'Hanselminutes',
                end_point: 'http://feeds.podtrac.com/9dPm65vdpLL1',
                options: {},
                count: 3,
                active: true
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'This American Life',
                end_point: 'http://feed.thisamericanlife.org/talpodcast',
                options: {},
                count: 2,
                active: true
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'Simple Talk',
                end_point: 'https://www.simple-talk.com/feed/',
                options: {},
                count: 5,
                active: true
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'NPR - Planet Money Podcast',
                end_point: 'https://www.npr.org/rss/podcast.php?id=510289',
                options: {},
                count: 5,
                active: true
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'Troy Hunt - Security Blog',
                end_point: 'https://feeds.feedburner.com/TroyHunt',
                options: {},
                count: 5,
                active: true
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'John Papa - Blog',
                end_point: 'https://johnpapa.net/rss/',
                options: {},
                count: 5,
                active: true
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'TMSIDK',
                end_point: 'http://rss.art19.com/tell-me-something-i-don-t-know',
                options: {},
                count: 5,
                active: true
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'Malcom Gladwell - Revisionist History',
                end_point: 'http://feeds.feedburner.com/RevisionistHistory',
                options: {},
                count: 12,
                active: true
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'Sam Harris - Waking up',
                end_point: 'http://wakingup.libsyn.com/rss',
                options: {},
                count: 4,
                active: true
            }
        ];
    }
    EndPointService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], EndPointService);
    return EndPointService;
    var _a;
}());

//# sourceMappingURL=endpoint.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/events.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
// https://github.com/govorov/ng-radio



var EventService = (function () {
    function EventService() {
        this.separator = ':';
        this._eventBus = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    EventService.prototype.keyMatch = function (key, wildcard) {
        var w = '*';
        var ww = '**';
        var partMatch = function (wl, k) {
            var match = (wl === w) || (wl === k);
            return match;
        };
        var sep = this.separator;
        var kArr = key.split(sep);
        var wArr = wildcard.split(sep);
        var kLen = kArr.length;
        var wLen = wArr.length;
        var max = Math.max(kLen, wLen);
        for (var i = 0; i < max; i++) {
            var cK = kArr[i];
            var cW = wArr[i];
            // '**' match all fragments
            if (cW == ww && (typeof cK !== 'undefined')) {
                return true;
            }
            // test if fragments match
            if (!partMatch(cW, cK)) {
                return false;
            }
        }
        return true;
    };
    EventService.prototype.cast = function (key, data) {
        if (typeof key !== 'string' || !key.length) {
            throw 'Bad key. Please provide a string';
        }
        this._eventBus.next({ key: key, data: data });
    };
    EventService.prototype.on = function (key) {
        var _this = this;
        return this._eventBus.asObservable()
            .filter(function (event) {
            return _this.keyMatch(event.key, key);
        })
            .map(function (event) { return event.data; });
    };
    return EventService;
}());

//# sourceMappingURL=events.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/quote.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuoteService = (function () {
    function QuoteService(af) {
        this.af = af;
    }
    QuoteService.prototype.getContent = function () {
        return this.af.list('/quotes');
    };
    QuoteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
    ], QuoteService);
    return QuoteService;
    var _a;
}());

//# sourceMappingURL=quote.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/sign-in/sign-in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  sign-in works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignInComponent = (function () {
    function SignInComponent() {
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__("../../../../../src/app/shared/sign-in/sign-in.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignInComponent);
    return SignInComponent;
}());

//# sourceMappingURL=sign-in.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/simple-dialog/dialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__simple_dialog_component__ = __webpack_require__("../../../../../src/app/shared/simple-dialog/simple-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogService = (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
    }
    DialogService.prototype.confirm = function (title, message) {
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__simple_dialog_component__["a" /* SimpleDialogComponent */]);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    };
    DialogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialog */]) === "function" && _a || Object])
    ], DialogService);
    return DialogService;
    var _a;
}());

//# sourceMappingURL=dialog.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/simple-dialog/simple-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleDialogComponent = (function () {
    function SimpleDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    SimpleDialogComponent.prototype.ngOnInit = function () {
    };
    SimpleDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-simple-dialog',
            template: "\n      <h2 md-dialog-title>{{title}}</h2>\n      <md-dialog-content [innerHtml]=message></md-dialog-content>\n  "
            //,styleUrls: ['./simple-dialog.component.css']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */]) === "function" && _a || Object])
    ], SimpleDialogComponent);
    return SimpleDialogComponent;
    var _a;
}());

//# sourceMappingURL=simple-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/single-media-player/single-media-player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/single-media-player/single-media-player.component.html":
/***/ (function(module, exports) {

module.exports = "<vg-player style=\"height: 50px;\" (onPlayerReady)=\"onVideoPlayerReady($event)\">\r\n    <vg-controls>\r\n        <vg-play-pause></vg-play-pause>\r\n        <vg-playback-button></vg-playback-button>\r\n\r\n        <vg-time-display vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>\r\n\r\n        <vg-scrub-bar>\r\n            <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\r\n            <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\r\n        </vg-scrub-bar>\r\n\r\n        <vg-time-display vgProperty=\"left\" vgFormat=\"mm:ss\"></vg-time-display>\r\n        <vg-time-display vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display>\r\n\r\n        <vg-mute></vg-mute>\r\n\r\n        <vg-fullscreen></vg-fullscreen>\r\n    </vg-controls>\r\n\r\n    <audio #media [vgMedia]=\"media\" id=\"myAudio\" preload=\"auto\">\r\n        <source *ngFor=\"let audio of sources\" [src]=\"audio.src\" [type]=\"audio.type\">\r\n    </audio>\r\n\r\n    <!--<video #media [vgMedia]=\"media\" id=\"myAudio\" preload=\"auto\" crossorigin>\r\n        <source *ngFor=\"let audio of sources\" [src]=\"audio.src\" [type]=\"audio.type\">\r\n    </video>-->\r\n\r\n</vg-player>"

/***/ }),

/***/ "../../../../../src/app/shared/single-media-player/single-media-player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleMediaPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_events_service__ = __webpack_require__("../../../../../src/app/shared/events.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingleMediaPlayerComponent = (function () {
    function SingleMediaPlayerComponent(radio) {
        this.radio = radio;
        this.sources = [];
        this.videoSources = [];
        console.log('Media Player Initialized...');
    }
    SingleMediaPlayerComponent.prototype.onVideoPlayerReady = function (api) {
        this.api = api;
        this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.play.bind(this));
    };
    SingleMediaPlayerComponent.prototype.play = function () {
        this.api.play();
    };
    SingleMediaPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.radio.on('PlayMedia:audio').subscribe(function (message) {
            _this.selectedMedia = message;
            console.log('Media Selection Radio (AUDIO) Receiving:' + _this.selectedMedia.link + '|' + _this.selectedMedia.type);
            _this.sources = new Array();
            _this.sources.push({
                src: _this.selectedMedia.link,
                type: _this.selectedMedia.type
            });
            _this.api.getDefaultMedia().currentTime = 0;
            _this.api.play();
        });
        this.radio.on('PlayMedia:video').subscribe(function (message) {
            _this.selectedMedia = message;
            console.log('Media Selection Radio (VIDEO) Receiving:' + _this.selectedMedia.link + '|' + _this.selectedMedia.type);
            _this.sources = new Array();
            _this.sources.push({
                src: _this.selectedMedia.link,
                type: _this.selectedMedia.type
            });
            _this.api.getDefaultMedia().currentTime = 0;
            _this.api.play();
        });
    };
    SingleMediaPlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-single-media-player',
            template: __webpack_require__("../../../../../src/app/shared/single-media-player/single-media-player.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/single-media-player/single-media-player.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_events_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_events_service__["a" /* EventService */]) === "function" && _a || Object])
    ], SingleMediaPlayerComponent);
    return SingleMediaPlayerComponent;
    var _a;
}());

//# sourceMappingURL=single-media-player.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/shared/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolbarComponent = (function () {
    function ToolbarComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ToolbarComponent.prototype.signInAnonymously = function () {
        var _this = this;
        this.auth.signInAnonymously()
            .then(function () { return _this.postSignIn(); });
    };
    ToolbarComponent.prototype.signInWithFacebook = function () {
        var _this = this;
        this.auth.signInWithFacebook()
            .then(function () { return _this.postSignIn(); });
    };
    ToolbarComponent.prototype.signInWithGithub = function () {
        var _this = this;
        this.auth.signInWithGithub()
            .then(function () { return _this.postSignIn(); });
    };
    ToolbarComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.auth.signInWithGoogle()
            .then(function () { return _this.postSignIn(); });
    };
    ToolbarComponent.prototype.signInWithTwitter = function () {
        var _this = this;
        this.auth.signInWithTwitter()
            .then(function () { return _this.postSignIn(); });
    };
    ToolbarComponent.prototype.postSignIn = function () {
        this.router.navigate(['/test']);
    };
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'toolbar',
            template: "\n        <md-toolbar style=\"background-color: black;\">\n            <span style=\"color: white;\">\n                <a href=\"\">\n                    <img \n                    src=\"/assets/borntolearnwild.png\" \n                    style=\"margin-right: 10px; width:30px; height: 30px;\" \n                    title=\"Learn Wild | Not every site can become a great source of knowledge but a great source of knowledge can come from any site. Just keep learning.\">\n                </a>                \n            </span>\n            <span class=\"example-spacer\" style=\"text-align:center; white-space:pre-wrap; font-size: 0.6em;\">\n                Learn Wild <font color=\"red\" > | </font> Never Stop Learning. Ever.           \n            </span>\n\n            <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n                <md-icon style=\"color: white;\" *ngIf=\"!(currentUser)\">account_circle</md-icon>\n                <md-icon style=\"color: white;\" *ngIf=\"(currentUser)\">face</md-icon>\n            </button>\n            \n            <md-menu #menu=\"mdMenu\">\n                <button md-menu-item (click)=\"signInWithGoogle()\" *ngIf=\"!(currentUser)\">\n                    <button md-raised-button color=\"warn\">Google</button>\n                </button>\n                <button md-menu-item (click)=\"githubLogin()\" *ngIf=\"!(currentUser)\">\n                    <button md-raised-button color=\"warn\">GitHub</button>\n                </button>\n                <button md-menu-item (click)=\"twitterLogin()\" *ngIf=\"!(currentUser)\">\n                    <button md-raised-button color=\"warn\">Twitter</button>\n                </button>                \n                <md-list class=\"mat-list-stacked\" *ngIf=\"(currentUser)\">\n                    <md-list-item style=\"font-weight: bold;\">{{currentUser.email}}</md-list-item>\n                </md-list>                \n                <button md-menu-item (click)=\"logout()\" *ngIf=\"(currentUser)\">\n                    <button md-raised-button>Logout</button>\n                </button>\n            </md-menu>\n        </md-toolbar>\n        <md-toolbar style=\"background-color: black;\">\n            <span style=\"width: 100%\"><app-single-media-player></app-single-media-player></span>        \n        </md-toolbar>\n    "
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
    ], ToolbarComponent);
    return ToolbarComponent;
    var _a, _b;
}());

//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map