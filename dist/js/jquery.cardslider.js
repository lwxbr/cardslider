/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/jquery.cardslider.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/jquery.cardslider.js":
/*!*************************************!*\
  !*** ./src/js/jquery.cardslider.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("jQuery(function($){\r\n\r\n\t\"use strict\";\r\n\r\n\tvar pluginName = \"cardslider\",\r\n\t\tdefaults = {\r\n\t\t\tkeys: {\r\n\t\t\t\tnext: 38,\r\n\t\t\t\tprev: 40\r\n\t\t\t},\r\n\t\t\tdirection: 'down',\r\n\t\t\tnav: true,\r\n\t\t\tswipe: false,\r\n\t\t\tdots: false,\r\n\t\t\tloop: false,\r\n\t\t\tbeforeCardChange: null,\r\n\t\t\tafterCardChange: null,\r\n\t\t\tshowCards: 0\r\n\t\t};\r\n\r\n\tfunction Plugin(element, options) {\r\n\t\tthis.element = element;\r\n\r\n\t\toptions.showCards -= 1;\r\n\r\n\t\tthis.settings = $.extend({}, defaults, options);\r\n\t\tthis._defaults = defaults;\r\n\t\tthis._name = pluginName;\r\n\t\tthis._cards = [];\r\n\t\tthis._activeCard = null;\r\n\t\tthis._directionClass = 'cardslider--direction-' + this.settings.direction;\r\n\t\tthis._animationClassBack = 'cardslider--sortback-' + this.settings.direction;\r\n\t\tthis._animationClassFront = 'cardslider--sortfront-' + this.settings.direction;\r\n\t\tthis._dotnav = null;\r\n\t\tthis._directionnav = null;\r\n\t\tthis._buttonNext = null;\r\n\t\tthis._buttonPrev = null;\r\n\t\tthis._xDown = null;\r\n\t\tthis._yDown = null;\r\n\t\tthis._swipeThreshold = 100;\r\n\r\n\t\tthis.init();\r\n\t}\r\n\r\n\t$.extend(Plugin.prototype, {\r\n\t\tinit: function () {\r\n\r\n\t\t\tthis.initCards();\r\n\r\n\t\t\tif (this.settings.nav) {\r\n\t\t\t\tthis.initNav();\r\n\t\t\t}\r\n\r\n\t\t\tif (this.settings.dots) {\r\n\t\t\t\tthis.initDots();\r\n\t\t\t}\r\n\r\n\t\t\tif (this.settings.swipe) {\r\n\t\t\t\tthis.initSwipe();\r\n\t\t\t}\r\n\r\n\t\t\tif (this.settings.keys !== false) {\r\n\t\t\t\twindow.addEventListener('keydown', this.keyNav.bind(this));\r\n\t\t\t}\r\n\r\n\t\t\tthis.changeCardTo(0);\r\n\t\t},\r\n\t\tinitCards: function () {\r\n\r\n\t\t\tthis.element.className = this.element.className + ' cardslider ' + this._directionClass;\r\n\r\n\t\t\tvar list = this.element.querySelector('ul');\r\n\t\t\tif (!list) return false;\r\n\r\n\t\t\tlist.classList.add('cardslider__cards');\r\n\r\n\t\t\tvar rawcards = list.children;\r\n\t\t\tfor (var i = 0; i < rawcards.length; i++) {\r\n\t\t\t\tvar rawcard = rawcards[i];\r\n\r\n\t\t\t\tvar hidden = this.settings.showCards != 0 && i > this.settings.showCards;\r\n\r\n\t\t\t\tvar card = {\r\n\t\t\t\t\telem: rawcard,\r\n\t\t\t\t\tactive: i === 0 ? true : false,\r\n\t\t\t\t\tindex: i,\r\n\t\t\t\t\tcardClass: 'cardslider__card--index-' + i\r\n\t\t\t\t};\r\n\r\n\t\t\t\tcard.elem.className = card.elem.className +\r\n\t\t\t\t\t' cardslider__card cardslider__card--transitions ' +\r\n\t\t\t\t\tcard.cardClass +\r\n\t\t\t\t\t(hidden && ' cardslider__card--invisible');\r\n\r\n\t\t\t\tcard.elem.style.zIndex = rawcards.length - i;\r\n\r\n\t\t\t\tthis._cards.push(card);\r\n\t\t\t}\r\n\t\t},\r\n\t\tinitNav: function () {\r\n\t\t\tthis._directionnav = document.createElement('div');\r\n\t\t\tthis._directionnav.className = 'cardslider__direction-nav';\r\n\r\n\t\t\tthis._buttonNext = document.createElement('button');\r\n\t\t\tthis._buttonNext.title = 'next';\r\n\t\t\tthis._buttonNext.className = 'cardslider__nav-next';\r\n\t\t\tthis._buttonNext.innerHTML = 'Next';\r\n\t\t\tthis._buttonNext.addEventListener('click', this.nextCard.bind(this));\r\n\r\n\t\t\tthis._buttonPrev = document.createElement('button');\r\n\t\t\tthis._buttonPrev.title = 'previous';\r\n\t\t\tthis._buttonPrev.className = 'cardslider__nav-prev';\r\n\t\t\tthis._buttonPrev.innerHTML = 'Prev';\r\n\t\t\tthis._buttonPrev.addEventListener('click', this.prevCard.bind(this));\r\n\r\n\t\t\tthis._directionnav.appendChild(this._buttonNext);\r\n\t\t\tthis._directionnav.appendChild(this._buttonPrev);\r\n\t\t\tthis.element.appendChild(this._directionnav);\r\n\t\t},\r\n\t\tinitDots: function () {\r\n\t\t\tvar cardslider = this;\r\n\t\t\tthis._dotnav = document.createElement('ul');\r\n\t\t\tthis._dotnav.className = 'cardslider__dots-nav';\r\n\r\n\t\t\tfor (var i = 0; i < this._cards.length; i++) {\r\n\t\t\t\tvar dot = document.createElement('button');\r\n\t\t\t\tdot.className = 'cardslider__dot-btn';\r\n\t\t\t\tdot.setAttribute('data-slide', i);\r\n\t\t\t\tdot.setAttribute('type', 'button');\r\n\r\n\t\t\t\tdot.addEventListener('click', function (e) {\r\n\t\t\t\t\tcardslider.changeCardTo(parseInt(e.target.getAttribute('data-slide')));\r\n\t\t\t\t});\r\n\r\n\t\t\t\tvar listItem = document.createElement('li');\r\n\t\t\t\tlistItem.className = 'cardslider__dot';\r\n\t\t\t\tlistItem.appendChild(dot)\r\n\t\t\t\tthis._dotnav.appendChild(listItem);\r\n\t\t\t}\r\n\r\n\t\t\tthis.element.appendChild(this._dotnav);\r\n\t\t},\r\n\t\tinitSwipe: function () {\r\n\t\t\t// Handle Touch Events\r\n\t\t\tthis.element.addEventListener('touchstart', this.handleTouchStart.bind(this), {\r\n\t\t\t\tpassive: true\r\n\t\t\t});\r\n\t\t\tthis.element.addEventListener('touchmove', this.handleTouchEnd.bind(this), {\r\n\t\t\t\tpassive: true\r\n\t\t\t});\r\n\r\n\t\t\t// Handle Mouse Events\r\n\t\t\tthis.element.addEventListener('mousedown', this.handleTouchStart.bind(this), {\r\n\t\t\t\tpassive: true\r\n\t\t\t});\r\n\t\t\tthis.element.addEventListener('mousemove', this.handleTouchEnd.bind(this), {\r\n\t\t\t\tpassive: true\r\n\t\t\t});\r\n\t\t},\r\n\t\thandleTouchStart: function (e) {\r\n\t\t\tthis._xDown = e.clientX || e.touches[0].clientX;\r\n\t\t\tthis._yDown = e.clientY || e.touches[0].clientY;\r\n\t\t},\r\n\t\thandleTouchEnd: function (e) {\r\n\t\t\tif (!this._xDown || !this._yDown) {\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\t\t\tvar next = false;\r\n\t\t\tvar prev = false;\r\n\r\n\t\t\tvar xUp = e.clientX || e.touches[0].clientX;\r\n\t\t\tvar yUp = e.clientY || e.touches[0].clientY;\r\n\r\n\t\t\tvar xDiff = this._xDown - xUp;\r\n\t\t\tvar yDiff = this._yDown - yUp;\r\n\r\n\t\t\tif (Math.abs(xDiff) > Math.abs(yDiff)) {\r\n\r\n\t\t\t\tif (Math.abs(xDiff) < this._swipeThreshold) {\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (xDiff > 0) { // left swipe\r\n\t\t\t\t\tif (this.settings.direction == 'left') {\r\n\t\t\t\t\t\tnext = true;\r\n\t\t\t\t\t} else if (this.settings.direction == 'right') {\r\n\t\t\t\t\t\tprev = true;\r\n\t\t\t\t\t}\r\n\t\t\t\t} else { //right swipe\r\n\t\t\t\t\tif (this.settings.direction == 'right') {\r\n\t\t\t\t\t\tnext = true;\r\n\t\t\t\t\t} else if (this.settings.direction == 'left') {\r\n\t\t\t\t\t\tprev = true;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t} else {\r\n\r\n\t\t\t\tif (Math.abs(yDiff) < this._swipeThreshold) {\r\n\t\t\t\t\treturn;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (yDiff > 0) { //up swipe\r\n\t\t\t\t\tif (this.settings.direction == 'up') {\r\n\t\t\t\t\t\tnext = true;\r\n\t\t\t\t\t} else if (this.settings.direction == 'down') {\r\n\t\t\t\t\t\tprev = true;\r\n\t\t\t\t\t}\r\n\t\t\t\t} else { //down swipe\r\n\t\t\t\t\tif (this.settings.direction == 'down') {\r\n\t\t\t\t\t\tnext = true;\r\n\t\t\t\t\t} else if (this.settings.direction == 'up') {\r\n\t\t\t\t\t\tprev = true;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tif (next) {\r\n\t\t\t\tthis.nextCard();\r\n\t\t\t} else if (prev) {\r\n\t\t\t\tthis.prevCard();\r\n\t\t\t}\r\n\r\n\t\t\tthis._xDown = null;\r\n\t\t\tthis._yDown = null;\r\n\t\t},\r\n\t\tkeyNav: function (e) {\r\n\t\t\tif (e.keyCode == this.settings.keys.next) {\r\n\t\t\t\te.preventDefault();\r\n\t\t\t\tthis.nextCard();\r\n\t\t\t} else if (e.keyCode == this.settings.keys.prev) {\r\n\t\t\t\te.preventDefault();\r\n\t\t\t\tthis.prevCard();\r\n\t\t\t}\r\n\t\t},\r\n\t\tnextCard: function () {\r\n\t\t\tif (this._activeCard.index + 1 < this._cards.length) {\r\n\t\t\t\tthis.changeCardTo(this._activeCard.index + 1);\r\n\t\t\t} else if (this.settings.loop) {\r\n\t\t\t\tthis.changeCardTo(0, true);\r\n\t\t\t}\r\n\t\t},\r\n\t\tprevCard: function () {\r\n\t\t\tif (this._activeCard.index - 1 >= 0) {\r\n\t\t\t\tthis.changeCardTo(this._activeCard.index - 1);\r\n\t\t\t} else if (this.settings.loop) {\r\n\t\t\t\tthis.changeCardTo((this._cards.length - 1) * -1);\r\n\t\t\t}\r\n\t\t},\r\n\t\tchangeCardTo: function (index, resetZ) {\r\n\r\n\t\t\t// set param default\r\n\t\t\tresetZ = typeof resetZ != 'undefined' ? resetZ : false;\r\n\r\n\t\t\t// normalize indeX\r\n\t\t\tif (typeof index == 'string') {\r\n\t\t\t\tif (index == 'first') {\r\n\t\t\t\t\tindex = 0;\r\n\t\t\t\t} else {\r\n\t\t\t\t\tindex = this._cards.length - 1;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tvar indexAbs = Math.abs(index);\r\n\r\n\t\t\t// set variables for easy access\r\n\t\t\tvar oldCard = this._activeCard;\r\n\t\t\tvar newCard = this._cards[indexAbs];\r\n\r\n\t\t\t// remove left over animation classes\r\n\t\t\tif (this.settings.loop) {\r\n\t\t\t\tvar that = this;\r\n\t\t\t\tthis._cards.forEach(function (card) {\r\n\t\t\t\t\tcard.elem.classList.remove(that._animationClassFront);\r\n\t\t\t\t\tcard.elem.classList.remove(that._animationClassBack);\r\n\t\t\t\t\tcard.elem.classList.add('cardslider__card--transitions');\r\n\t\t\t\t});\r\n\t\t\t}\r\n\r\n\t\t\t// fire before callback\r\n\t\t\tif (typeof this.settings.beforeCardChange == 'function') {\r\n\t\t\t\tthis.settings.beforeCardChange(oldCard.index);\r\n\t\t\t}\r\n\r\n\t\t\tif (oldCard && (index > oldCard.index || (index < oldCard.index && resetZ)) || !oldCard && index > 0) {\r\n\t\t\t\tfor (var i = 0; i < indexAbs; i++) {\r\n\r\n\t\t\t\t\tthis._cards[i].elem.setAttribute('aria-hidden', true);\r\n\r\n\t\t\t\t\tif (!this.settings.loop) {\r\n\t\t\t\t\t\tthis._cards[i].elem.classList.add('cardslider__card--out');\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\tif (this.settings.loop && oldCard != null) {\r\n\t\t\t\t\toldCard.elem.classList.remove('cardslider__card--transitions');\r\n\t\t\t\t\toldCard.elem.classList.add(this._animationClassBack);\r\n\t\t\t\t}\r\n\t\t\t} else if (oldCard) {\r\n\t\t\t\tif (this.settings.loop && oldCard) {\r\n\t\t\t\t\tthis._cards[indexAbs].elem.classList.remove('cardslider__card--transitions');\r\n\t\t\t\t\tthis._cards[indexAbs].elem.classList.add(this._animationClassFront);\r\n\t\t\t\t}\r\n\t\t\t\tthis._cards.forEach(function (card) {\r\n\t\t\t\t\tcard.elem.classList.add('cardslider__card--out');\r\n\t\t\t\t\tcard.elem.setAttribute('aria-hidden', true);\r\n\t\t\t\t});\r\n\t\t\t}\r\n\r\n\t\t\t// make the front most card to the active one\r\n\t\t\tthis._activeCard = newCard;\r\n\t\t\tthis._activeCard.elem.setAttribute('aria-hidden', false);\r\n\r\n\t\t\t// reorder all index classes to push the cards to their new position\r\n\t\t\tthis.reorderIndices(indexAbs);\r\n\r\n\t\t\t// change the dot nav\r\n\t\t\tif (this.settings.dots) {\r\n\t\t\t\tthis.changeDots(indexAbs);\r\n\t\t\t}\r\n\r\n\t\t\t// fire after callback\r\n\t\t\tif (typeof this.settings.afterCardChange == 'function') {\r\n\t\t\t\tthis.settings.afterCardChange(indexAbs);\r\n\t\t\t}\r\n\r\n\t\t\treturn this;\r\n\t\t},\r\n\t\tchangeDots: function (index) {\r\n\t\t\tvar active = this._dotnav.querySelector('.cardslider__dot--active');\r\n\t\t\tif (active) {\r\n\t\t\t\tactive.classList.remove('cardslider__dot--active');\r\n\t\t\t}\r\n\r\n\t\t\tvar next = this._dotnav.querySelector('.cardslider__dot:nth-child(' + (index + 1) + ')');\r\n\t\t\tif (next) {\r\n\t\t\t\tnext.classList.add('cardslider__dot--active');\r\n\t\t\t}\r\n\t\t},\r\n\t\treorderIndices: function (index) {\r\n\t\t\tvar that = this;\r\n\t\t\tvar cardLen = that._cards.length - 1;\r\n\t\t\tthis._cards.forEach(function (card, i) {\r\n\t\t\t\tif (i - index >= 0) {\r\n\t\t\t\t\tvar cardClasses = card.elem.className;\r\n\t\t\t\t\tcardClasses = cardClasses.replace(/cardslider__card--index-\\d|cardslider__card--out/g, '');\r\n\t\t\t\t\tcard.elem.className = cardClasses.replace('  ', ' ').trim();\r\n\r\n\t\t\t\t\tvar newCardClass = that._cards[i - index].cardClass;\r\n\r\n\t\t\t\t\tcard.elem.classList.add(newCardClass);\r\n\r\n\t\t\t\t\tvar parsed = parseInt(newCardClass.slice(-1));\r\n\r\n\t\t\t\t\tif (parsed > that.settings.showCards) {\r\n\t\t\t\t\t\tcard.elem.classList.add('cardslider__card--invisible');\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tcard.elem.classList.remove('cardslider__card--invisible');\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tif (that.settings.loop) {\r\n\t\t\t\t\t\tthat.setZindex(card, cardLen - that._cards[i - index].index);\r\n\t\t\t\t\t}\r\n\t\t\t\t} else if (that.settings.loop) {\r\n\t\t\t\t\tvar cardClasses = card.elem.className;\r\n\t\t\t\t\tcardClasses = cardClasses.replace(/cardslider__card--index-\\d|cardslider__card--out/g, '');\r\n\t\t\t\t\tcard.elem.className = cardClasses.replace('  ', ' ').trim();\r\n\t\t\t\t\tvar newCardClass = that._cards[that._cards.length - (index - i)].cardClass;\r\n\t\t\t\t\tcard.elem.classList.add(newCardClass);\r\n\r\n\t\t\t\t\tvar parsed = parseInt(newCardClass.slice(-1));\r\n\r\n\t\t\t\t\tif (parsed > that.settings.showCards) {\r\n\t\t\t\t\t\tcard.elem.classList.add('cardslider__card--invisible');\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tcard.elem.classList.remove('cardslider__card--invisible');\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tthat.setZindex(card, cardLen - that._cards[that._cards.length - (index - i)].index);\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t},\r\n\t\tsetZindex: function (elem, index) {\r\n\t\t\telem.elem.style.zIndex = index;\r\n\t\t},\r\n\t\tdestroy: function () {\r\n\t\t\tvar list = this.element.querySelector('.cardslider__cards');\r\n\t\t\tthis.element.className = this.element.className.replace(this.element.className.match(/card.*/g)[0], '');\r\n\r\n\t\t\tlist.classList.remove('cardslider__cards');\r\n\r\n\t\t\tthis._cards.forEach(function (card) {\r\n\t\t\t\tcard.elem.className = card.elem.className.replace(card.elem.className.match(/card.*/g)[0], '');\r\n\t\t\t\tcard.elem.removeAttribute('style');\r\n\t\t\t\tcard.elem.removeAttribute('aria-hidden');\r\n\t\t\t});\r\n\r\n\t\t\tif (this._dotnav) {\r\n\t\t\t\tthis._dotnav.parentElement.removeChild(this._dotnav);\r\n\t\t\t\tthis._dotnav = null;\r\n\t\t\t}\r\n\r\n\t\t\tif (this._directionnav) {\r\n\t\t\t\tthis._directionnav.parentElement.removeChild(this._directionnav);\r\n\t\t\t\tthis._directionnav = null;\r\n\t\t\t}\r\n\r\n\t\t\tthis._cards = [];\r\n\t\t\tthis._activeCard = null;\r\n\r\n\t\t\tif (this.settings.keys !== false) {\r\n\t\t\t\twindow.removeEventListener('keydown', this.keyNav);\r\n\t\t\t}\r\n\r\n\t\t\tif (this._buttonNext) {\r\n\t\t\t\tthis._buttonNext.removeEventListener('cardslider', this.nextCard);\r\n\t\t\t}\r\n\r\n\t\t\tif (this._buttonPrev) {\r\n\t\t\t\tthis._buttonPrev.removeEventListener('cardslider', this.prevCard);\r\n\t\t\t}\r\n\r\n\t\t\treturn this;\r\n\t\t}\r\n\t});\r\n\r\n\t$.fn[pluginName] = function (options = {}) {\r\n\r\n\t\treturn this.each(function () {\r\n\t\t\tif (!$.data(this, pluginName)) {\r\n\t\t\t\t$.data(this, pluginName, new Plugin(this, options));\r\n\t\t\t}\r\n\t\t});\r\n\t};\r\n});\n\n//# sourceURL=webpack:///./src/js/jquery.cardslider.js?");

/***/ })

/******/ });