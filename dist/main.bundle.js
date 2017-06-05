webpackJsonp([1,5],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_simple_dialog_dialog_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_events_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotComponent; });
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
        this.today = new Date();
        this.componentSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.nytItems = new Array();
    }
    HotComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.radio.on('HotArticle:nyt').subscribe(function (message) {
            console.log('Hot Article (NYT) Radio Receiving:' + message.title);
            _this.nytItems.push(message);
        });
        console.log(this.nytItems.length);
        this.radio.on('HotArticle:rss').subscribe(function (message) {
            console.log('Hot Article (RSS) Radio Receiving:' + message.title);
            _this.rssItems.push(message);
        });
    };
    HotComponent.prototype.onSelectMedia = function (enclosure) {
        // console.log('Media Selection Radio Casting:' + enclosure.link);
        // const mediaType = enclosure.type.substring(0, enclosure.type.indexOf('/'));
        // const key = 'PlayMedia:' + mediaType;
        // // console.log('key: ' + key);
        // this.radio.cast(key, enclosure);
    };
    HotComponent.prototype.onSelected = function () {
        // console.log('Component Selection Event Emitted:'  + this.end_point);
        this.componentSelected.emit(this);
    };
    HotComponent.prototype.onOpenNytLink = function (item) {
        window.open(item.short_url, '_blank');
    };
    HotComponent.prototype.onOpenNytDialog = function (item) {
        var title = item.title + ' | ' + new __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]('en-US').transform(item.published_date, 'yyyy-MM-dd');
        this.dialogService.confirm(title, item.abstract);
    };
    HotComponent.prototype.onOpenRssLink = function (item) {
        window.open(item.link, '_blank');
    };
    HotComponent.prototype.onOpenRssDialog = function (item) {
        var title = item.title + ' | ' + new __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]('en-US').transform(item.pubDate, 'yyyy-MM-dd');
        this.dialogService.confirm(title, item.description);
    };
    return HotComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], HotComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], HotComponent.prototype, "end_point", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], HotComponent.prototype, "count", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], HotComponent.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], HotComponent.prototype, "componentSelected", void 0);
HotComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-component-hot',
        template: "\n      <md-card masonry-brick style=\"min-width: 280px; max-width: 412px; margin: 5px;\" (click)=\"onSelected()\">\n        <md-card-header>\n          <div md-card-avatar><img src=\"/assets/borntolearnwild.png\" style=\"margin-right: 10px; width:30px; height: 30px;\"/></div>\n          <md-card-title>Today's Articles <font color=\"red\">|</font> Born To Learn Wild</md-card-title>\n          <md-card-subtitle>Today's news from your sources.</md-card-subtitle>\n        </md-card-header>\n        <md-card-content *ngIf=\"!nytItems.length\">\n          <md-spinner style=\"margin-bottom: 10px;\"></md-spinner>              \n          Waiting for latest news... {{end_point}}\n        </md-card-content>\n\n        <md-card-content>\n\n          <!-- NYT ENTRIES -->\n          <md-list-item *ngFor=\"let item of nytItems\">         \n            <button md-icon-button (click)=\"onOpenNytDialog(item)\" mdTooltip=\"View Summary\">\n              <md-icon [style.color]=\"item.today ? '#b62025' : 'white'\">info</md-icon>\n            </button>\n            <button md-icon-button (click)='onOpenNytLink(item)' mdTooltip=\"Open in New Window\" mdTooltipPosition=\"above\">\n              <md-icon>open_in_new</md-icon>\n            </button>            \n            {{item.title}}            \n          </md-list-item>\n\n          <!-- RSS ENTRIES -->\n          <md-list-item *ngFor=\"let item of rssItems\">         \n            <button md-icon-button (click)=\"onOpenRssDialog(item)\" mdTooltip=\"View Summary\">\n              <md-icon [style.color]=\"item.today ? '#b62025' : 'white'\">info</md-icon>\n            </button>\n            <button md-icon-button (click)='onOpenRssLink(item)' mdTooltip=\"Open in New Window\" mdTooltipPosition=\"above\">\n              <md-icon>open_in_new</md-icon>\n            </button>            \n            {{item.title}}            \n          </md-list-item>          \n\n        </md-card-content>\n      </md-card>\n      "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_simple_dialog_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_simple_dialog_dialog_service__["a" /* DialogService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_events_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_events_service__["a" /* EventService */]) === "function" && _b || Object])
], HotComponent);

