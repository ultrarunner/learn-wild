webpackJsonp([1,5],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rss_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_simple_dialog_dialog_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_events_service__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RssComponent; });
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
    function RssComponent(feedService, dialogService, radio) {
        this.feedService = feedService;
        this.dialogService = dialogService;
        this.radio = radio;
        this.feed = {};
        this.items = [];
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
            // console.log(result.items);
            _this.feed = result.feed,
                _this.items = result.items.filter(function (item, index) { return index < _this.count; });
        }, function (error) { return console.log(error); });
    };
    RssComponent.prototype.openDialog = function (feedEntry) {
        // console.log(feedEntry);
        var title = feedEntry.title + '| ' + feedEntry.pubDate;
        this.dialogService.confirm(title, feedEntry.description);
    };
    RssComponent.prototype.onSelectMedia = function (enclosure) {
        console.log('Media Selection Radio Casting:' + enclosure.link);
        var mediaType = enclosure.type.substring(0, enclosure.type.indexOf('/'));
        var key = 'PlayMedia:' + mediaType;
        // console.log('key: ' + key);
        this.radio.cast(key, enclosure);
    };
    RssComponent.prototype.onSelected = function () {
        // console.log('Component Selection Event Emitted:'  + this.end_point);
        this.componentSelected.emit(this);
    };
    RssComponent.prototype.onOpenLink = function () {
        window.open(this.feed.link, '_blank');
    };
    return RssComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], RssComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], RssComponent.prototype, "end_point", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], RssComponent.prototype, "count", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], RssComponent.prototype, "componentSelected", void 0);
RssComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-component-rss',
        template: "\n      <md-card masonry-brick style=\"min-width: 280px; max-width: 320px; margin: 5px;\" (click)=\"onSelected()\">\n        <md-card-header *ngIf=\"items.length\">\n          <div md-card-avatar *ngIf=\"feed.image!=''\"><img src=\"{{feed.image}}\" style=\"width: 30px;\"/></div>\n          <md-card-title>{{feed.title}} <font color=\"red\">|</font> {{feed.author}}</md-card-title>\n          <md-card-subtitle>{{feed.description}} </md-card-subtitle>\n        </md-card-header>\n        <md-card-content *ngIf=\"!items.length\">\n          <md-spinner style=\"margin-bottom: 10px;\"></md-spinner>              \n          Loading data from... {{end_point}}\n        </md-card-content>\n        <md-card-content *ngIf=\"items.length\">\n          <md-list-item *ngFor=\"let item of items\">         \n            <button md-icon-button (click)=\"openDialog(item)\" mdTooltip=\"Play Audio\">\n              <md-icon>info</md-icon>\n            </button>\n            <button mdTooltip=\"View Description\" md-icon-button *ngIf=\"item.enclosure.type != null\" (click)=\"onSelectMedia(item.enclosure)\">\n              <md-icon>play_circle_filled</md-icon>\n            </button>            \n            {{item.title}}             \n          </md-list-item>\n        </md-card-content>\n        <md-card-actions style=\"text-align: right;\">\n          <button md-mini-fab (click)='onOpenLink()' mdTooltip=\"Open in New Window\" mdTooltipPosition=\"above\">\n            <md-icon>open_in_new</md-icon>\n          </button>\n          <button md-mini-fab (click)='onPullData()' mdTooltip=\"Refresh\" mdTooltipPosition=\"above\">\n            <md-icon>refresh</md-icon>\n          </button>\n        </md-card-actions>\n      </md-card>\n      "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__rss_service__["a" /* RssService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__rss_service__["a" /* RssService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_simple_dialog_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_simple_dialog_dialog_service__["a" /* DialogService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_events_service__["a" /* NgRadio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_events_service__["a" /* NgRadio */]) === "function" && _c || Object])
], RssComponent);

var _a, _b, _c;
//# sourceMappingURL=rss-component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RssService; });
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
    return RssService;
}());
RssService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RssService);

var _a;
//# sourceMappingURL=rss.service.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__simple_dialog_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
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
    return DialogService;
}());
DialogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _a || Object])
], DialogService);

var _a;
//# sourceMappingURL=dialog.service.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleDialogComponent; });
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
    return SimpleDialogComponent;
}());
SimpleDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-simple-dialog',
        template: "\n      <h2 md-dialog-title>{{title}}</h2>\n      <md-dialog-content [innerHtml]=message></md-dialog-content>\n  ",
        styles: [__webpack_require__(279)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */]) === "function" && _a || Object])
], SimpleDialogComponent);

