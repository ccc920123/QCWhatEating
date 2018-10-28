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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(8)
var $app_style$ = __webpack_require__(9)
var $app_script$ = __webpack_require__(10)

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
/* 8 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "demo-page"
  ],
  "children": [
    {
      "type": "text",
      "attr": {
        "value": function () {return 'Hi客官' + (this.hellotitle) + '好!'}
      },
      "classList": [
        "hello"
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "seachspan"
      ],
      "children": [
        {
          "type": "input",
          "attr": {
            "type": "text",
            "maxlength": "16",
            "placeholder": function () {return (this.hellotitle) + '想吃点什么?'}
          },
          "classList": [
            "seacheating"
          ]
        },
        {
          "type": "input",
          "attr": {
            "type": "button",
            "value": "搜一下"
          },
          "classList": [
            "soutu-btn"
          ],
          "events": {
            "click": "routeDetail"
          }
        }
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": "推荐"
      },
      "classList": [
        "tuijian"
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return this.tjnameone}
      },
      "classList": [
        "clstjnameone"
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return this.tjnametwo}
      },
      "classList": [
        "clstjnametwo"
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return this.tjnamethree}
      },
      "classList": [
        "clstjnamethree"
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": "菜谱"
      },
      "classList": [
        "caipu"
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "caipu-type"
      ],
      "children": [
        {
          "type": "stack",
          "attr": {},
          "classList": [
            "caipu-type-one-one"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.imageii01}
              },
              "classList": [
                "caipu-type-one-image"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.caiputypeoneonename}
              },
              "classList": [
                "caipu-type-one-name"
              ]
            }
          ]
        },
        {
          "type": "stack",
          "attr": {},
          "classList": [
            "caipu-type-one-two"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.imageii02}
              },
              "classList": [
                "caipu-type-one-image"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.caiputypeonetwoname}
              },
              "classList": [
                "caipu-type-one-name"
              ]
            }
          ]
        },
        {
          "type": "stack",
          "attr": {},
          "classList": [
            "caipu-type-one-three"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.imageii03}
              },
              "classList": [
                "caipu-type-one-image"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.caiputypeonethreename}
              },
              "classList": [
                "caipu-type-one-name"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "caipu-type"
      ],
      "children": [
        {
          "type": "stack",
          "attr": {},
          "classList": [
            "caipu-type-one-one"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.imageii04}
              },
              "classList": [
                "caipu-type-one-image"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.caiputypetwoonename}
              },
              "classList": [
                "caipu-type-one-name"
              ]
            }
          ]
        },
        {
          "type": "stack",
          "attr": {},
          "classList": [
            "caipu-type-one-two"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.imageii05}
              },
              "classList": [
                "caipu-type-one-image"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.caiputypetwotwoname}
              },
              "classList": [
                "caipu-type-one-name"
              ]
            }
          ]
        },
        {
          "type": "stack",
          "attr": {},
          "classList": [
            "caipu-type-one-three"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.imageii06}
              },
              "classList": [
                "caipu-type-one-image"
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.caiputypetwothreename}
              },
              "classList": [
                "caipu-type-one-name"
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  ".demo-page": {
    "flexDirection": "column"
  },
  ".hello": {
    "fontSize": "40px",
    "color": "rgb(233,81,10)",
    "marginTop": "20px",
    "textAlign": "center"
  },
  ".seachspan": {
    "flexDirection": "row",
    "width": "100%",
    "height": "86px",
    "alignItems": "center",
    "marginTop": "20px",
    "paddingLeft": "10px",
    "paddingRight": "10px"
  },
  ".seacheating": {
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderTopColor": "#FF6347",
    "borderRightColor": "#FF6347",
    "borderBottomColor": "#FF6347",
    "borderLeftColor": "#FF6347",
    "width": "80%",
    "height": "80px",
    "borderTopLeftRadius": "8px",
    "borderBottomLeftRadius": "8px"
  },
  ".soutu-btn": {
    "background": "{\"values\":[{\"type\":\"linearGradient\",\"directions\":[\"45deg\"],\"values\":[\"#FF6347\",\"rgb(245,73,73)\"]}]}",
    "width": "20%",
    "height": "80px",
    "color": "#ffffff",
    "borderBottomRightRadius": "8px",
    "borderTopRightRadius": "8px"
  },
  ".tuijian": {
    "paddingLeft": "10px",
    "fontSize": "30px",
    "textAlign": "left",
    "marginTop": "30px"
  },
  ".clstjnameone": {
    "fontSize": "40px",
    "color": "rgb(252,135,115)",
    "marginTop": "20px",
    "textAlign": "center"
  },
  ".clstjnametwo": {
    "fontSize": "45px",
    "color": "#FF6347",
    "fontWeight": "bold",
    "marginTop": "20px",
    "textAlign": "center"
  },
  ".clstjnamethree": {
    "fontSize": "40px",
    "color": "rgb(252,135,115)",
    "marginTop": "20px",
    "textAlign": "center"
  },
  ".caipu": {
    "fontSize": "30px",
    "textAlign": "left",
    "marginTop": "30px",
    "paddingLeft": "10px"
  },
  ".caipu-type": {
    "width": "100%",
    "flexDirection": "row",
    "paddingLeft": "10px",
    "paddingRight": "10px",
    "marginTop": "50px",
    "alignItems": "center",
    "alignContent": "center"
  },
  ".caipu-type-one-one": {
    "width": "60%",
    "height": "180px",
    "flexDirection": "column",
    "alignItems": "center",
    "alignContent": "center"
  },
  ".caipu-type-one-two": {
    "width": "60%",
    "height": "180px",
    "flexDirection": "column",
    "alignItems": "center",
    "alignContent": "center"
  },
  ".caipu-type-one-three": {
    "width": "60%",
    "height": "180px",
    "alignItems": "center",
    "alignContent": "center",
    "flexDirection": "column"
  },
  ".caipu-type-one-name": {
    "fontSize": "30px",
    "marginTop": "100px",
    "color": "rgb(233,81,10)"
  },
  ".caipu-type-one-image": {
    "borderBottomRightRadius": "8px",
    "borderTopRightRadius": "8px",
    "borderTopLeftRadius": "8px",
    "borderBottomLeftRadius": "8px"
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getRandomArrayElements = getRandomArrayElements;

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.app');

var _system4 = _interopRequireDefault(_system3);

var _system5 = $app_require$('@app-module/system.fetch');

var _system6 = _interopRequireDefault(_system5);

var _system7 = $app_require$('@app-module/system.prompt');

var _system8 = _interopRequireDefault(_system7);

var _system9 = $app_require$('@app-module/system.storage');

var _system10 = _interopRequireDefault(_system9);

var _system11 = $app_require$('@app-module/system.file');

var _system12 = _interopRequireDefault(_system11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  public: {
    hellotitle: '早上',
    tjtag: '',
    tjnameone: '',
    tjnametwo: '',
    tjnamethree: '',
    caiputypeoneonename: '',
    caiputypeonetwoname: '',
    caiputypeonethreename: '',
    caiputypetwoonename: '',
    caiputypetwotwoname: '',
    caiputypetwothreename: '',
    imageii01: '',
    imageii02: '',
    imageii03: '',
    imageii04: '',
    imageii05: '',
    imageii06: ''

  },
  onInit: function onInit() {
    var key = "bdf36bef0d0829a548b8704e4eda6247";
    var mydate = new Date();
    var myhour = mydate.getHours();

    switch (myhour) {
      case 0:
        this.hellotitle = "凌晨";
        break;
      case 1:
        this.hellotitle = "凌晨";
        break;
      case 2:
        this.hellotitle = "凌晨";
        break;
      case 3:
        this.hellotitle = "凌晨";
        break;
      case 4:
        this.hellotitle = "凌晨";
        break;
      case 5:
        this.hellotitle = "清晨";
        this.tjtag = "早餐";
        break;
      case 6:
        this.hellotitle = "清晨";
        this.tjtag = "早餐";
        break;
      case 7:
        this.hellotitle = "早上";
        this.tjtag = "早餐";
        break;
      case 8:
        this.hellotitle = "早上";
        this.tjtag = "早餐";
        break;
      case 9:
        this.hellotitle = "上午";
        break;
      case 10:
        this.hellotitle = "上午";
        this.tjtag = "午餐";
        break;
      case 11:
        this.hellotitle = "上午";
        this.tjtag = "午餐";
        break;
      case 12:
        this.hellotitle = "中午";
        this.tjtag = "午餐";
        break;
      case 13:
        this.hellotitle = "中午";
        this.tjtag = "午餐";
        break;
      case 14:
        this.hellotitle = "下午";
        break;
      case 15:
        this.hellotitle = "下午";
        break;
      case 16:
        this.hellotitle = "下午";
        this.tjtag = "晚餐";
        break;
      case 17:
        this.hellotitle = "下午";
        this.tjtag = "晚餐";
        break;
      case 18:
        this.hellotitle = "傍晚";
        this.tjtag = "晚餐";
        break;
      case 19:
        this.hellotitle = "晚上";
        this.tjtag = "夜宵";
        break;
      case 20:
        this.hellotitle = "晚上";
        this.tjtag = "夜宵";
        break;
      case 21:
        this.hellotitle = "晚上";
        this.tjtag = "夜宵";
        break;
      case 22:
        this.hellotitle = "晚上";
        break;
      case 23:
        this.hellotitle = "晚上";
        break;

    };
    if (this.tjtag == "" || this.tjtag == null || this.tjtag == undefined) {
      this.tjnametwo = "休息一会儿吧";
    }

    var that = this;
    console.log(this.tjtag);

    _system12.default.get({
      uri: 'internal://files/what/caipu.json',
      success: function success(data) {
        _system12.default.readText({
          uri: data.uri,
          success: function success(datas) {

            if (JSON.parse(JSON.parse(datas.text)).result.length == 28) {
              var items = ['0', '1', '2', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27'];
              var round = getRandomArrayElements(items, 6);
              var objcaipu = JSON.parse(JSON.parse(datas.text)).result;
              that.caiputypeoneonename = objcaipu[round[0]].name;
              that.imageii01 = "../Common/MainImage/" + objcaipu[round[0]].parentId + ".jpg";
              that.caiputypeonetwoname = objcaipu[round[1]].name;
              that.imageii02 = "../Common/MainImage/" + objcaipu[round[1]].parentId + ".jpg";
              that.caiputypeonethreename = objcaipu[round[2]].name;
              that.imageii03 = "../Common/MainImage/" + objcaipu[round[3]].parentId + ".jpg";
              that.caiputypetwoonename = objcaipu[round[3]].name;
              that.imageii04 = "../Common/MainImage/" + objcaipu[round[3]].parentId + ".jpg";
              that.caiputypetwotwoname = objcaipu[round[4]].name;
              that.imageii05 = "../Common/MainImage/" + objcaipu[round[4]].parentId + ".jpg";
              that.caiputypetwothreename = objcaipu[round[5]].name;
              that.imageii06 = "../Common/MainImage/" + objcaipu[round[5]].parentId + ".jpg";
            }
          }
        });
      },
      fail: function fail(data, code) {
        _system6.default.fetch({
          url: 'http://apis.juhe.cn/cook/category?key=' + key,
          success: function success(data) {
            console.log(JSON.stringify(data.data));
            this.tsetmsg = JSON.stringify(data.data);

            _system12.default.writeText({
              uri: 'internal://files/what/caipu.json',
              text: this.tsetmsg,
              success: function success() {
                console.log('handling success');
              }
            });
          },
          fail: function fail(data, code) {
            _system8.default.showToast({
              message: '数据请求失败'
            });
          }
        });
      }
    });
  },
  routeDetail: function routeDetail() {
    _system2.default.push({

      uri: '/DemoDetail'

    });
  }
};
function getRandomArrayElements(arr, count) {
  var shuffled = arr.slice(0),
      i = arr.length,
      min = i - count,
      temp,
      index;
  while (i-- > min) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

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