(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{430:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return h}));var n=r(433),o=r(0),c=Object(o.h)("v-card__actions"),l=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),h=Object(o.h)("v-card__title");n.a},433:function(t,e,r){"use strict";r(10),r(13),r(12),r(5),r(16),r(11),r(17);var n=r(2),o=(r(29),r(212),r(213),r(437),r(218)),c=r(436),l=r(89),d=r(9);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=v({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},435:function(t,e,r){"use strict";r(10),r(13),r(12),r(5),r(16),r(11),r(17);var n=r(2),o=(r(29),r(175),r(438),r(215)),c=r(140),l=r(46),d=r(110),h=r(216),v=r(35),f=r(0),_=r(9);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var y=Object(_.a)(l.a,Object(d.b)(["absolute","fixed","top","bottom"]),h.a,v.a).extend({name:"v-progress-linear",directives:{intersect:c.a},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(f.g)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(f.g)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t;return t={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(n.a)(t,this.isReversed?"right":"left",Object(f.g)(this.normalizedValue,"%")),Object(n.a)(t,"width",Object(f.g)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),t},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?o.c:o.d},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(f.g)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var slot=Object(f.n)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect().width;this.internalValue=t.offsetX/e*100}},onObserve:function(t,e,r){this.isVisible=r},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(f.g)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});e.a=y},436:function(t,e,r){"use strict";r(29);var n=r(1),o=r(435);e.a=n.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(o.a,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},437:function(t,e,r){},438:function(t,e,r){},442:function(t,e,r){"use strict";var n=r(141);e.a=n.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return n.a.options.computed.classes.call(this)}},methods:{genData:n.a.options.methods.genData}})},475:function(t,e,r){},535:function(t,e,r){t.exports=r.p+"img/panorama.f216d23.jpg"},536:function(t,e,r){t.exports=r.p+"img/ai.03309cf.jpg"},537:function(t,e,r){},538:function(t,e,r){"use strict";r(475)},552:function(t,e,r){"use strict";r.r(e);var n=r(412),o=(r(10),r(13),r(12),r(5),r(16),r(11),r(17),r(2)),c=(r(537),r(442)),l=r(46),d=r(9);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f,_=Object(d.a)(c.a,l.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return v(v({},c.a.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,v({},c.a.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}}),m=r(433),y=r(430),O=r(428),w=r(423),C=r(203),j=r(427),x=(f=!0,function(t,e){var r=f?function(){if(e){var r=e.apply(t,arguments);return e=null,r}}:function(){};return f=!1,r}),k=x(void 0,(function(){return k.toString().search("(((.+)+)+)+$").toString().constructor(k).search("(((.+)+)+)+$")}));k();var B=function(){var t,e=(t=!0,function(e,r){var n=t?function(){if(r){var t=r.apply(e,arguments);return r=null,t}}:function(){};return t=!1,n}),r=e(this,(function(){return r.toString().search("(((.+)+)+)+$").toString().constructor(r).search("(((.+)+)+)+$")}));r();var n=!0;return function(t,e){var r=n?function(){if(e){var r=e.apply(t,arguments);return e=null,r}}:function(){};return n=!1,r}}();!function(){var t,e=(t=!0,function(e,r){var n=t?function(){if(r){var t=r.apply(e,arguments);return r=null,t}}:function(){};return t=!1,n});(function(){e(this,(function(){var t=new RegExp("function *\\( *\\)"),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),r=$("init");t.test(r+"chain")&&e.test(r+"input")?$():r("0")}))()})(),B(this,(function(){var t=new RegExp("function *\\( *\\)"),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),r=P("init");t.test(r+"chain")&&e.test(r+"input")?P():r("0")}))()}();var S=function(){var t,e=(t=!0,function(e,r){var n=t?function(){if(r){var t=r.apply(e,arguments);return r=null,t}}:function(){};return t=!1,n});e(this,(function(){for(var t=function(){var t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(e){t=window}return t}(),r=t.console=t.console||{},n=["log","warn","info","error","exception","table","trace"],o=0;o<n.length;o++){var c=e.constructor.prototype.bind(e),l=n[o],d=r[l]||c;c.__proto__=e.bind(e),c.toString=d.toString.bind(d),r[l]=c}}))();var r=!0;return function(t,e){var n=r?function(){if(e){var r=e.apply(t,arguments);return e=null,r}}:function(){};return r=!1,n}}();S(void 0,(function(){for(var t=function(){var t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(e){t=window}return t}(),e=t.console=t.console||{},r=["log","warn","info","error","exception","table","trace"],n=0;n<r.length;n++){var o=S.constructor.prototype.bind(S),c=r[n],l=e[c]||o;o.__proto__=S.bind(S),o.toString=l.toString.bind(l),e[c]=o}}))();function P(t){function e(t){if("string"==typeof t)return function(t){}.constructor("while (true) {}").apply("counter");1!==(""+t/t).length||t%20==0?function(){return!0}.constructor("debugger").call("action"):function(){return!1}.constructor("debugger").apply("stateObject"),e(++t)}try{if(t)return e;e(0)}catch(t){}}function $(t){function e(t){if("string"==typeof t)return function(t){}.constructor("while (true) {}").apply("counter");1!==(""+t/t).length||t%20==0?function(){return!0}.constructor("debugger").call("action"):function(){return!1}.constructor("debugger").apply("stateObject"),e(++t)}try{if(t)return e;e(0)}catch(t){}}var z,E=(z=!0,function(t,e){var r=z?function(){if(e){var r=e.apply(t,arguments);return e=null,r}}:function(){};return z=!1,r}),D=E(void 0,(function(){return D.toString().search("(((.+)+)+)+$").toString().constructor(D).search("(((.+)+)+)+$")}));D();var V,A=(V=!0,function(t,e){var r=V?function(){if(e){var r=e.apply(t,arguments);return e=null,r}}:function(){};return V=!1,r});!function(){A(this,(function(){var t=new RegExp("function *\\( *\\)"),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),r=I("init");t.test(r+"chain")&&e.test(r+"input")?I():r("0")}))()}();var R,F=(R=!0,function(t,e){var r=R?function(){if(e){var r=e.apply(t,arguments);return e=null,r}}:function(){};return R=!1,r});F(void 0,(function(){for(var t=function(){var t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(e){t=window}return t}(),e=t.console=t.console||{},r=["log","warn","info","error","exception","table","trace"],n=0;n<r.length;n++){var o=F.constructor.prototype.bind(F),c=r[n],l=e[c]||o;o.__proto__=F.bind(F),o.toString=l.toString.bind(l),e[c]=o}}))();var T={layout:"landing",data:function(){var t={quarterly:!1};return t},methods:{signup:function(t){var e={};e.interest=t;var r={name:"signup"};r.query=e,this.$nuxt.$router.push(r)}}};function I(t){function e(t){if("string"==typeof t)return function(t){}.constructor("while (true) {}").apply("counter");1!==(""+t/t).length||t%20==0?function(){return!0}.constructor("debugger").call("action"):function(){return!1}.constructor("debugger").apply("stateObject"),e(++t)}try{if(t)return e;e(0)}catch(t){}}r(538);var L=r(56),component=Object(L.a)(T,(function(){var t=this,e=t._self._c;return e(w.a,{attrs:{"pl-0":"","pr-0":"",fluid:"","fill-height":"","justify-center":"","align-center":""}},[e(w.a,{staticClass:"homepage",attrs:{"pl-0":"","pr-0":"","align-center":"","justify-center":"","pt-0":""}},[e(j.a,[e(O.a,{staticClass:"text-center",attrs:{cols:"12"}},[e("h1",[t._v("\n          A Brighter Tomorrow Awaits You\n        ")]),t._v(" "),e("p",{staticClass:"subtitle-1 mb-3"},[t._v("\n          HIPAA-compliant mental health analytics\n        ")])])],1),t._v(" "),e(j.a,[e(O.a,{staticClass:"pt-0 text-center",attrs:{cols:"12",md:"6"}},[e(w.a,{staticClass:"white-background",attrs:{"px-0":"","pt-5":""}},[e("img",{attrs:{src:r(535),width:"89%"}})]),t._v(" "),e("h2",{staticClass:"my-3 pt-0"},[t._v("\n          Vivid Visualizations\n        ")]),t._v(" "),e("p",{staticClass:"body-1 pb-3 px-2"},[t._v("\n          Our software creates a communicative panorama of your mental health journey to help you understand and articulate what you are going through.\n        ")])],1),t._v(" "),e(O.a,{staticClass:"pt-0 text-center",attrs:{cols:"12",md:"6"}},[e(w.a,{staticClass:"white-background",attrs:{"px-0":"","pt-3":"","pb-5":""}},[e("img",{attrs:{src:r(536),width:"92%"}})]),t._v(" "),e("h2",{staticClass:"my-3 pt-0"},[t._v("\n          AI-Powered Insights\n        ")]),t._v(" "),e("p",{staticClass:"body-1 pb-3 px-2"},[t._v("\n          Use advanced algorithms to plan ahead, identify ways to manage risk, and optimize your mental health towards a more joyful, functional life.\n        ")])],1)],1),t._v(" "),e(j.a,[e(O.a,{staticClass:"text-center",attrs:{cols:"12"}},[e(w.a,{staticClass:"max-pricing-width",attrs:{"justify-center":"","pa-0":""}},[e("hippa",{staticClass:"hipaa"}),t._v(" "),e("img",{staticClass:"dobe",attrs:{src:r(310)}}),t._v(" "),e("h2",{staticClass:"my-3"},[t._v("\n            Private, Secure, and Personalized\n          ")]),t._v(" "),e("p",{staticClass:"body-1 px-2"},[t._v("\n            As a "),e("NuxtLink",{attrs:{to:"/certification"}},[t._v("\n              certified\n            ")]),t._v(" disability-owned business, we empathize with the unique and personal nature of neurodivergence and mental health disorders. We recognize that the dataset that matter's most is your own, which is why we're dedicated to providing a personalized experience that's both private and secure.\n          ")],1)],1)],1)],1),t._v(" "),e(j.a,[e(O.a,{staticClass:"text-center",attrs:{cols:"12"}},[e("h1",{attrs:{id:"pricing"}},[t._v("\n          Pricing\n        ")]),t._v(" "),e(w.a,{attrs:{"justify-center":"","pt-2":"","pb-5":""}},[e(_,{staticClass:"elevation-3",attrs:{rounded:"",mandatory:"",color:"primary"},model:{value:t.quarterly,callback:function(e){t.quarterly=e},expression:"quarterly"}},[e(n.a,{attrs:{"max-height":"2.5em"},on:{click:function(e){t.quarterly=!1}}},[t._v("\n              Annually\n            ")]),t._v(" "),e(n.a,{attrs:{"max-height":"2.5em"},on:{click:function(e){t.quarterly=!0}}},[t._v("\n              Quarterly\n            ")])],1)],1),t._v(" "),e(w.a,{staticClass:"max-pricing-width",attrs:{"pa-1":"","justify-center":""}},[e(j.a,[e(O.a,{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[e(m.a,{staticClass:"elevation-6 price-card"},[e(y.c,[e("h2",[t._v("Demo")])]),t._v(" "),e(y.c,[e("span",{staticClass:"pricing"},[t._v("\n                    $0\n                  ")]),t._v(" "),e("span",{staticClass:"month"},[t._v("/mo")]),t._v(" "),e("p",{staticClass:"billed"},[t._v("\n                     \n                  ")]),t._v(" "),e(y.c,[e("ul",[e("li",[t._v("Play around with simulated, realistic data")]),t._v(" "),e("li",[t._v("Compare features of Explorer & Forecaster")]),t._v(" "),e("li",[t._v("See how quick and easy it is to enter data")]),t._v(" "),e("li",[t._v("Explore how to customize your experience")])])]),t._v(" "),e(n.a,{staticClass:"font-weight-bold",attrs:{color:"primary",to:"/signup/demo"}},[t._v("\n                    Sign Up\n                  ")])],1)],1)],1),t._v(" "),e(O.a,{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[e(m.a,{staticClass:"elevation-6 price-card"},[e(y.c,[e("h2",[t._v("Explorer")])]),t._v(" "),e(y.c,[t.quarterly?e("span",{staticClass:"pricing"},[t._v("\n                    $5\n                  ")]):e("span",{staticClass:"pricing"},[t._v("\n                    $4\n                  ")]),t._v(" "),e("span",{staticClass:"month"},[t._v("/mo")]),t._v(" "),e("p",{staticClass:"billed"},[t._v("\n                    paid "+t._s(t.quarterly?"quarterly":"annually")+"\n                  ")]),t._v(" "),e("div",{staticClass:"sale"},[t.quarterly?t._e():e(C.a,{attrs:{color:"grey darken",size:"30"}},[t._v("\n                      mdi-sale\n                    ")]),t._v(" "),t.quarterly?t._e():e("span",[t._v("Save 20%")])],1),t._v(" "),e(y.c,[e("ul",[e("li",[t._v("Striking, informative visualizations")]),t._v(" "),e("li",[t._v("Discover patterns to your mental health")]),t._v(" "),e("li",[t._v("Evaluate efficacy of medication & therapy")]),t._v(" "),e("li",[t._v("Personalize around daily habits & life events")])])]),t._v(" "),e(n.a,{staticClass:"font-weight-bold",attrs:{color:"primary",to:"/signup/explorer"}},[t._v("\n                    Sign Up\n                  ")])],1)],1)],1),t._v(" "),e(O.a,{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[e(m.a,{staticClass:"elevation-6 price-card"},[e(y.c,[e("h2",[t._v("Forecaster")])]),t._v(" "),e(y.c,[t.quarterly?e("span",{staticClass:"pricing"},[t._v("\n                    $10\n                  ")]):e("span",{staticClass:"pricing"},[t._v("\n                    $7\n                  ")]),t._v(" "),e("span",{staticClass:"month"},[t._v("/mo")]),t._v(" "),e("p",{staticClass:"billed"},[t._v("\n                    paid "+t._s(t.quarterly?"quarterly":"annually")+"\n                  ")]),t._v(" "),e("div",{staticClass:"sale"},[t.quarterly?t._e():e(C.a,{attrs:{color:"yellow darken-3",size:"30"}},[t._v("\n                      mdi-sale\n                    ")]),t._v(" "),t.quarterly?t._e():e("span",[t._v("Save 30%")])],1),t._v(" "),e(y.c,[e("ul",[e("li",[t._v("Includes all Explorer features")]),t._v(" "),e("li",[t._v("Uncover hidden insights with AI-Assist")]),t._v(" "),e("li",[t._v("Predict potential impact of lifestyle choices")]),t._v(" "),e("li",[t._v("Plan ahead using 30-day forecasts")])])]),t._v(" "),e(n.a,{staticClass:"font-weight-bold",attrs:{color:"primary",to:"/signup/forecaster"}},[t._v("\n                    Sign Up\n                  ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"ddca6d74",null);e.default=component.exports;installComponents(component,{Hippa:r(311).default})}}]);