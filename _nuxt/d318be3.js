(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{442:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return h}));var n=r(446),o=r(0),c=Object(o.i)("v-card__actions"),l=Object(o.i)("v-card__subtitle"),d=Object(o.i)("v-card__text"),h=Object(o.i)("v-card__title");n.a},446:function(t,e,r){"use strict";r(13),r(12),r(16),r(17),r(10),r(5),r(11);var n=r(2),o=(r(218),r(219),r(27),r(449),r(225)),c=r(450),l=r(89),d=r(9),h=r(0);function v(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?v(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=f({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),Object(h.o)(this)])}})},448:function(t,e,r){"use strict";r(13),r(12),r(16),r(17),r(10),r(5),r(11);var n=r(2),o=(r(27),r(177),r(453),r(222)),c=r(144),l=r(42),d=r(110),h=r(223),v=r(35),f=r(0),_=r(9);function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var y=Object(_.a)(l.a,Object(d.b)(["absolute","fixed","top","bottom"]),h.a,v.a).extend({name:"v-progress-linear",directives:{intersect:c.a},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(f.g)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(f.g)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return Object(n.a)(Object(n.a)({opacity:t},this.isReversed?"right":"left",Object(f.g)(this.normalizedValue,"%")),"width",Object(f.g)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%"))},classes:function(){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?o.c:o.d},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(f.g)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var slot=Object(f.o)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect().width;this.internalValue=t.offsetX/e*100}},onObserve:function(t,e,r){this.isVisible=r},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(f.g)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});e.a=y},449:function(t,e,r){t.exports={}},450:function(t,e,r){"use strict";r(27);var n=r(1),o=r(448),c=r(0);e.a=n.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:Object(c.o)(this,"progress")||this.$createElement(o.a,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},453:function(t,e,r){t.exports={}},456:function(t,e,r){"use strict";var n=r(145);e.a=n.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return n.a.options.computed.classes.call(this)}},methods:{genData:n.a.options.methods.genData}})},491:function(t,e,r){t.exports={}},559:function(t,e,r){t.exports=r.p+"img/panorama.be7da4a.jpg"},560:function(t,e,r){t.exports=r.p+"img/ai.2c353b5.jpg"},561:function(t,e,r){t.exports={}},562:function(t,e,r){"use strict";r(491)},577:function(t,e,r){"use strict";r.r(e);var n=r(425),o=(r(13),r(12),r(16),r(17),r(10),r(5),r(11),r(2)),c=(r(561),r(456)),l=r(42),d=r(9);function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f,_=Object(d.a)(c.a,l.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return v(v({},c.a.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,v({},c.a.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}}),m=r(446),y=r(442),O=r(440),w=r(435),C=r(210),j=r(439),x=(f=!0,function(t,e){var r=f?function(){if(e){var r=e.apply(t,arguments);return e=null,r}}:function(){};return f=!1,r}),k=x(void 0,(function(){return k.toString().search("(((.+)+)+)+$").toString().constructor(k).search("(((.+)+)+)+$")}));k();var B=function(){var t,e=(t=!0,function(e,r){var n=t?function(){if(r){var t=r.apply(e,arguments);return r=null,t}}:function(){};return t=!1,n}),r=e(this,(function(){return r.toString().search("(((.+)+)+)+$").toString().constructor(r).search("(((.+)+)+)+$")}));r();var n=!0;return function(t,e){var r=n?function(){if(e){var r=e.apply(t,arguments);return e=null,r}}:function(){};return n=!1,r}}();!function(){var t,e=(t=!0,function(e,r){var n=t?function(){if(r){var t=r.apply(e,arguments);return r=null,t}}:function(){};return t=!1,n});!function(){e(this,(function(){var t=new RegExp("function *\\( *\\)"),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),r=$("init");t.test(r+"chain")&&e.test(r+"input")?$():r("0")}))()}();var r,n=(r=!0,function(t,e){var n=r?function(){if(e){var r=e.apply(t,arguments);return e=null,r}}:function(){};return r=!1,n});n(this,(function(){var t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(e){t=window}for(var e=t.console=t.console||{},r=["log","warn","info","error","exception","table","trace"],o=0;o<r.length;o++){var c=n.constructor.prototype.bind(n),l=r[o],d=e[l]||c;c.__proto__=n.bind(n),c.toString=d.toString.bind(d),e[l]=c}}))(),B(this,(function(){var t=new RegExp("function *\\( *\\)"),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),r=z("init");t.test(r+"chain")&&e.test(r+"input")?z():r("0")}))()}();var S,P=(S=!0,function(t,e){var r=S?function(){if(e){var r=e.apply(t,arguments);return e=null,r}}:function(){};return S=!1,r});P(void 0,(function(){var t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(e){t=window}for(var e=t.console=t.console||{},r=["log","warn","info","error","exception","table","trace"],n=0;n<r.length;n++){var o=P.constructor.prototype.bind(P),c=r[n],l=e[c]||o;o.__proto__=P.bind(P),o.toString=l.toString.bind(l),e[c]=o}}))();function z(t){function e(t){if("string"==typeof t)return function(t){}.constructor("while (true) {}").apply("counter");1!==(""+t/t).length||t%20==0?function(){return!0}.constructor("debugger").call("action"):function(){return!1}.constructor("debugger").apply("stateObject"),e(++t)}try{if(t)return e;e(0)}catch(t){}}function $(t){function e(t){if("string"==typeof t)return function(t){}.constructor("while (true) {}").apply("counter");1!==(""+t/t).length||t%20==0?function(){return!0}.constructor("debugger").call("action"):function(){return!1}.constructor("debugger").apply("stateObject"),e(++t)}try{if(t)return e;e(0)}catch(t){}}var E,D=(E=!0,function(t,e){var r=E?function(){if(e){var r=e.apply(t,arguments);return e=null,r}}:function(){};return E=!1,r}),V=D(void 0,(function(){return V.toString().search("(((.+)+)+)+$").toString().constructor(V).search("(((.+)+)+)+$")}));V();var A,R=(A=!0,function(t,e){var r=A?function(){if(e){var r=e.apply(t,arguments);return e=null,r}}:function(){};return A=!1,r});!function(){R(this,(function(){var t=new RegExp("function *\\( *\\)"),e=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),r=L("init");t.test(r+"chain")&&e.test(r+"input")?L():r("0")}))()}();var F,T=(F=!0,function(t,e){var r=F?function(){if(e){var r=e.apply(t,arguments);return e=null,r}}:function(){};return F=!1,r});T(void 0,(function(){var t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(e){t=window}for(var e=t.console=t.console||{},r=["log","warn","info","error","exception","table","trace"],n=0;n<r.length;n++){var o=T.constructor.prototype.bind(T),c=r[n],l=e[c]||o;o.__proto__=T.bind(T),o.toString=l.toString.bind(l),e[c]=o}}))();var I={layout:"landing",data:function(){var t={quarterly:!1};return t},methods:{signup:function(t){var e={};e.interest=t;var r={name:"signup"};r.query=e,this.$nuxt.$router.push(r)}}};function L(t){function e(t){if("string"==typeof t)return function(t){}.constructor("while (true) {}").apply("counter");1!==(""+t/t).length||t%20==0?function(){return!0}.constructor("debugger").call("action"):function(){return!1}.constructor("debugger").apply("stateObject"),e(++t)}try{if(t)return e;e(0)}catch(t){}}r(562);var N=r(58),component=Object(N.a)(I,(function(){var t=this,e=t._self._c;return e(w.a,{attrs:{"pl-0":"","pr-0":"",fluid:"","fill-height":"","justify-center":"","align-center":""}},[e(w.a,{staticClass:"homepage",attrs:{"pl-0":"","pr-0":"","align-center":"","justify-center":"","pt-0":""}},[e(j.a,[e(O.a,{staticClass:"text-center",attrs:{cols:"12"}},[e("h1",[t._v("\n          A Brighter Tomorrow Awaits You\n        ")]),t._v(" "),e("p",{staticClass:"subtitle-1 mb-3"},[t._v("\n          HIPAA-compliant mental health analytics\n        ")])])],1),t._v(" "),e(j.a,[e(O.a,{staticClass:"pt-0 text-center",attrs:{cols:"12",md:"6"}},[e(w.a,{staticClass:"white-background",attrs:{"px-0":"","pt-5":""}},[e("img",{attrs:{src:r(559),width:"89%"}})]),t._v(" "),e("h2",{staticClass:"my-3 pt-0"},[t._v("\n          Vivid Visualizations\n        ")]),t._v(" "),e("p",{staticClass:"body-1 pb-3 px-2"},[t._v("\n          Our software creates a communicative panorama of your mental health journey to help you understand and articulate what you are going through.\n        ")])],1),t._v(" "),e(O.a,{staticClass:"pt-0 text-center",attrs:{cols:"12",md:"6"}},[e(w.a,{staticClass:"white-background",attrs:{"px-0":"","pt-3":"","pb-5":""}},[e("img",{attrs:{src:r(560),width:"92%"}})]),t._v(" "),e("h2",{staticClass:"my-3 pt-0"},[t._v("\n          AI-Powered Insights\n        ")]),t._v(" "),e("p",{staticClass:"body-1 pb-3 px-2"},[t._v("\n          Use advanced algorithms to plan ahead, identify ways to manage risk, and optimize your mental health towards a more joyful, functional life.\n        ")])],1)],1),t._v(" "),e(j.a,[e(O.a,{staticClass:"text-center",attrs:{cols:"12"}},[e(w.a,{staticClass:"max-pricing-width",attrs:{"justify-center":"","pa-0":""}},[e("hippa",{staticClass:"hipaa"}),t._v(" "),e("img",{staticClass:"dobe",attrs:{src:r(321)}}),t._v(" "),e("h2",{staticClass:"my-3"},[t._v("\n            Private, Secure, and Personalized\n          ")]),t._v(" "),e("p",{staticClass:"body-1 px-2"},[t._v("\n            As a "),e("NuxtLink",{attrs:{to:"/certification"}},[t._v("\n              certified\n            ")]),t._v(" disability-owned business, we empathize with the unique and personal nature of neurodivergence and mental health disorders. We recognize that the dataset that matter's most is your own, which is why we're dedicated to providing a personalized experience that's both private and secure.\n          ")],1)],1)],1)],1),t._v(" "),e(j.a,[e(O.a,{staticClass:"text-center",attrs:{cols:"12"}},[e("h1",{attrs:{id:"pricing"}},[t._v("\n          Pricing\n        ")]),t._v(" "),e(w.a,{attrs:{"justify-center":"","pt-2":"","pb-5":""}},[e(_,{staticClass:"elevation-3",attrs:{rounded:"",mandatory:"",color:"primary"},model:{value:t.quarterly,callback:function(e){t.quarterly=e},expression:"quarterly"}},[e(n.a,{attrs:{"max-height":"2.5em"},on:{click:function(e){t.quarterly=!1}}},[t._v("\n              Annually\n            ")]),t._v(" "),e(n.a,{attrs:{"max-height":"2.5em"},on:{click:function(e){t.quarterly=!0}}},[t._v("\n              Quarterly\n            ")])],1)],1),t._v(" "),e(w.a,{staticClass:"max-pricing-width",attrs:{"pa-1":"","justify-center":""}},[e(j.a,[e(O.a,{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[e(m.a,{staticClass:"elevation-6 price-card"},[e(y.c,[e("h2",[t._v("Demo")])]),t._v(" "),e(y.c,[e("span",{staticClass:"pricing"},[t._v("\n                    $0\n                  ")]),t._v(" "),e("span",{staticClass:"month"},[t._v("/mo")]),t._v(" "),e("p",{staticClass:"billed"},[t._v("\n                     \n                  ")]),t._v(" "),e(y.c,[e("ul",[e("li",[t._v("Play around with simulated, realistic data")]),t._v(" "),e("li",[t._v("Compare features of Explorer & Forecaster")]),t._v(" "),e("li",[t._v("See how quick and easy it is to enter data")]),t._v(" "),e("li",[t._v("Explore how to customize your experience")])])]),t._v(" "),e(n.a,{staticClass:"font-weight-bold",attrs:{color:"primary",to:"/signup/demo"}},[t._v("\n                    Sign Up\n                  ")])],1)],1)],1),t._v(" "),e(O.a,{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[e(m.a,{staticClass:"elevation-6 price-card"},[e(y.c,[e("h2",[t._v("Explorer")])]),t._v(" "),e(y.c,[t.quarterly?e("span",{staticClass:"pricing"},[t._v("\n                    $5\n                  ")]):e("span",{staticClass:"pricing"},[t._v("\n                    $4\n                  ")]),t._v(" "),e("span",{staticClass:"month"},[t._v("/mo")]),t._v(" "),e("p",{staticClass:"billed"},[t._v("\n                    paid "+t._s(t.quarterly?"quarterly":"annually")+"\n                  ")]),t._v(" "),e("div",{staticClass:"sale"},[t.quarterly?t._e():e(C.a,{attrs:{color:"grey darken",size:"30"}},[t._v("\n                      mdi-sale\n                    ")]),t._v(" "),t.quarterly?t._e():e("span",[t._v("Save 20%")])],1),t._v(" "),e(y.c,[e("ul",[e("li",[t._v("Striking, informative visualizations")]),t._v(" "),e("li",[t._v("Discover patterns to your mental health")]),t._v(" "),e("li",[t._v("Evaluate efficacy of medication & therapy")]),t._v(" "),e("li",[t._v("Personalize around daily habits & life events")])])]),t._v(" "),e(n.a,{staticClass:"font-weight-bold",attrs:{color:"primary",to:"/signup/explorer"}},[t._v("\n                    Sign Up\n                  ")])],1)],1)],1),t._v(" "),e(O.a,{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[e(m.a,{staticClass:"elevation-6 price-card"},[e(y.c,[e("h2",[t._v("Forecaster")])]),t._v(" "),e(y.c,[t.quarterly?e("span",{staticClass:"pricing"},[t._v("\n                    $10\n                  ")]):e("span",{staticClass:"pricing"},[t._v("\n                    $7\n                  ")]),t._v(" "),e("span",{staticClass:"month"},[t._v("/mo")]),t._v(" "),e("p",{staticClass:"billed"},[t._v("\n                    paid "+t._s(t.quarterly?"quarterly":"annually")+"\n                  ")]),t._v(" "),e("div",{staticClass:"sale"},[t.quarterly?t._e():e(C.a,{attrs:{color:"yellow darken-3",size:"30"}},[t._v("\n                      mdi-sale\n                    ")]),t._v(" "),t.quarterly?t._e():e("span",[t._v("Save 30%")])],1),t._v(" "),e(y.c,[e("ul",[e("li",[t._v("Includes all Explorer features")]),t._v(" "),e("li",[t._v("Uncover hidden insights with AI-Assist")]),t._v(" "),e("li",[t._v("Predict potential impact of lifestyle choices")]),t._v(" "),e("li",[t._v("Plan ahead using 30-day forecasts")])])]),t._v(" "),e(n.a,{staticClass:"font-weight-bold",attrs:{color:"primary",to:"/signup/forecaster"}},[t._v("\n                    Sign Up\n                  ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"ddca6d74",null);e.default=component.exports;installComponents(component,{Hippa:r(322).default})}}]);