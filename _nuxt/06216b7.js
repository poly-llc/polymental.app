(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{404:function(t,n,e){"use strict";e.d(n,"a",(function(){return f})),e.d(n,"b",(function(){return v})),e.d(n,"c",(function(){return m}));var r=e(13),o=(e(76),e(7),e(75),e(420)),c=e.n(o),l=e(267),h=e.n(l),d=e(142),f=function(){var t,n=(t=!0,function(n,e){var r=t?function(){if(e){var t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,r});!function(){n(this,(function(){var t=new RegExp("function *\\( *\\)"),n=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),e=y("init");t.test(e+"chain")&&n.test(e+"input")?y():e("0")}))()}();var e,o=(e=!0,function(t,n){var r=e?function(){if(n){var e=n.apply(t,arguments);return n=null,e}}:function(){};return e=!1,r});o(this,(function(){for(var t=function(){var t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(n){t=window}return t}(),n=t.console=t.console||{},e=["log","warn","info","error","exception","table","trace"],r=0;r<e.length;r++){var c=o.constructor.prototype.bind(o),l=e[r],h=n[l]||c;c.__proto__=o.bind(o),c.toString=h.toString.bind(h),n[l]=c}}))();var l=Object(r.a)(regeneratorRuntime.mark((function t(n,e){var r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.getters.password;case 2:return r=t.sent,o=e.passwordHash,l=c()(r).toString(h.a),t.abrupt("return",l===o);case 6:case"end":return t.stop()}}),t)})));return function(t,n){return l.apply(this,arguments)}}(),v=function(){var t,n=(t=!0,function(n,e){var r=t?function(){if(e){var t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,r}),e=n(this,(function(){return e.toString().search("(((.+)+)+)+$").toString().constructor(e).search("(((.+)+)+)+$")}));e();var o=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.getJSON)("vuex");case 2:return t.t0=t.sent,t.t1=void 0,t.abrupt("return",t.t0===t.t1);case 5:case"end":return t.stop()}}),t)})));return function(){return o.apply(this,arguments)}}(),m=function(t){t.dispatch("password",void 0)};function y(t){function n(t){if("string"==typeof t)return function(t){}.constructor("while (true) {}").apply("counter");1!==(""+t/t).length||t%20==0?function(){return!0}.constructor("debugger").call("action"):function(){return!1}.constructor("debugger").apply("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(t){}}},422:function(t,n,e){},488:function(t,n,e){},489:function(t,n,e){},490:function(t,n,e){},491:function(t){t.exports=JSON.parse('{"a":"0.0.114"}')},492:function(t,n,e){"use strict";e(422)},508:function(t,n,e){"use strict";e.r(n);var r=e(512),o=e(411),c=e(368),l=e(364),h=(e(180),e(141)),d=Object(h.a)("flex"),f=e(3),v=(e(52),e(58),e(184),e(18),e(7),e(17),e(74),e(179),e(15),e(16),e(27),e(28),e(51)),m=e(124),y=e(386);function w(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(n){Object(f.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var S=Object(v.a)(m.a,Object(y.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var n=Object.values(t).includes(!0);this.$emit("input",!n)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,n=function(input){return input.$watch("hasError",(function(n){t.$set(t.errorBag,input._uid,n)}),{immediate:!0})},e={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?e.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(e.valid=n(input)))})):e.valid=n(input),e},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var n=this.watchers.find((function(i){return i._uid===t._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var n=this;return t("form",{staticClass:"v-form",attrs:_({novalidate:!0},this.attrs$),on:{submit:function(t){return n.$emit("submit",t)}}},this.$slots.default)}}),O=e(363),j=e(438),x=e(499),$=e(14),E=(e(84),e(382),e(383),e(488),e(123)),P=e(38),z=(e(87),e(271),e(60),e(489),e(384)),C=(e(490),e(185)),B=e(4),R=Object(v.a)(C.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},Object(B.o)(this))}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),k=e(85),A=e(88),I=e(30),H="undefined"!=typeof window&&"IntersectionObserver"in window,L=Object(v.a)(R,k.a).extend({name:"v-img",directives:{intersect:z.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(P.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],n=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),n&&t.push('url("'.concat(n,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,n,e){if(!H||e||this.eager){if(this.normalisedSrc.lazySrc){var r=new Image;r.src=this.normalisedSrc.lazySrc,this.pollForSize(r,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(n){Object(I.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(n.message?"\nOriginal error: ".concat(n.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),image.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,e=function e(){var r=img.naturalHeight,o=img.naturalWidth;r||o?(t.naturalWidth=o,t.calculatedAspectRatio=o/r):img.complete||!t.isLoading||t.hasError||null==n||setTimeout(e,n)};e()},genContent:function(){var content=R.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){var slot=Object(B.o)(this,"placeholder");if(slot){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},slot)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var n=R.options.render.call(this,t),data=Object(A.a)(n.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:H?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return n.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(n.tag,data,n.children)}});function W(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function D(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?W(Object(source),!0).forEach((function(n){Object(f.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):W(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var N=E.a.extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var n=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(n)?0:n)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return D(D({},E.a.options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return D(D({},this.measurableStyles),{},{height:Object(B.g)(this.computedHeight)})}},created:function(){var t=this;[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]].forEach((function(n){var e=Object($.a)(n,2),r=e[0],o=e[1];t.$attrs.hasOwnProperty(r)&&Object(I.a)(r,o,t)}))},methods:{genBackground:function(){var t={height:Object(B.g)(this.computedHeight),src:this.src},image=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(L,{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[image])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(B.g)(this.computedContentHeight)}},Object(B.o)(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(B.g)(this.extensionHeight)}},Object(B.o)(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var n=[this.genContent()],data=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&n.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&n.unshift(this.genBackground()),t(this.tag,data,n)}}),V=Object(B.h)("v-toolbar__title"),F=(Object(B.h)("v-toolbar__items"),e(13)),Z=(e(76),e(404)),J=e(491),T=function(){var t,n=(t=!0,function(n,e){var r=t?function(){if(e){var t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,r}),e=n(this,(function(){return e.toString().search("(((.+)+)+)+$").toString().constructor(e).search("(((.+)+)+)+$")}));e();var r=!0;return function(t,n){var e=r?function(){if(n){var e=n.apply(t,arguments);return n=null,e}}:function(){};return r=!1,e}}(),M=T(void 0,(function(){return M.toString().search("(((.+)+)+)+$").toString().constructor(M).search("(((.+)+)+)+$")}));M();var U=function(){var t,n=(t=!0,function(n,e){var r=t?function(){if(e){var t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,r});!function(){n(this,(function(){var t=new RegExp("function *\\( *\\)"),n=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),e=X("init");t.test(e+"chain")&&n.test(e+"input")?X():e("0")}))()}();var e=!0;return function(t,n){var r=e?function(){if(n){var e=n.apply(t,arguments);return n=null,e}}:function(){};return e=!1,r}}();!function(){U(this,(function(){var t=new RegExp("function *\\( *\\)"),n=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),e=Q("init");t.test(e+"chain")&&n.test(e+"input")?Q():e("0")}))()}();var G=function(){var t,n=(t=!0,function(n,e){var r=t?function(){if(e){var t=e.apply(n,arguments);return e=null,t}}:function(){};return t=!1,r});n(this,(function(){var t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(n){t=window}for(var e=t.console=t.console||{},r=["log","warn","info","error","exception","table","trace"],o=0;o<r.length;o++){var c=n.constructor.prototype.bind(n),l=r[o],h=e[l]||c;c.__proto__=n.bind(n),c.toString=h.toString.bind(h),e[l]=c}}))();var e=!0;return function(t,n){var r=e?function(){if(n){var e=n.apply(t,arguments);return n=null,e}}:function(){};return e=!1,r}}();G(void 0,(function(){var t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(n){t=window}for(var n=t.console=t.console||{},e=["log","warn","info","error","exception","table","trace"],r=0;r<e.length;r++){var o=G.constructor.prototype.bind(G),c=e[r],l=n[c]||o;o.__proto__=G.bind(G),o.toString=l.toString.bind(l),n[c]=o}}))();var K={data:function(){var t={required:function(t){return!!t||"Password is required"}},n={};return n.version=J.a,n.loggingIn=!1,n.password="",n.showPassword=!1,n.rules=t,n},fetch:function(){var t=this;return Object(F.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loggingIn=!!t.password,e=t.$nuxt.context.$config,n.next=4,Object(Z.a)(t.$store,e);case 4:if(n.sent){n.next=7;break}return n.next=7,t.$store.dispatch("password",t.password);case 7:return n.next=9,Object(Z.a)(t.$store,e);case 9:if(!n.sent){n.next=11;break}t.$router.push("/analytics/");case 11:t.loggingIn=!1;case 12:case"end":return n.stop()}}),n)})))()},fetchOnServer:!1,methods:{removeAuthorization:function(){Object(Z.c)(this.$store)}}};function Q(t){function n(t){if("string"==typeof t)return function(t){}.constructor("while (true) {}").apply("counter");1!==(""+t/t).length||t%20==0?function(){return!0}.constructor("debugger").call("action"):function(){return!1}.constructor("debugger").apply("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(t){}}function X(t){function n(t){if("string"==typeof t)return function(t){}.constructor("while (true) {}").apply("counter");1!==(""+t/t).length||t%20==0?function(){return!0}.constructor("debugger").call("action"):function(){return!1}.constructor("debugger").apply("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(t){}}var Y,tt=(Y=!0,function(t,n){var e=Y?function(){if(n){var e=n.apply(t,arguments);return n=null,e}}:function(){};return Y=!1,e}),nt=tt(void 0,(function(){return nt.toString().search("(((.+)+)+)+$").toString().constructor(nt).search("(((.+)+)+)+$")}));nt();var et,it=(et=!0,function(t,n){var e=et?function(){if(n){var e=n.apply(t,arguments);return n=null,e}}:function(){};return et=!1,e});!function(){it(this,(function(){var t=new RegExp("function *\\( *\\)"),n=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),e=ct("init");t.test(e+"chain")&&n.test(e+"input")?ct():e("0")}))()}();var ot,st=(ot=!0,function(t,n){var e=ot?function(){if(n){var e=n.apply(t,arguments);return n=null,e}}:function(){};return ot=!1,e});st(void 0,(function(){for(var t=function(){var t;try{t=Function('return (function() {}.constructor("return this")( ));')()}catch(n){t=window}return t}(),n=t.console=t.console||{},e=["log","warn","info","error","exception","table","trace"],r=0;r<e.length;r++){var o=st.constructor.prototype.bind(st),c=e[r],l=n[c]||o;o.__proto__=st.bind(st),o.toString=l.toString.bind(l),n[c]=o}}))();var at=K;function ct(t){function n(t){if("string"==typeof t)return function(t){}.constructor("while (true) {}").apply("counter");1!==(""+t/t).length||t%20==0?function(){return!0}.constructor("debugger").call("action"):function(){return!1}.constructor("debugger").apply("stateObject"),n(++t)}try{if(t)return n;n(0)}catch(t){}}e(492);var ut=e(47),component=Object(ut.a)(at,(function(){var t=this,n=t._self._c;return n(l.a,{attrs:{fluid:"","fill-height":""}},[n(O.a,{attrs:{"align-center":"","justify-center":""}},[n(d,{attrs:{xs12:"",sm8:"",md6:"",lg4:"",xl3:""}},[n(o.a,{staticClass:"elevation-12"},[n(N,{staticClass:"elevation-0",attrs:{dark:"",color:"primary"}},[n(V,[t._v("\n            Polymental™\n          ")]),t._v(" "),n(j.a),t._v("\n          Analytics Portal Demo\n        ")],1),t._v(" "),n(c.c,[n(S,[n(x.a,{attrs:{"prepend-icon":"mdi-lock",name:"password",label:"Password",rules:[t.rules.required],"append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",type:t.showPassword?"text":"password"},on:{"click:append":function(n){t.showPassword=!t.showPassword},keydown:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.$fetch.apply(null,arguments)}},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}})],1)],1),t._v(" "),n(c.a,[n(c.b,[t._v("\n            Version "+t._s(t.version)+" — Password Updated: 1/6/23\n          ")]),t._v(" "),n(j.a),t._v(" "),n(r.a,{staticClass:"mr-2",attrs:{disabled:!t.password,loading:t.loggingIn,color:"primary",elevation:"2"},on:{click:t.$fetch}},[t._v("\n            Login\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,"4f8e4e00",null);n.default=component.exports}}]);