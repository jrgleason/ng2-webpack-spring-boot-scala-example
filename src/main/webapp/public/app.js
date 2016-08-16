webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(2);
	var core_1 = __webpack_require__(12);
	var app_component_1 = __webpack_require__(338);
	var http_1 = __webpack_require__(340);
	var wheel_service_1 = __webpack_require__(407);
	var cards_service_1 = __webpack_require__(392);
	if (process.env.ENV === 'production') {
	    core_1.enableProdMode();
	}
	platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, wheel_service_1.WheelService, cards_service_1.CardsService]);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(12);
	var icon_1 = __webpack_require__(339);
	var cards_service_1 = __webpack_require__(392);
	// TODO: there has got to be a way to make this 1 import statement instead of 2
	var navbar_component_1 = __webpack_require__(396);
	var showcase_component_1 = __webpack_require__(402);
	var AppComponent = (function () {
	    function AppComponent(cardsService) {
	        this.cards = cardsService.cards;
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            template: String(__webpack_require__(411)),
	            styles: [String(__webpack_require__(412))],
	            directives: [
	                icon_1.MD_ICON_DIRECTIVES, navbar_component_1.NavbarComponent, showcase_component_1.ShowcaseComponent
	            ],
	            viewProviders: [icon_1.MdIconRegistry]
	        }), 
	        __metadata('design:paramtypes', [cards_service_1.CardsService])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 392:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(12);
	var CardsService = (function () {
	    function CardsService() {
	        this.cards = [
	            {
	                "number": 0,
	                "color": "blue",
	                "content": __webpack_require__(393)
	            },
	            {
	                "number": 1,
	                "content": __webpack_require__(394)
	            },
	            {
	                "number": 2,
	                "content": __webpack_require__(395)
	            }
	        ];
	    }
	    CardsService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], CardsService);
	    return CardsService;
	}());
	exports.CardsService = CardsService;


/***/ },

/***/ 393:
/***/ function(module, exports) {

	module.exports = "<div class=\"splash1 splash\"><img src=\"/imgs/statesmall.png\"/></div>";

/***/ },

/***/ 394:
/***/ function(module, exports) {

	module.exports = "<div class=\"splash2 splash\"><h1>Card 2</h1></div>";

/***/ },

/***/ 395:
/***/ function(module, exports) {

	module.exports = "<h1>Card3</h1>";

/***/ },

/***/ 396:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(12);
	var icon_registry_1 = __webpack_require__(363);
	var icon_1 = __webpack_require__(339);
	var NavbarComponent = (function () {
	    function NavbarComponent() {
	        this.iconSize = "40px";
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], NavbarComponent.prototype, "iconSize", void 0);
	    NavbarComponent = __decorate([
	        core_1.Component({
	            selector: 'jg-navbar',
	            template: String(__webpack_require__(397)),
	            styles: [String(__webpack_require__(398))],
	            directives: [icon_1.MD_ICON_DIRECTIVES],
	            viewProviders: [icon_registry_1.MdIconRegistry]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NavbarComponent);
	    return NavbarComponent;
	}());
	exports.NavbarComponent = NavbarComponent;


/***/ },

/***/ 397:
/***/ function(module, exports) {

	module.exports = "<div class=\"layout\" [ngStyle]=\"{'line-height': iconSize}\"><div class=\"flex layout layout-align-start-center\"><md-icon [ngStyle]=\"{'font-size': iconSize}\">home</md-icon></div><div class=\"flex layout layout-align-end-center\"><md-icon [ngStyle]=\"{'font-size': iconSize}\">menu</md-icon></div></div>";

/***/ },

/***/ 398:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(399);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(401)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/stylus-loader/index.js!./navbar.component.styl", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/stylus-loader/index.js!./navbar.component.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 399:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(400)();
	// imports


	// module
	exports.push([module.id, "jg-navbar {\n  width: calc(100% - 18px);\n  padding: 9px;\n  color: #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 3000;\n}\njg-navbar md-icon {\n  height: inherit;\n  width: inherit;\n}\n", ""]);

	// exports


/***/ },

/***/ 400:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 401:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(12);
	var icon_registry_1 = __webpack_require__(363);
	var icon_1 = __webpack_require__(339);
	var showcase_card_component_1 = __webpack_require__(403);
	var wheel_service_1 = __webpack_require__(407);
	var ShowcaseComponent = (function () {
	    function ShowcaseComponent(wheelService) {
	        var _this = this;
	        this.currentCard = 0;
	        this.subscription = wheelService.wheelEmitter.subscribe(function (data) {
	            if (data.direction > 0 && _this.currentCard !== (_this.cards.length - 1)) {
	                _this.currentCard++;
	            }
	            else if (data.direction < 0 && _this.currentCard) {
	                _this.currentCard--;
	            }
	        }, this);
	    }
	    ;
	    ShowcaseComponent.prototype.ngOnDestroy = function () {
	        this.subscription.dispose();
	    };
	    ;
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Array)
	    ], ShowcaseComponent.prototype, "cards", void 0);
	    ShowcaseComponent = __decorate([
	        core_1.Component({
	            selector: 'jg-showcase',
	            template: String(__webpack_require__(408)),
	            styles: [String(__webpack_require__(409))],
	            directives: [icon_1.MD_ICON_DIRECTIVES, showcase_card_component_1.ShowcaseCardComponent],
	            viewProviders: [icon_registry_1.MdIconRegistry]
	        }), 
	        __metadata('design:paramtypes', [wheel_service_1.WheelService])
	    ], ShowcaseComponent);
	    return ShowcaseComponent;
	}());
	exports.ShowcaseComponent = ShowcaseComponent;


