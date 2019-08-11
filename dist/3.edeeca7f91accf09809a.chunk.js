webpackJsonp([3],{

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(34)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(48),
  /* scopeId */
  "data-v-455a66ce",
  /* cssModules */
  null
)
Component.options.__file = "/Users/lilinliu/Documents/lilin/code/blog/src/views/content.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] content.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-455a66ce", Component.options)
  } else {
    hotAPI.reload("data-v-455a66ce", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
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
    name: "content",
    data() {
        return {
            id: this.$route.params.id,
            content: {
                title: '',
                content: ''
            }
        };
    },
    mounted() {
        this.setContent();
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component('main-content', {
            name: 'MainContent',
            template: this.content.content
        });
    },
    methods: {
        setContent() {
            if (this.id === 'changhenge') {
                this.content = {
                    title: '人生长恨水长东——记《长恨歌》',
                    content: '<p class="content">“对面盆里的夹竹桃开花，花草的又一季枯荣拉开了序幕。”《长恨歌》的闭幕带着点此恨绵绵无绝期的味道，只是一群王琦瑶中的一个王琦瑶随花而枯萎。\n' + '一俗人，赏不来文学，随便聊聊感受。\n' + '一个悲剧，却不是大悲大喜，只是如鲠在喉。一部非常女性化的小说，从手法到内容。小格局的故事，注重家长里短，微妙感情，绵里藏刀的对白，暗藏汹涌的勾心斗角，说了典型旧上海传统女人的一生，风雨飘摇却又身不由己，靠着与人斗，也其乐无穷。其实开始觉得王琦瑶是个旁观者，无论繁华落寞，彷佛夕死可矣，后来发现她只是入世太深，点滴生活已是她的全部，喜乐和忧愁皆来于此，活得太过于明白，无论爱情、友情、亲情，都在其间周旋。缺乏智慧的人不如难得糊涂。\n' + '\n' + '好的，其实这就是一个玛丽苏，一群绿茶婊和一群渣男的故事。\n' + '\n' + '摘：这城市里的真心，却唯有到流言里去找的。\n' + '流言的浪漫在于它无拘无束能上能下的想象力。</p>'
                };
            } else if (this.id === 'qipashuo') {
                this.content = {
                    title: '生活就是眼前的苟且',
                    content: '<p class="content">前文提要：作为一个基本不怎么看综艺的girl，《奇葩说》一直追到了第三季。《奇葩说》是一档辩论主题的综艺节目，此次辩论题目是「核电站泄漏，应该让有后东还是无后米去营救？」。以下均为个人观点。\n' + '黄执中主要讲了人类面对伟大的不理性对待，而这种不理性对待让我们倾向于选择无后米。可能是这个论点容易让人误解，被认为是鼓吹伟大的坏处，告诫人们不要作出牺牲。高晓松指责该论点的邪恶，后来强调了执中是个很nice的人。\n' + '其实某个瞬间有点心疼黄执中。首先，最喜欢《奇葩说》的一点，不是因为多么牛逼的辩论技巧，也不是因为一群奇葩逗比笑料满满，而是《奇葩说》包容多元的价值观，每个人都可以发声，或许你不赞同，但你可以接受不同的思想，虽然改变价值观对独立思考的你也不太可能，但可以看到另一个角度的世界。\n' + '黄执中其实是告诉我们一个事实——黑暗存在，而并非鼓吹黑暗，这一论点更应该得到我们的警醒而非指责，更不应该道德绑架。\n' + '不自由的社会宣扬生活多么多么美好，人该怎样怎样善良，一碗鸡汤递给你告诉你必须得干，塑造英雄形象也是造神的过程，这也就是为什么英雄多活于死后的原因；真正自由的社会只告诉你白天与黑夜并存，善与恶都是人性，无论高尚，卑劣，都是你可以充分了解后作出的价值抉择。\n' + '高晓松极具知识分子的人道主义情怀，三观正，知识储备充足，才华横溢且率真，坚守自己的信念，但个人感觉比较偏执，只认定自己的观点，不太接受不同的价值观，也不太接受人性的脆弱与阴暗。大概自己三观不正是对他无感的原因。\n' + '诚然，人生有诗和远方，但生活就是眼前的苟且。\n' + '\n' + '万万没想到，我竟然写了这么正经的东西，最后，还是在其仍然多元化的时候安利一发，附黄执中博客部分节选：\n' + '\n' + '辯論這玩意兒，最有趣的地方，一在觀點，二在攻防。\n' + '觀點，就是「說出一般人想不到的切入點」。\n' + '例如，討論「這是不是一個看臉的社會」時——你說沒錯，因為這個社會，淺薄的人多，就好像面試時，你就有過怎樣怎樣的經驗，遇過怎樣怎樣的不平，或著曾經風聞過某些帥哥美女，佔了怎樣怎樣的便宜。\n' + '這種論調，其實頗無聊。\n' + '聽眾聽了你的上半句，就能猜到下半句。\n' + '以至於，講者只好聲色俱下（乃至聲淚俱下）地，說學逗唱，奮力獻媚……才能讓聽眾們，忍著將一個平凡的故事給聽下去。\n' + '但若你說——因為居移氣、養移體，相由心生，所以「觀面如觀心」。\n' + '就好比，一個會任由外表凶惡粗夯邋遢油膩的人，其性格，就很難會是善諒體貼謹細自律。\n' + '是以所謂美醜，不只是臉蛋長的俊不俊，更包括了神情儀態、顧盼舉止，也包括了修飾有度、清潔整齊。臉，是給別人看的，故見其如何經營門面，便可顯示在這個人的心中，他能夠（且願意）怎樣去看待人與人之間的關係。\n' + '此時，有意思的觀點，就像一則有意思的故事……我們猜到了開頭，卻猜不到結局。\n' + '以至於你慢慢講、淡淡說，聽來自有驚心動魄。\n' + '人們愛聽故事，因為人們愛懸疑、愛起伏，喜歡反常合道、無理而妙。\n' + '辯論，則是最容易創造動人觀點的場合。\n' + '而攻防，就是「在對方的觀點上跳舞」。\n' + '對方說，為愛要勇敢——即使是好朋友的另一半，愛上了，也要追。\n' + '你說這樣不好，沒義氣。\n' + '此時，你們兩邊的觀點，就是錯身而過，後會無期。\n' + '他說城門樓，你說熱炕頭，他說大馬猴，你說後車軸……這種辯論，辯個一百年也沒意思。\n' + '但若你說——因為餓、因為想吃，所以即便是別人碗裡的食物，也敢撲上去分一口。\n' + '這才不叫勇敢。\n' + '為了自身的欲望奮不顧身，這，叫貪。\n' + '是那種「人為財死，鳥為食亡」的貪。\n' + '愛情，如果只會讓人更貪婪，不能讓人更高貴……那麼，又有什麼好被歌頌的呢？\n' + '精彩的辯論，就像觀點的特技表演，球拋過去，接住，再拋回，越拋越高，越險越妙。\n' + '到了絕處，居然還不落地，另有騰挪花巧。\n' + '\n' + '「老師，你會不會覺得這個節目，會讓辯論變得娛樂化了？」\n' + '還記得培訓期間，有選手在私底下，很正經地問了我這個問題。\n' + '他打過辯論，難免會有這種擔心。\n' + '「唉，辯論娛樂化的意思，是大家都已經在打辯論了，才會怕那種把辯論越打越膚淺的現象。」\n' + '「可當前的問題，是大家都在看娛樂節目，根本沒機會領教辯論的趣味。」\n' + '「所以，請別自抬身價——」\n' + '「咱們現在幹的，哪是什麼辯論娛樂化？而是在努力，想要將『娛樂辯論化』啊！」</p>'
                };
            }
        }
    }
});

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Row', {
    staticClass: "title-row"
  }, [_c('Col', {
    attrs: {
      "span": "12",
      "offset": "6"
    }
  }, [_c('h1', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.content.title))])])], 1), _vm._v(" "), _c('Row', [_c('Col', {
    attrs: {
      "span": "12",
      "offset": "6"
    }
  }, [_c('main-content')], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-455a66ce", module.exports)
  }
}

/***/ })

});