var _a;
//# sourceMappingURL=simple-dialog.component.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 190;


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(222);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: "\n        <md-toolbar style=\"background-color: black;\">\n            <span style=\"color: white;\">\n                <a href=\"\">\n                    <img \n                    src=\"/assets/borntolearnwild.png\" \n                    style=\"margin-right: 10px; width:30px; height: 30px;\" \n                    alt=\"Learn Wild | Not every site can become a great source of knowledge; but a great source of knowledge *can* come from any site.\">\n                </a>                \n            </span>\n            <span class=\"example-spacer\"></span>\n            <span style=\"width: 100%\"><app-single-media-player></app-single-media-player></span>            \n            <md-icon class=\"example-icon\" style=\"color: white;\">account_circle</md-icon>\n            <md-icon class=\"example-icon\" style=\"color: white;\">delete</md-icon>\n        </md-toolbar>\n        <div style=\"margin-top:5px;\">   \n            <dashboard></dashboard>\n        </div>        \n    "
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_masonry__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_cards_rss_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component_outlet__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dashboard_cards_rss_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_simple_dialog_dialog_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_events_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipe_strip_html_tags_pipe__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_simple_dialog_simple_dialog_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_videogular2_core__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_videogular2_controls__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_videogular2_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_videogular2_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_videogular2_overlay_play__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_videogular2_overlay_play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_videogular2_overlay_play__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_videogular2_buffering__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_videogular2_buffering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_videogular2_buffering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_single_media_player_single_media_player_component__ = __webpack_require__(221);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import { FeedCardComponent } from './feed-card/feed-card.component';



// shared







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard__["a" /* Dashboard */],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component_outlet__["a" /* DashboardComponentOutlet */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_cards_rss_component__["a" /* RssComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pipe_strip_html_tags_pipe__["a" /* StripHtmlTagsPipe */],
            __WEBPACK_IMPORTED_MODULE_16__shared_simple_dialog_simple_dialog_component__["a" /* SimpleDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_21__shared_single_media_player_single_media_player_component__["a" /* SingleMediaPlayerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_masonry__["a" /* MasonryModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_17_videogular2_core__["VgCoreModule"],
            __WEBPACK_IMPORTED_MODULE_18_videogular2_controls__["VgControlsModule"],
            __WEBPACK_IMPORTED_MODULE_19_videogular2_overlay_play__["VgOverlayPlayModule"],
            __WEBPACK_IMPORTED_MODULE_20_videogular2_buffering__["VgBufferingModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__dashboard_cards_rss_service__["a" /* RssService */],
            __WEBPACK_IMPORTED_MODULE_13__shared_simple_dialog_dialog_service__["a" /* DialogService */],
            __WEBPACK_IMPORTED_MODULE_14__shared_events_service__["a" /* NgRadio */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]
            // don't do this:
            // http://stackoverflow.com/questions/38787795/why-ngoninit-called-twice
            // SingleMediaPlayerComponent
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__dashboard_cards_rss_component__["a" /* RssComponent */],
            __WEBPACK_IMPORTED_MODULE_16__shared_simple_dialog_simple_dialog_component__["a" /* SimpleDialogComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponentOutlet; });
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
        }
    };
    return DashboardComponentOutlet;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DashboardComponentOutlet.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DashboardComponentOutlet.prototype, "end_point", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], DashboardComponentOutlet.prototype, "count", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DashboardComponentOutlet.prototype, "componentSelected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DashboardComponentOutlet.prototype, "type", void 0);
DashboardComponentOutlet = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard-component-outlet',
        template: ''
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _b || Object])
], DashboardComponentOutlet);

var _a, _b;
//# sourceMappingURL=dashboard-component-outlet.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cards_rss_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_masonry__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
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
    function Dashboard() {
        this.options = {
            transitionDuration: '0.35',
            fitWidth: true,
            gutter: 5,
            percentPosition: true
        };
        this.componentInfos = [
            {
                type: __WEBPACK_IMPORTED_MODULE_1__cards_rss_component__["a" /* RssComponent */],
                title: 'Freakonomics',
                end_point: 'http://feeds2.feedburner.com/freakonomicsradio',
                count: 6
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_1__cards_rss_component__["a" /* RssComponent */],
                title: 'Channel 9',
                end_point: 'https://channel9.msdn.com/all/rss',
                count: 8
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_1__cards_rss_component__["a" /* RssComponent */],
                title: 'Ted Talks',
                end_point: 'https://www.ted.com/talks/rss',
                count: 10
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_1__cards_rss_component__["a" /* RssComponent */],
                title: 'Adventures in Angular',
                end_point: 'https://feeds.feedwrench.com/AdventuresInAngular.rss',
                count: 10
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_1__cards_rss_component__["a" /* RssComponent */],
                title: 'Scott Hanselman\'s blog',
                end_point: 'http://feeds.hanselman.com/scotthanselman',
                count: 4
            }
        ];
    }
    Dashboard.prototype.ngAfterViewInit = function () {
        this.masonry.layoutComplete.subscribe(function () {
            //console.log('masonry layout complete.');
        });
    };
    Dashboard.prototype.selectComponent = function (selected) {
        //console.log('Component Selection Event received by Dashboard: ' + selected.end_point);
        this.selectedComponent = selected;
    };
    return Dashboard;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular2_masonry__["b" /* AngularMasonry */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_masonry__["b" /* AngularMasonry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_masonry__["b" /* AngularMasonry */]) === "function" && _a || Object)
], Dashboard.prototype, "masonry", void 0);
Dashboard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard',
        template: "\n        <masonry style=\"margin: 0 auto;\">\n            <dashboard-component-outlet *ngFor=\"let info of componentInfos\"\n                [type]=\"info.type\" \n                [title]=\"info.title\" \n                [end_point]=\"info.end_point\"\n                [count]=\"info.count\"\n                (componentSelected)=\"selectComponent($event)\">\n            </dashboard-component-outlet>\n        </masonry>\n        <div *ngIf=\"selectedComponent\" class=\"col-sm-12\">\n            <b>Selected: </b> {{ selectedComponent.title }} | {{ selectedComponent.end_point }} | {{ selectedComponent.count }}\n        </div>\n    "
    })
], Dashboard);

