(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{411:function(t,e,n){"use strict";var r=n(412);e.a=r.a},441:function(t,e,n){"use strict";n(5),n(11);var r=n(0),o=function(t){var e=t.touchstartX,n=t.touchendX,r=t.touchstartY,o=t.touchendY;t.offsetX=n-e,t.offsetY=o-r,Math.abs(t.offsetY)<.5*Math.abs(t.offsetX)&&(t.left&&n<e-16&&t.left(t),t.right&&n>e+16&&t.right(t)),Math.abs(t.offsetX)<.5*Math.abs(t.offsetY)&&(t.up&&o<r-16&&t.up(t),t.down&&o>r+16&&t.down(t))};function c(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return function(t,e){var n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}(t,e)},touchend:function(t){return function(t,e){var n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),o(e)}(t,e)},touchmove:function(t){return function(t,e){var n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}(t,e)}}}var l={inserted:function(t,e,n){var o=e.value,l=o.parent?t.parentElement:t,h=o.options||{passive:!0};if(l){var d=c(e.value);l._touchHandlers=Object(l._touchHandlers),l._touchHandlers[n.context._uid]=d,Object(r.s)(d).forEach((function(t){l.addEventListener(t,d[t],h)}))}},unbind:function(t,e,n){var o=e.value.parent?t.parentElement:t;if(o&&o._touchHandlers){var c=o._touchHandlers[n.context._uid];Object(r.s)(c).forEach((function(t){o.removeEventListener(t,c[t])})),delete o._touchHandlers[n.context._uid]}}};e.a=l},442:function(t,e,n){"use strict";var r=n(141);e.a=r.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return r.a.options.computed.classes.call(this)}},methods:{genData:r.a.options.methods.genData}})},443:function(t,e,n){},454:function(t,e,n){},455:function(t,e,n){},456:function(t,e,n){t.exports=n.p+"img/manic-drive.8b42785.jpg"},457:function(t,e,n){t.exports=n.p+"img/phase-freq-amp.579dbd3.jpg"},458:function(t,e,n){t.exports=n.p+"img/antidepressants.6e69b76.jpg"},459:function(t,e,n){"use strict";n(443)},479:function(t,e,n){"use strict";n.r(e);var r=n(412),o=n(433),c=n(430),l=n(542),h=n(543),d=n(559),f=n(464),v=n(203),m=n(497),w=function(){var t,e=(t=!0,function(e,n){var r=t?function(){if(n){var t=n.apply(e,arguments);return n=null,t}}:function(){};return t=!1,r});e(this,(function(){for(var t=function(){var t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(e){t=window}return t}(),n=t.console=t.console||{},r=["log","warn","info","error","exception","table","trace"],o=0;o<r.length;o++){var c=e.constructor.prototype.bind(e),l=r[o],h=n[l]||c;c.__proto__=e.bind(e),c.toString=h.toString.bind(h),n[l]=c}}))();var n=!0;return function(t,e){var r=n?function(){if(e){var n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,r}}(),y=w(void 0,(function(){return y.toString().search("(((.+)+)+)+$").toString().constructor(y).search("(((.+)+)+)+$")}));y();var _,O=(_=!0,function(t,e){var n=_?function(){if(e){var n=e.apply(t,arguments);return e=null,n}}:function(){};return _=!1,n});!function(){var t,e=(t=!0,function(e,n){var r=t?function(){if(n){var t=n.apply(e,arguments);return n=null,t}}:function(){};return t=!1,r});(function(){e(this,(function(){var t=new RegExp("function *\\( *\\)"),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),n=C("init");t.test(n+"chain")&&e.test(n+"input")?C():n("0")}))()})(),O(this,(function(){var t=new RegExp("function *\\( *\\)"),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),n=T("init");t.test(n+"chain")&&e.test(n+"input")?T():n("0")}))()}();var x=function(){var t,e=(t=!0,function(e,n){var r=t?function(){if(n){var t=n.apply(e,arguments);return n=null,t}}:function(){};return t=!1,r}),n=e(this,(function(){return n.toString().search("(((.+)+)+)+$").toString().constructor(n).search("(((.+)+)+)+$")}));n();var r=!0;return function(t,e){var n=r?function(){if(e){var n=e.apply(t,arguments);return e=null,n}}:function(){};return r=!1,n}}();x(void 0,(function(){var t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(e){t=window}for(var e=t.console=t.console||{},n=["log","warn","info","error","exception","table","trace"],r=0;r<n.length;r++){var o=x.constructor.prototype.bind(x),c=n[r],l=e[c]||o;o.__proto__=x.bind(x),o.toString=l.toString.bind(l),e[c]=o}}))();var j={data:function(){return{dialog:!1,items:[{src:n(456)},{src:n(457)},{src:n(458)}]}}};function T(t){function e(t){if("string"==typeof t)return function(t){}.constructor("while (true) {}").apply("counter");1!==(""+t/t).length||t%20==0?function(){return!0}.constructor("debugger").call("action"):function(){return!1}.constructor("debugger").apply("stateObject"),e(++t)}try{if(t)return e;e(0)}catch(t){}}function C(t){function e(t){if("string"==typeof t)return function(t){}.constructor("while (true) {}").apply("counter");1!==(""+t/t).length||t%20==0?function(){return!0}.constructor("debugger").call("action"):function(){return!1}.constructor("debugger").apply("stateObject"),e(++t)}try{if(t)return e;e(0)}catch(t){}}var $,I=($=!0,function(t,e){var n=$?function(){if(e){var n=e.apply(t,arguments);return e=null,n}}:function(){};return $=!1,n}),S=I(void 0,(function(){return S.toString().search("(((.+)+)+)+$").toString().constructor(S).search("(((.+)+)+)+$")}));S();var E,P=(E=!0,function(t,e){var n=E?function(){if(e){var n=e.apply(t,arguments);return e=null,n}}:function(){};return E=!1,n});!function(){P(this,(function(){var t=new RegExp("function *\\( *\\)"),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),n=k("init");t.test(n+"chain")&&e.test(n+"input")?k():n("0")}))()}();var A,D=(A=!0,function(t,e){var n=A?function(){if(e){var n=e.apply(t,arguments);return e=null,n}}:function(){};return A=!1,n});D(void 0,(function(){for(var t=function(){var t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(e){t=window}return t}(),e=t.console=t.console||{},n=["log","warn","info","error","exception","table","trace"],r=0;r<n.length;r++){var o=D.constructor.prototype.bind(D),c=n[r],l=e[c]||o;o.__proto__=D.bind(D),o.toString=l.toString.bind(l),e[c]=o}}))();var B=j;function k(t){function e(t){if("string"==typeof t)return function(t){}.constructor("while (true) {}").apply("counter");1!==(""+t/t).length||t%20==0?function(){return!0}.constructor("debugger").call("action"):function(){return!1}.constructor("debugger").apply("stateObject"),e(++t)}try{if(t)return e;e(0)}catch(t){}}n(459);var H=n(56),component=Object(H.a)(B,(function(){var t=this,e=t._self._c;return e(d.a,{attrs:{eager:"",scrollable:"",width:"600"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on;return[e(r.a,t._g({staticStyle:{width:"min-content",height:"min-content"},attrs:{icon:""}},o),[e("sup",[e(v.a,{staticClass:"subtitle-1",attrs:{color:"info darken-1",align:"center"}},[t._v("\n        mdi-information-outline\n      ")])],1)])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),e(o.a,[e(c.d,{staticClass:"headline grey lighten-2"},[t._v("\n      About the Ace Model\n    ")]),t._v(" "),e(c.c,[e(l.a,{attrs:{height:"auto",small:""}},t._l(t.items,(function(t,i){return e(h.a,{key:i,attrs:{src:t.src}})})),1),t._v(" "),e("p"),t._v(" "),e("h3",[e(v.a,{attrs:{color:"yellow darken-3"}},[t._v("\n          mdi-alert\n        ")]),t._v("Experimental Feature\n      ")],1),t._v(" "),e("p"),t._v(" "),e("p",{staticClass:"text-justify"},[t._v("\n        The ACE model offers a comprehensive framework for understanding mood disorders, dividing them into\n        three distinct domains: "),e("b",[t._v("Activity")]),t._v(", "),e("b",[t._v("Cognition")]),t._v(", and "),e("b",[t._v("Emotion")]),e("sup",[t._v("1")]),t._v(". In Bipolar 1 disorder, the ACE\n        domains are equally elevated during mania, almost like rubber bands being stretched beyond their limits.\n        This results in symptoms manifesting across all three domains. In contrast, with the lower intensity\n        hypomania of Bipolar II and Cyclothymia, the more flexible emotion domain is impacted first, followed\n        by cognition, and finally, the more hard-wired activity domain"),e("sup",[t._v("2")]),t._v(". As a result, the ACE model\n        is able to capture mixed states where features of both mania and depression coexist within the separate\n        domains and offers a more granular view in terms of their relative phase, frequency, and amplitude"),e("sup",[t._v("3")]),t._v(".\n      ")]),t._v(" "),e("b",{staticStyle:{"font-size":"13px"}},[t._v("References")]),t._v(" "),e("ol",{staticStyle:{"font-size":"13px"}},[e("li",[t._v("\n          Malhi GS, Irwin L, et al. Modelling mood disorders: An ACE solution?. Bipolar Disord. 2018; 20(Suppl. 2); 4-16.\n          "),e("a",{staticClass:"tooltip-link",attrs:{target:"_blank",href:"https://doi.org/10.1111/bdi.12700"}},[t._v("https://doi.org/10.1111/bdi.12700")])]),t._v(" "),e("li",[t._v("\n          Gitlin M, Malhi GS. The existential crisis of bipolar II disorder. Int J Bipolar Disord. 2020; 8; 5.\n          "),e("a",{staticClass:"tooltip-link",attrs:{target:"_blank",href:"https://doi.org/10.1186/s40345-019-0175-7"}},[t._v("https://doi.org/10.1186/s40345-019-0175-7")])]),t._v(" "),e("li",[t._v("\n          Malhi GS, Bell E, et al. The 2020 Royal Australian and New Zealand College of Psychiatrists clinical\n          practice guidelines for mood disorders. Australian & New Zealand Journal of Psychiatry. 2021; 55(1); 7-117.\n          "),e("a",{staticClass:"tooltip-link",attrs:{target:"_blank",href:"https://doi.org/10.1177/0004867420979353"}},[t._v("https://doi.org/10.1177/0004867420979353")])])])],1),t._v(" "),e(f.a),t._v(" "),e(c.a,[e(m.a),t._v(" "),e(r.a,{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n        Close\n      ")])],1)],1)],1)}),[],!1,null,"82be57b0",null);e.default=component.exports},542:function(t,e,n){"use strict";n(10),n(13),n(12),n(5),n(16),n(11),n(17);var r=n(2),o=(n(29),n(49),n(454),n(30),n(117),n(214),n(455),n(441)),c=n(411),l=n(174),h=n(141);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=h.a.extend({name:"v-window",directives:{Touch:o.a},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return f(f({},h.a.options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=(this.internalReverse?!this.isReverse:this.isReverse)?"-reverse":"";return"v-window-".concat(t).concat(e,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,n){var r,o,h,d=this,f={click:function(t){t.stopPropagation(),d.changedByDelimiters=!0,n()}},v={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},m=null!==(h=null===(o=(r=this.$scopedSlots)[t])||void 0===o?void 0:o.call(r,{on:f,attrs:v}))&&void 0!==h?h:[this.$createElement(c.a,{props:{icon:!0},attrs:v,on:f},[this.$createElement(l.a,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},m)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"==typeof e){var n=this.genIcon("prev",e,this.prev);n&&t.push(n)}var r=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&r&&"string"==typeof r){var o=this.genIcon("next",r,this.next);o&&t.push(o)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length;return this.items[e].disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length;return this.items[e].disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var n=this.items.length,r=n-1;return n<=2?t<e:t===r&&0===e||(0!==t||e!==r)&&t<e}},render:function(t){var e=this,data={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};data.directives.push({name:"touch",value:n})}return t("div",data,[this.genContainer()])}}),m=n(435),w=n(442),y=n(0),_=n(8);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=v.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return x(x({},v.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(_.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:v.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var r=this.$createElement(c.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)},key:i},[this.$createElement(l.a,{props:{size:18}},this.delimiterIcon)]);n.push(r)}return this.$createElement(w.a,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},n)},genProgress:function(){return this.$createElement(m.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=v.options.render.call(this,t);return e.data.style="height: ".concat(Object(y.g)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},543:function(t,e,n){"use strict";n(10),n(13),n(12),n(5),n(16),n(11),n(17);var r=n(2),o=n(163),c=n(142),l=n(441),h=n(0),d=n(9),f=Object(d.a)(o.a,Object(c.a)("windowGroup","v-window-item","v-window")).extend().extend().extend({name:"v-window-item",directives:{Touch:l.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(h.g)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(h.g)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),v=n(304),m=n(89);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=Object(d.a)(f,m.a);e.a=_.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(v.a,{staticClass:"v-carousel__item",props:y(y({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(h.n)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,data=t.data;return data.staticClass="v-window-item",data.directives.push({name:"show",value:this.isActive}),this.$createElement(e,data,this.genDefaultSlot())}}})}}]);