/***/ },

/***/ 403:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(12);
	var ShowcaseCardComponent = (function () {
	    function ShowcaseCardComponent() {
	        this.card = { headerText: "No Header Text" };
	    }
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], ShowcaseCardComponent.prototype, "card", void 0);
	    ShowcaseCardComponent = __decorate([
	        core_1.Component({
	            selector: 'jg-showcase-card',
	            template: String(__webpack_require__(404)),
	            styles: [String(__webpack_require__(405))]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ShowcaseCardComponent);
	    return ShowcaseCardComponent;
	}());
	exports.ShowcaseCardComponent = ShowcaseCardComponent;


/***/ },

/***/ 404:
/***/ function(module, exports) {

	module.exports = "<div class=\"showcase-card\" [innerHTML]=\"card.content\"></div>";

/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(406);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(401)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/stylus-loader/index.js!./showcase-card.component.styl", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/stylus-loader/index.js!./showcase-card.component.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 406:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(400)();
	// imports


	// module
	exports.push([module.id, "jg-showcase-card {\n  width: 100%;\n  height: 100%;\n  display: block;\n  position: absolute;\n}\njg-showcase-card .splash {\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n}\njg-showcase-card.active {\n  -webkit-transition: top 0.5s; /* Safari */\n  transition: top 0.5s;\n}\njg-showcase-card.awaiting {\n  top: 100%;\n  -webkit-transition: top 0.5s; /* Safari */\n  transition: top 0.5s;\n}\njg-showcase-card.pushed {\n  top: -170%;\n}\n", ""]);

	// exports


/***/ },

/***/ 407:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(12);
	var WheelService = (function () {
	    function WheelService() {
	        var _this = this;
	        this.wheelEmitter = new core_1.EventEmitter();
	        this.prevTime = new Date().getTime();
	        this.reset = true;
	        // TODO: Get this working
	        // var scroller = new FTScroller(window, {});
	        window.addEventListener("wheel", function (e) {
	            var curTime = new Date().getTime();
	            if (_this.prevTime) {
	                var timeDiff = curTime - _this.prevTime;
	                if (timeDiff > 1000) {
	                    if (e.deltaY === 0) {
	                        _this.reset = true;
	                    }
	                    else if (_this.reset && e.deltaY > 10 || e.deltaY < -10) {
	                        var direction_1 = e.deltaY < 0 ? -1 : 1;
	                        _this.wheelEmitter.emit({ direction: direction_1 });
	                        _this.reset = false;
	                    }
	                    var direction = e.deltaY < 0 ? -1 : 1;
	                    _this.wheelEmitter.emit({ direction: direction });
	                    _this.prevTime = curTime;
	                }
	            }
	            else {
	                _this.prevTime = curTime;
	            }
	        });
	    }
	    WheelService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], WheelService);
	    return WheelService;
	}());
	exports.WheelService = WheelService;


/***/ },

/***/ 408:
/***/ function(module, exports) {

	module.exports = "<div class=\"cards layout-column\"><jg-showcase-card *ngFor=\"let card of cards; let i = index\" [card]=\"card\" [number]=\"i\" [class.pushed]=\"i &lt; currentCard\" [class.awaiting]=\"i &gt; currentCard\" [class.active]=\"i === currentCard\"></jg-showcase-card></div>";

/***/ },

/***/ 409:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(410);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(401)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/stylus-loader/index.js!./showcase.component.styl", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/stylus-loader/index.js!./showcase.component.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(400)();
	// imports


	// module
	exports.push([module.id, "jg-showcase {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  font-family: Arial, Helvetica, sans-serif;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n}\njg-showcase .cards {\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n", ""]);

	// exports


/***/ },

/***/ 411:
/***/ function(module, exports) {

	module.exports = "<div class=\"application\"><jg-navbar></jg-navbar><jg-showcase [cards]=\"cards\"></jg-showcase></div>";

/***/ },

/***/ 412:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(413);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(401)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./app.component.styl", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/stylus-loader/index.js!./app.component.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 413:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(400)();
	// imports


	// module
	exports.push([module.id, "body,\nhtml,\nmy-app,\n.application {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\nmy-app {\n  display: block;\n}\nbody {\n  margin: 0px;\n}\n", ""]);

	// exports


/***/ }

});