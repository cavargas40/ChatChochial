webpackJsonp([2,5],{

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterializeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaterializeService = (function () {
    function MaterializeService() {
    }
    MaterializeService.prototype.toast = function (text, duration, style) {
        if (duration === void 0) { duration = 3000; }
        if (style === void 0) { style = ""; }
        Materialize.toast(text, duration, style);
    };
    MaterializeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], MaterializeService);
    return MaterializeService;
}());
//# sourceMappingURL=materialize.service.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_materialize_service__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var FirebaseService = (function () {
    function FirebaseService(firebaseApp, angularfire, materializeService) {
        this.firebaseApp = firebaseApp;
        this.angularfire = angularfire;
        this.materializeService = materializeService;
        this.base = '/FireChat/';
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](this.messages);
        this.message$ = this.messageSource.asObservable();
    }
    FirebaseService.prototype.init = function (channelName) {
        var _this = this;
        this.messages = this.angularfire.database.list(this.base + "/" + channelName);
        this.messages.subscribe(function (res) { return _this.messageSource.next(res); });
    };
    FirebaseService.prototype.sendMessage = function (message) {
        return this.messages.push(message);
    };
    FirebaseService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* FirebaseApp */])), 
        __metadata('design:paramtypes', [Object, (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_materialize_service__["a" /* MaterializeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_materialize_service__["a" /* MaterializeService */]) === 'function' && _b) || Object])
    ], FirebaseService);
    return FirebaseService;
    var _a, _b;
}());
//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: 'AIzaSyC7URADQHE-fedSf3-w3x_H3GSiYhfn0DA',
        authDomain: 'firechat-3ecbb.firebaseapp.com',
        databaseURL: 'https://firechat-3ecbb.firebaseio.com',
        projectId: 'firechat-3ecbb',
        storageBucket: 'firechat-3ecbb.appspot.com',
        messagingSenderId: '813939480057'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 324:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 324;


/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(289);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(516),
            styles: [__webpack_require__(505)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_services_materialize_service__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_services_firebase_service__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_shared_navbar_navbar_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_shared_footer_footer_component__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_components_chat_viewer_chat_viewer_component__ = __webpack_require__(440);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_shared_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_shared_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__core_components_chat_viewer_chat_viewer_component__["a" /* ChatViewerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].firebase)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__core_services_materialize_service__["a" /* MaterializeService */],
                __WEBPACK_IMPORTED_MODULE_8__core_services_firebase_service__["a" /* FirebaseService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__(517),
            styles: [__webpack_require__(506)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__(518),
            styles: [__webpack_require__(507)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_materialize_service__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_message__ = __webpack_require__(441);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatViewerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatViewerComponent = (function () {
    function ChatViewerComponent(firebaseService, materializeService) {
        this.firebaseService = firebaseService;
        this.materializeService = materializeService;
        this.isLoading = true;
        this.isActive = false;
        this.messages = [];
        this.message = new __WEBPACK_IMPORTED_MODULE_4__models_message__["a" /* Message */]();
        this.channels = ['Selecciona un canal', 'General', 'Ocio', 'Ñoñadas', 'Otro'];
        this.name = '';
    }
    ChatViewerComponent.prototype.ngOnInit = function () {
        this.isLoading = false;
        this.avatar = this.avatarCreator();
        this.channel = 'Selecciona un canal';
    };
    ChatViewerComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ChatViewerComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) {
            this.materializeService.toast(err, 4000);
        }
    };
    ChatViewerComponent.prototype.sendMessage = function () {
        this.message.app_user_name = this.name;
        this.message.text = this.messageText;
        this.message.timestamp = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"].ServerValue.TIMESTAMP;
        this.message.img = this.avatar;
        this.firebaseService.sendMessage(this.message);
        this.messageText = '';
    };
    ChatViewerComponent.prototype.trackByKey = function (index, message) { return message.$key; };
    ChatViewerComponent.prototype.avatarCreator = function () {
        var random = Math.floor((Math.random() * 1000) + 1);
        return "https://api.adorable.io/avatars/" + random + "/";
    };
    ChatViewerComponent.prototype.chatActivate = function () {
        var _this = this;
        if (!(this.name.trim() === '') && this.channel !== 'Selecciona un canal') {
            this.isActive = true;
            this.isLoading = true;
            this.firebaseService.init(this.channel + "/messages");
            this.subscription = this.firebaseService.message$.subscribe(function (res) {
                if (res && _this.isActive) {
                    _this.chatMessages = res;
                    setTimeout(function () { return _this.scrollToBottom(); }, 500);
                }
                _this.isLoading = false;
            });
            return;
        }
        this.materializeService.toast('Ingresa un nombre y selecciona un canal, para empezar a utilizar este maravilloso chat!');
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* ViewChild */])('chatContainer'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* ElementRef */]) === 'function' && _a) || Object)
    ], ChatViewerComponent.prototype, "myScrollContainer", void 0);
    ChatViewerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-chat-viewer',
            template: __webpack_require__(519),
            styles: [__webpack_require__(508)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_firebase_service__["a" /* FirebaseService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_materialize_service__["a" /* MaterializeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_materialize_service__["a" /* MaterializeService */]) === 'function' && _c) || Object])
    ], ChatViewerComponent);
    return ChatViewerComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=chat-viewer.component.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message(init) {
        Object.assign(this, init);
    }
    return Message;
}());
//# sourceMappingURL=message.js.map

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)();
// imports