var _a, _b;
//# sourceMappingURL=hot.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipe_today_pipe__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nyt_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_simple_dialog_dialog_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_events_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NytComponent; });
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
                if (item.today && (index < _this.count)) {
                    console.log('Hot Article (NYT) Radio Casting:' + item.title);
                    _this.radio.cast("HotArticle:nyt", item);
                }
                return index < _this.count;
            });
        }, function (error) { return console.log(error); });
    };
    NytComponent.prototype.openDialog = function (result) {
        // console.log(feedEntry);
        var title = result.title + ' | ' + new __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]('en-US').transform(result.published_date, 'yyyy-MM-dd');
        this.dialogService.confirm(title, result.abstract);
    };
    NytComponent.prototype.onSelected = function () {
        // console.log('Component Selection Event Emitted:'  + this.end_point);
        this.componentSelected.emit(this);
    };
    return NytComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], NytComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], NytComponent.prototype, "end_point", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], NytComponent.prototype, "count", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], NytComponent.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], NytComponent.prototype, "componentSelected", void 0);
NytComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-component-nyt',
        template: "\n      <md-card masonry-brick style=\"min-width: 280px; max-width: 412px; margin: 5px;\" (click)=\"onSelected()\">\n        <md-card-header *ngIf=\"results.length\">\n          <md-card-title>{{title}} <font color='red'>|</font> {{ options | upperCaseFirstLetter }}</md-card-title>\n        </md-card-header>\n        <md-card-content *ngIf=\"!results.length\">\n          <md-spinner style=\"margin-bottom: 10px;\"></md-spinner>              \n          Loading data from... {{end_point}}\n        </md-card-content>\n        <md-card-content *ngIf=\"results.length\">\n          <md-list-item *ngFor=\"let item of results\">         \n            <button md-icon-button (click)=\"openDialog(item)\">\n              <md-icon [style.color]=\"item.today ? '#b62025' : 'white'\">info</md-icon>\n            </button>\n          <button md-icon-button (click)='onOpenLink(item)' mdTooltip=\"Open Article in New Window\" mdTooltipPosition=\"above\">\n            <md-icon>open_in_new</md-icon>\n          </button>            \n            {{item.title}}             \n          </md-list-item>\n        </md-card-content>\n        <md-card-actions style=\"text-align: right;\">\n          <button md-mini-fab (click)='onPullData()' mdTooltip=\"Refresh\" mdTooltipPosition=\"above\">\n            <md-icon>refresh</md-icon>\n          </button>\n        </md-card-actions>\n      </md-card>",
        providers: [__WEBPACK_IMPORTED_MODULE_2__pipe_today_pipe__["a" /* TodayPipe */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__nyt_service__["a" /* NytService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__nyt_service__["a" /* NytService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_simple_dialog_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_simple_dialog_dialog_service__["a" /* DialogService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_events_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_events_service__["a" /* EventService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__pipe_today_pipe__["a" /* TodayPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__pipe_today_pipe__["a" /* TodayPipe */]) === "function" && _d || Object])
], NytComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=nyt.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NytService; });
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
        var parameters = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        parameters.set('api-key', this.nytApiTopStories.apikey);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
        requestOptions.search = parameters;
        return this.http.get(this.nytBaseEndPoint + this.nytApiTopStories.endpoint.replace('{options}', options), requestOptions)
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
    return NytService;
}());
NytService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NytService);

