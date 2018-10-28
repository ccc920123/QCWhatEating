(function(){
  
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(12)
var $app_style$ = __webpack_require__(13)
var $app_script$ = __webpack_require__(14)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  "type": "list",
  "attr": {},
  "classList": [
    "home-page"
  ],
  "events": {
    "scrollbottom": "loadMoreData"
  },
  "children": [
    {
      "type": "block",
      "attr": {},
      "repeat": function () {return this.articleList},
      "children": [
        {
          "type": "list-item",
          "attr": {
            "type": "article"
          },
          "classList": [
            "article-item"
          ],
          "events": {
            "click": function (evt) {this.openArticle(this.$item.link,this.$item.projectLink,this.$item.title,evt)},
            "longpress": function (evt) {this.shareLink(this.$item.link,evt)}
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "style": {
                "display": "flex"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "show": function () {return this.$item.fresh},
                    "value": "新"
                  },
                  "classList": [
                    "tag"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "这是一个url"
                  },
                  "classList": [
                    "text-title"
                  ],
                  "style": {
                    "flex": 1
                  }
                },
                {
                  "type": "image",
                  "attr": {
                    "src": "../Common/logo.png"
                  },
                  "style": {
                    "width": "52px",
                    "height": "52px"
                  },
                  "events": {
                    "click": function (evt) {this.clickCollect(this.$item,evt)}
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "article-tip"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return '分类: ' + (this.$item.superChapterName) + '/' + (this.$item.chapterName)}
                  },
                  "classList": [
                    "tip"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "article-tip"
              ],
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return '作者: ' + (this.$item.author)}
                  },
                  "classList": [
                    "tip"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.$item.niceDate}
                  },
                  "classList": [
                    "time"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
  ".home-page": {
    "flexDirection": "row",
    "columns": 1
  },
  ".article-item": {
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "display": "flex",
    "flexDirection": "column",
    "borderBottomWidth": "1px",
    "borderBottomColor": "#eeeeee",
    "columnSpan": 3
  },
  ".article-item .text-title": {
    "fontSize": "30px",
    "color": "#2e3135",
    "textOverflow": "ellipsis",
    "marginBottom": "5px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "article-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text-title"
        }
      ]
    }
  },
  ".article-item .article-tip": {
    "display": "flex",
    "flexDirection": "row",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "article-item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "article-tip"
        }
      ]
    }
  },
  ".article-tip .tip": {
    "fontSize": "26px",
    "color": "#999999",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "article-tip"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "tip"
        }
      ]
    }
  },
  ".article-tip .time": {
    "fontSize": "26px",
    "color": "#999999",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "article-tip"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "time"
        }
      ]
    }
  },
  ".time": {
    "flex": 1,
    "textAlign": "right"
  },
  ".tag": {
    "fontSize": "22px",
    "color": "#FF0000",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderTopColor": "#FF0000",
    "borderRightColor": "#FF0000",
    "borderBottomColor": "#FF0000",
    "borderLeftColor": "#FF0000",
    "marginRight": "10px",
    "paddingTop": "2px",
    "paddingRight": "2px",
    "paddingBottom": "2px",
    "paddingLeft": "2px",
    "height": "32px"
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
  private: {
    text: '欢迎打开详情页'
  },
  onMenuPress: function onMenuPress() {
    this.$app.$def.showMenu();
  }
};


var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = { access: acc };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ })
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map