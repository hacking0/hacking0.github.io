webpackJsonp([2],{

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(36)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(50),
  /* scopeId */
  "data-v-f28b9dce",
  /* cssModules */
  null
)
Component.options.__file = "/Users/lilinliu/Documents/lilin/code/blog/src/views/list.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f28b9dce", Component.options)
  } else {
    hotAPI.reload("data-v-f28b9dce", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "list",
    data() {
        return {
            id: this.$route.params.id,
            brief: []
        };
    },
    mounted() {
        this.setBrief();
    },
    methods: {
        setBrief() {
            if (this.id === 'literatureMain') {
                this.brief = [{
                    url: '/content/changhenge',
                    title: '人生长恨水长东——记《长恨歌》',
                    brief: '这城市里的真心，却唯有到流言里去找的。流言的浪漫在于它无拘无束能上能下的想象力。',
                    tags: [{ name: '文学' }],
                    time: '2019-08-11 01:10:00'
                }];
            } else if (this.id === 'notesDaily') {
                this.brief = [{
                    url: '/content/qipashuo',
                    title: '生活就是眼前的苟且',
                    brief: '诚然，人生有诗和远方，但生活就是眼前的苟且。',
                    tags: [{ name: '杂记' }, { name: '奇葩说' }],
                    time: '2019-08-11 01:14:00'
                }];
            }
        }
    }
});

/***/ }),

/***/ 36:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.brief), function(item) {
    return _c('Row', [_c('Col', {
      attrs: {
        "span": "12",
        "offset": "6"
      }
    }, [_c('Card', {
      staticClass: "brief-card",
      attrs: {
        "bordered": false,
        "dis-hover": ""
      }
    }, [_c('p', {
      attrs: {
        "slot": "title"
      },
      slot: "title"
    }, [_c('router-link', {
      attrs: {
        "to": item.url
      }
    }, [_vm._v(_vm._s(item.title))])], 1), _vm._v(" "), _c('p', {
      staticClass: "brief"
    }, [_vm._v(_vm._s(item.brief))]), _vm._v(" "), _c('p', [_c('Row', {
      staticStyle: {
        "padding-top": "10px"
      }
    }, [_c('Col', {
      attrs: {
        "span": "12"
      }
    }, _vm._l((item.tags), function(tag) {
      return _c('Tag', [_vm._v(_vm._s(tag.name))])
    }), 1), _vm._v(" "), _c('Col', {
      staticClass: "brief-time",
      attrs: {
        "span": "12"
      }
    }, [_vm._v("\n                            " + _vm._s(item.time) + "\n                        ")])], 1)], 1)])], 1)], 1)
  }), 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-f28b9dce", module.exports)
  }
}

/***/ })

});