var _a;
//# sourceMappingURL=nyt.service.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rss_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_simple_dialog_dialog_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_events_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipe_today_pipe__ = __webpack_require__(74);
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
            _this.items = result.items.filter(function (item, index) {
                item.today = _this.todayPipe.transform(item.pubDate.toString());
                if (item.today) {
                    console.log('Hot Article (RSS) Radio Casting:' + item.title);
                    _this.radio.cast("HotArticle:rss", item);
                }
                return index < _this.count;
            });
        }, function (error) { return console.log(error); });
    };
    RssComponent.prototype.openDialog = function (feedEntry) {
        // console.log(feedEntry);
        var title = feedEntry.title + ' | ' + new __WEBPACK_IMPORTED_MODULE_1__angular_common__["DatePipe"]('en-US').transform(feedEntry.pubDate, 'yyyy-MM-dd');
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
    RssComponent.prototype.onOpenItemLink = function (item) {
        window.open(item.link, '_blank');
    };
    RssComponent.prototype.onOpenFeedLink = function () {
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], RssComponent.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], RssComponent.prototype, "componentSelected", void 0);
RssComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-component-rss',
        template: "\n      <md-card masonry-brick style=\"min-width: 280px; max-width: 412px; margin: 5px;\" (click)=\"onSelected()\">\n        <md-card-header *ngIf=\"items.length\">\n          <div md-card-avatar *ngIf=\"feed.image!=''\"><img src=\"{{feed.image}}\" style=\"width: 30px;\"/></div>\n          <md-card-title>{{feed.title}} <font color=\"red\">|</font> {{feed.author}}</md-card-title>\n          <md-card-subtitle>{{feed.description}} </md-card-subtitle>\n        </md-card-header>\n        <md-card-content *ngIf=\"!items.length\">\n          <md-spinner style=\"margin-bottom: 10px;\"></md-spinner>              \n          Loading data from... {{end_point}}\n        </md-card-content>\n        <md-card-content *ngIf=\"items.length\">\n          <md-list-item *ngFor=\"let item of items\">         \n            <button md-icon-button (click)=\"openDialog(item)\" mdTooltip=\"View Summary\">\n              <md-icon [style.color]=\"item.today ? '#b62025' : 'white'\">info</md-icon>\n            </button>\n            <button md-icon-button (click)='onOpenItemLink(item)' mdTooltip=\"Open in New Window\" mdTooltipPosition=\"above\">\n              <md-icon>open_in_new</md-icon>\n            </button>            \n            <button mdTooltip=\"Play Audio\" md-icon-button *ngIf=\"item.enclosure.type != null\" (click)=\"onSelectMedia(item.enclosure)\">\n              <md-icon>play_circle_filled</md-icon>\n            </button>            \n            {{item.title}}            \n          </md-list-item>\n        </md-card-content>\n        <md-card-actions style=\"text-align: right;\">\n          <button md-mini-fab (click)='onOpenFeedLink()' mdTooltip=\"Open in New Window\" mdTooltipPosition=\"above\">\n            <md-icon>open_in_new</md-icon>\n          </button>\n          <button md-mini-fab (click)='onPullData()' mdTooltip=\"Refresh\" mdTooltipPosition=\"above\">\n            <md-icon>refresh</md-icon>\n          </button>\n        </md-card-actions>\n      </md-card>\n      ",
        providers: [__WEBPACK_IMPORTED_MODULE_5__pipe_today_pipe__["a" /* TodayPipe */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__rss_service__["a" /* RssService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__rss_service__["a" /* RssService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_simple_dialog_dialog_service__["a" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_simple_dialog_dialog_service__["a" /* DialogService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_events_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_events_service__["a" /* EventService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__pipe_today_pipe__["a" /* TodayPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__pipe_today_pipe__["a" /* TodayPipe */]) === "function" && _d || Object])
], RssComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=rss-component.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(96);
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
        console.log(feed);
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

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
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
    function AuthService(angularFireAuth, angularFireDatabase) {
        this.angularFireAuth = angularFireAuth;
        this.angularFireDatabase = angularFireDatabase;
        this.user = __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].empty();
        console.log(this.angularFireAuth.authState);
        this.user = this.angularFireAuth.authState;
    }
    AuthService.prototype.loginWithGoogle = function () {
        return this.angularFireAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.loginWithGithub = function () {
        return this.angularFireAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GithubAuthProvider());
    };
    AuthService.prototype.loginWithTwitter = function () {
        return this.angularFireAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].TwitterAuthProvider());
    };
    AuthService.prototype.logout = function () {
        return this.angularFireAuth.auth.signOut();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_cards_nyt_nyt_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_cards_hot_hot_component__ = __webpack_require__(117);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EndPointService; });
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
        // this.items = af.list('/endpoints', {
        //   query: {
        //     limitToLast: 50
        //   }
        // })
        this.af = af;
        this.endPoints = [];
        this.endPoints = [
            {
                type: __WEBPACK_IMPORTED_MODULE_4__dashboard_cards_hot_hot_component__["a" /* HotComponent */],
                title: 'Latest Articles',
                end_point: '',
                options: '',
                count: 0
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'Freakonomics',
                end_point: 'http://feeds2.feedburner.com/freakonomicsradio',
                options: '',
                count: 6
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_3__dashboard_cards_nyt_nyt_component__["a" /* NytComponent */],
                title: 'NYT - Top Stories',
                end_point: '',
                options: 'world',
                count: 5
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_3__dashboard_cards_nyt_nyt_component__["a" /* NytComponent */],
                title: 'NYT - Top Stories',
                end_point: '',
                options: 'technology',
                count: 7
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'Channel 9',
                end_point: 'https://channel9.msdn.com/all/rss',
                options: '',
                count: 8
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'Ted Talks',
                end_point: 'https://www.ted.com/talks/rss',
                count: 10,
                options: ''
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'Adventures in Angular',
                end_point: 'https://feeds.feedwrench.com/AdventuresInAngular.rss',
                options: '',
                count: 10
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'Javascript Jabber',
                end_point: 'https://feeds.feedwrench.com/JavascriptJabber.rss',
                options: '',
                count: 5
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'Scott Hanselman\'s blog',
                end_point: 'http://feeds.hanselman.com/scotthanselman',
                options: '',
                count: 4
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'The Minimalists',
                end_point: 'http://theminimalists.libsyn.com/rss',
                options: '',
                count: 5
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'Hanselminutes',
                end_point: 'http://feeds.podtrac.com/9dPm65vdpLL1',
                options: '',
                count: 3
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'This American Life',
                end_point: 'http://feed.thisamericanlife.org/talpodcast',
                options: '',
                count: 2
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'Simple Talk',
                end_point: 'https://www.simple-talk.com/feed/',
                options: '',
                count: 5
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'NPR - Planet Money Podcast',
                end_point: 'https://www.npr.org/rss/podcast.php?id=510289',
                options: '',
                count: 5
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'Troy Hunt - Security Blog',
                end_point: 'https://feeds.feedburner.com/TroyHunt',
                options: '',
                count: 5
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'John Papa - Blog',
                end_point: 'https://johnpapa.net/rss/',
                options: '',
                count: 5
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'TMSIDK',
                end_point: 'http://rss.art19.com/tell-me-something-i-don-t-know',
                options: '',
                count: 5
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_2__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
                title: 'Malcom Gladwell - Revisionist History',
                end_point: 'http://feeds.feedburner.com/RevisionistHistory',
                options: '',
                count: 12
            }
        ];
    }
    return EndPointService;
}());
EndPointService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], EndPointService);