// module
exports.push([module.i, ".message {\r\n    border: none;\r\n    background-color: transparent;\r\n    padding-top: 2px !important;\r\n    padding-bottom: 0px !important;\r\n    min-height: 60px !important;\r\n}\r\n\r\n.chat-container {\r\n    height: 400px;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.sender-img {\r\n    width: 60%;\r\n    height: 60%;\r\n}\r\n\r\n.small-text {\r\n    font-size: 0.8rem;\r\n    color: #ee6e73;\r\n}\r\n\r\naudio {\r\n    background-color: transparent;\r\n}\r\n\r\n.sender{\r\n    font-weight: bold;\r\n}\r\n\r\n.bold{\r\n    font-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 516:
/***/ (function(module, exports) {

module.exports = "<header>\n<app-navbar></app-navbar>\n<header>\n\n<main>\n  <app-chat-viewer></app-chat-viewer>\n</main>\n\n\n<!--<app-footer></app-footer>-->\n"

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col l6 s12\">\n        <h5 class=\"white-text\">FireChat</h5>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-copyright\">\n    <div class=\"container\">\n      © 2017 Copyright <a class=\"white-text\" href=\"https://github.com/cavargas40\" target=\"_blank\">cavargas40@gmail.com</a>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav-wrapper\">\n    <a href=\".\" class=\"brand-logo center\">FireChat</a>\n  </div>\n</nav>"

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

module.exports = "<div class=\"progress no-margin\" *ngIf=\"isLoading\">\n    <div class=\"indeterminate\"></div>\n</div>\n\n<div class=\"container\" *ngIf=\"!isActive\">\n    <div class=\"row\">\n        <div class=\"input-field col m2\"></div>\n        <div class=\"input-field col m4\">\n            <input id=\"last_name\" type=\"text\" class=\"validate\" style=\"width:70%\" [(ngModel)]=\"name\" (keyup.enter)=\"chatActivate()\">\n            <label for=\"last_name\">Nombre</label>\n        </div>\n        <div class=\"col m4\">\n            <label>Canales</label>\n            <select class=\"browser-default\" [(ngModel)]=\"channel\">\n                <option *ngFor=\"let channel of channels\" selected>\n                    {{channel}}\n                </option>\n            </select>\n        </div>\n    </div>\n    <div class=\"row center-align\">\n        <a (click)=\"chatActivate()\" class=\"waves-effect waves-light btn\"><i class=\"material-icons right\">send</i>Ingresar</a>\n    </div>\n</div>\n\n<div *ngIf=\"isActive\">\n    <div class=\"card collection center-align\">\n        <h5>Hola <span class=\"bold\">{{ name }}</span>, Bienvenido al canal <span class=\"bold\">{{ channel }}</span></h5>\n    </div>\n    <div class=\"row chat-container\" #chatContainer>\n        <div class=\"row\">\n            <div class=\"col s12\">\n                <div class=\"card collection\" *ngFor=\"let message of chatMessages;trackBy: trackByKey\">\n                    <div class=\"card-content collection-item avatar message\">\n                        <img [src]=\"message.img\" class=\"circle sender-img\">\n                        <span class=\"small-text sender\">\n                        {{message.app_user_name}} dice:\n                    </span>\n                        <p>\n                            {{message.text}}\n                        </p>\n                        <span class=\"secondary-content small-text\"> {{message.timestamp | date:'short'}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\" [hidden]=\"isLoading || !isActive\">\n        <form class=\"col s12\">\n            <div class=\"row\">\n                <div class=\"input-field col s12\">\n                    <i class=\"material-icons prefix\">mode_edit</i>\n                    <textarea id=\"message-text\" class=\"materialize-textarea\" (keyup.enter)=\"sendMessage()\" [(ngModel)]=\"messageText\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n                    <label for=\"message-text\">Nuevo mensaje</label>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(325);


/***/ })

},[559]);
//# sourceMappingURL=main.bundle.js.map