var _a;
//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StripHtmlTagsPipe; });
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
    return StripHtmlTagsPipe;
}());
StripHtmlTagsPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'stripHtmlTags'
    })
], StripHtmlTagsPipe);

//# sourceMappingURL=strip-html-tags.pipe.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_events_service__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleMediaPlayerComponent; });
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
    return SingleMediaPlayerComponent;
}());
SingleMediaPlayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-single-media-player',
        template: __webpack_require__(288),
        styles: [__webpack_require__(280)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_events_service__["a" /* NgRadio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_events_service__["a" /* NgRadio */]) === "function" && _a || Object])
], SingleMediaPlayerComponent);

var _a;
//# sourceMappingURL=single-media-player.component.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)();
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(39)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 288:
/***/ (function(module, exports) {

module.exports = "<vg-player style=\"height: 50px;\" (onPlayerReady)=\"onVideoPlayerReady($event)\">\n    <vg-controls>\n        <vg-play-pause></vg-play-pause>\n        <vg-playback-button></vg-playback-button>\n\n        <vg-time-display vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>\n\n        <vg-scrub-bar>\n            <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n            <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n        </vg-scrub-bar>\n\n        <vg-time-display vgProperty=\"left\" vgFormat=\"mm:ss\"></vg-time-display>\n        <vg-time-display vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display>\n\n        <vg-mute></vg-mute>\n\n        <vg-fullscreen></vg-fullscreen>\n    </vg-controls>\n\n    <audio #media [vgMedia]=\"media\" id=\"myAudio\" preload=\"auto\">\n        <source *ngFor=\"let audio of sources\" [src]=\"audio.src\" [type]=\"audio.type\">\n    </audio>\n\n    <!--<video #media [vgMedia]=\"media\" id=\"myAudio\" preload=\"auto\" crossorigin>\n        <source *ngFor=\"let audio of sources\" [src]=\"audio.src\" [type]=\"audio.type\">\n    </video>-->\n\n</vg-player>"

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(191);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgRadio; });
// https://github.com/govorov/ng-radio



var NgRadio = (function () {
    function NgRadio() {
        this.separator = ':';
        this._eventBus = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    NgRadio.prototype.keyMatch = function (key, wildcard) {
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
    NgRadio.prototype.cast = function (key, data) {
        if (typeof key !== 'string' || !key.length) {
            throw 'Bad key. Please provide a string';
        }
        this._eventBus.next({ key: key, data: data });
    };
    NgRadio.prototype.on = function (key) {
        var _this = this;
        return this._eventBus.asObservable()
            .filter(function (event) {
            return _this.keyMatch(event.key, key);
        })
            .map(function (event) { return event.data; });
    };
    return NgRadio;
}());

//# sourceMappingURL=events.service.js.map

/***/ })

},[570]);
//# sourceMappingURL=main.bundle.js.map