var _a;
//# sourceMappingURL=endpoint.service.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(72);
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
        template: "\n      <h2 md-dialog-title>{{title}}</h2>\n      <md-dialog-content [innerHtml]=message></md-dialog-content>\n  "
        //,styleUrls: ['./simple-dialog.component.css']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogRef */]) === "function" && _a || Object])
], SimpleDialogComponent);

var _a;
//# sourceMappingURL=simple-dialog.component.js.map

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 201;


/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(221);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 213:
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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: "\n        <toolbar></toolbar>\n        <div style=\"margin-top:5px;\">\n            <dashboard></dashboard>\n        </div>        \n    "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_masonry__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component_outlet__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dashboard_cards_rss_rss_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dashboard_cards_rss_rss_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dashboard_cards_nyt_nyt_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dashboard_cards_nyt_nyt_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_auth_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_simple_dialog_dialog_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_events_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_endpoint_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_simple_dialog_simple_dialog_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_toolbar_toolbar_component__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipe_strip_html_tags_pipe__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pipe_upper_case_first_letter_pipe__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipe_today_pipe__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_videogular2_core__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_videogular2_controls__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_videogular2_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_videogular2_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_videogular2_overlay_play__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_videogular2_overlay_play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_videogular2_overlay_play__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_videogular2_buffering__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_videogular2_buffering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_videogular2_buffering__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__shared_single_media_player_single_media_player_component__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__dashboard_cards_hot_hot_component__ = __webpack_require__(117);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
var routes = [];
//   { path: '', component: AppComponent }
// ]
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard__["a" /* Dashboard */],
            __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_component_outlet__["a" /* DashboardComponentOutlet */],
            __WEBPACK_IMPORTED_MODULE_15__dashboard_cards_rss_rss_component__["a" /* RssComponent */],
            __WEBPACK_IMPORTED_MODULE_17__dashboard_cards_nyt_nyt_component__["a" /* NytComponent */],
            __WEBPACK_IMPORTED_MODULE_26__pipe_upper_case_first_letter_pipe__["a" /* UpperCaseFirstLetterPipe */],
            __WEBPACK_IMPORTED_MODULE_25__pipe_strip_html_tags_pipe__["a" /* StripHtmlTagsPipe */],
            __WEBPACK_IMPORTED_MODULE_27__pipe_today_pipe__["a" /* TodayPipe */],
            __WEBPACK_IMPORTED_MODULE_23__shared_simple_dialog_simple_dialog_component__["a" /* SimpleDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_32__shared_single_media_player_single_media_player_component__["a" /* SingleMediaPlayerComponent */],
            __WEBPACK_IMPORTED_MODULE_24__shared_toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_33__dashboard_cards_hot_hot_component__["a" /* HotComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_11_angular2_masonry__["a" /* MasonryModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_28_videogular2_core__["VgCoreModule"],
            __WEBPACK_IMPORTED_MODULE_29_videogular2_controls__["VgControlsModule"],
            __WEBPACK_IMPORTED_MODULE_30_videogular2_overlay_play__["VgOverlayPlayModule"],
            __WEBPACK_IMPORTED_MODULE_31_videogular2_buffering__["VgBufferingModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_16__dashboard_cards_rss_rss_service__["a" /* RssService */],
            __WEBPACK_IMPORTED_MODULE_18__dashboard_cards_nyt_nyt_service__["a" /* NytService */],
            __WEBPACK_IMPORTED_MODULE_20__shared_simple_dialog_dialog_service__["a" /* DialogService */],
            __WEBPACK_IMPORTED_MODULE_19__shared_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_21__shared_events_service__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_22__shared_endpoint_service__["a" /* EndPointService */]
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
            __WEBPACK_IMPORTED_MODULE_33__dashboard_cards_hot_hot_component__["a" /* HotComponent */],
            __WEBPACK_IMPORTED_MODULE_23__shared_simple_dialog_simple_dialog_component__["a" /* SimpleDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_24__shared_toolbar_toolbar_component__["a" /* ToolbarComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 215:
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
            this.dynamicInstance.options = this.options;
        }
    };
    return DashboardComponentOutlet;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DashboardComponentOutlet.prototype, "type", void 0);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DashboardComponentOutlet.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DashboardComponentOutlet.prototype, "componentSelected", void 0);
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

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_masonry__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_endpoint_service__ = __webpack_require__(123);
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
    function Dashboard(endpointService) {
        this.componentInfos = [];
        this.options = {
            transitionDuration: '0.35',
            fitWidth: true,
            gutter: 5,
            percentPosition: true
        };
        this.componentInfos = endpointService.endPoints;
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
    return Dashboard;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_angular2_masonry__["b" /* AngularMasonry */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_masonry__["b" /* AngularMasonry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_masonry__["b" /* AngularMasonry */]) === "function" && _a || Object)
], Dashboard.prototype, "masonry", void 0);
Dashboard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard',
        template: "\n        <masonry style=\"margin: 0 auto;\">\n            <dashboard-component-outlet *ngFor=\"let info of componentInfos\"\n                [type]=\"info.type\" \n                [title]=\"info.title\" \n                [end_point]=\"info.end_point\"\n                [count]=\"info.count\"\n                [options]=\"info.options\"\n                (componentSelected)=\"selectComponent($event)\">\n            </dashboard-component-outlet>\n        </masonry>\n    "
    })
    // <div *ngIf="selectedComponent" class="col-sm-12">
    //     <b>Selected: </b> {{ selectedComponent.title }} | {{ selectedComponent.end_point }} | {{ selectedComponent.count }}
    // </div>
    ,
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_endpoint_service__["a" /* EndPointService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_endpoint_service__["a" /* EndPointService */]) === "function" && _b || Object])
], Dashboard);

var _a, _b;
//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 217:
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

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpperCaseFirstLetterPipe; });
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
    return UpperCaseFirstLetterPipe;
}());
UpperCaseFirstLetterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'upperCaseFirstLetter'
    })
], UpperCaseFirstLetterPipe);

//# sourceMappingURL=upper-case-first-letter.pipe.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_events_service__ = __webpack_require__(37);
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
        template: __webpack_require__(298),
        styles: [__webpack_require__(284)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_events_service__["a" /* EventService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_events_service__["a" /* EventService */]) === "function" && _a || Object])
], SingleMediaPlayerComponent);

var _a;
//# sourceMappingURL=single-media-player.component.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
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
    function ToolbarComponent(authService, router) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.profile = "";
        console.log("Hello from the toolbar component...");
        this.authService.user.subscribe(function (user) {
            if (user == null) {
            }
            else {
                _this.user = user;
                _this.profile = user.displayName != null ? user.displayName : user.email != null ? user.email : "None";
                console.log(user);
            }
        });
    }
    ToolbarComponent.prototype.googleLogin = function () {
        this.authService.loginWithGoogle().then(function (data) {
            //console.log(data);
        });
    };
    ToolbarComponent.prototype.githubLogin = function () {
        this.authService.loginWithGithub().then(function (data) {
            //console.log(data.additionalUserInfo);
        });
    };
    ToolbarComponent.prototype.twitterLogin = function () {
        this.authService.loginWithTwitter().then(function (data) {
            //console.log(data.additionalUserInfo);
        });
    };
    ToolbarComponent.prototype.logout = function () {
        this.authService.logout();
        console.log("signed out.");
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'toolbar',
        template: "\n        <md-toolbar style=\"background-color: black;\">\n            <span style=\"color: white;\">\n                <a href=\"\">\n                    <img \n                    src=\"/assets/borntolearnwild.png\" \n                    style=\"margin-right: 10px; width:30px; height: 30px;\" \n                    alt=\"Learn Wild | Not every site can become a great source of knowledge; but a great source of knowledge can come from any site.\">\n                </a>                \n            </span>\n            <span class=\"example-spacer\"></span>\n            <span style=\"width: 100%\"><app-single-media-player></app-single-media-player></span>\n\n            <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n                <md-icon style=\"color: white;\" *ngIf=\"!(authService.user | async)\">account_circle</md-icon>\n                <md-icon style=\"color: white;\" *ngIf=\"(authService.user | async)\">face</md-icon>\n            </button>\n            \n            <md-menu #menu=\"mdMenu\">\n                <button md-menu-item (click)=\"googleLogin()\" *ngIf=\"!(authService.user | async)\">\n                    <button md-raised-button>Google</button>\n                </button>\n                <button md-menu-item (click)=\"githubLogin()\" *ngIf=\"!(authService.user | async)\">\n                    <button md-raised-button>GitHub</button>\n                </button>\n                <button md-menu-item (click)=\"twitterLogin()\" *ngIf=\"!(authService.user | async)\">\n                    <button md-raised-button>Twitter</button>\n                </button>                \n                <md-list class=\"mat-list-stacked\" *ngIf=\"(authService.user | async)\">\n                    <md-list-item style=\"font-weight: bold;\">{{profile}}</md-list-item>\n                </md-list>                \n                <button md-menu-item (click)=\"logout()\" *ngIf=\"(authService.user | async)\">\n                    <button md-raised-button>Logout</button>\n                </button>                \n            </md-menu>\n        </md-toolbar>\n        <router-outlet></router-outlet>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ToolbarComponent);

var _a, _b;
//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ 221:
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

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(32)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 298:
/***/ (function(module, exports) {

module.exports = "<vg-player style=\"height: 50px;\" (onPlayerReady)=\"onVideoPlayerReady($event)\">\r\n    <vg-controls>\r\n        <vg-play-pause></vg-play-pause>\r\n        <vg-playback-button></vg-playback-button>\r\n\r\n        <vg-time-display vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>\r\n\r\n        <vg-scrub-bar>\r\n            <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\r\n            <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\r\n        </vg-scrub-bar>\r\n\r\n        <vg-time-display vgProperty=\"left\" vgFormat=\"mm:ss\"></vg-time-display>\r\n        <vg-time-display vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display>\r\n\r\n        <vg-mute></vg-mute>\r\n\r\n        <vg-fullscreen></vg-fullscreen>\r\n    </vg-controls>\r\n\r\n    <audio #media [vgMedia]=\"media\" id=\"myAudio\" preload=\"auto\">\r\n        <source *ngFor=\"let audio of sources\" [src]=\"audio.src\" [type]=\"audio.type\">\r\n    </audio>\r\n\r\n    <!--<video #media [vgMedia]=\"media\" id=\"myAudio\" preload=\"auto\" crossorigin>\r\n        <source *ngFor=\"let audio of sources\" [src]=\"audio.src\" [type]=\"audio.type\">\r\n    </video>-->\r\n\r\n</vg-player>"

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
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

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__simple_dialog_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(72);
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

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(202);


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodayPipe; });
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
    return TodayPipe;
}());
TodayPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'todayPipe'
    }),
    __metadata("design:paramtypes", [])
], TodayPipe);

//# sourceMappingURL=today.pipe.js.map

/***/ })

},[572]);
//# sourceMappingURL=main.bundle.js.map