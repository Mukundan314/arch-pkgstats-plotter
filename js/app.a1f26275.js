(function(e){function a(a){for(var n,o,i=a[0],u=a[1],s=a[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(a);while(d.length)d.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,a=0;a<c.length;a++){for(var t=c[a],n=!0,i=1;i<t.length;i++){var u=t[i];0!==r[u]&&(n=!1)}n&&(c.splice(a--,1),e=o(o.s=t[0]))}return e}var n={},r={app:0},c=[];function o(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=n,o.d=function(e,a,t){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)o.d(t,n,function(a){return e[a]}.bind(null,n));return t},o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="/arch-pkgstats-plotter/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=a,i=i.slice();for(var s=0;s<i.length;s++)a(i[s]);var p=u;c.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";var n=t("85ec"),r=t.n(n);r.a},5364:function(e,a,t){},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("package-list",{model:{value:e.packageNames,callback:function(a){e.packageNames=a},expression:"packageNames"}})],1)},c=[],o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"package-list"},[t("div",{staticClass:"heading"},[e._v("Packages")]),e._l(e.packageNames,(function(a,n){return t("div",{key:a,staticClass:"package"},[t("span",{staticClass:"package-name"},[e._v(e._s(a))]),t("button",{on:{click:function(a){return e.removePackage(n)}}},[e._v("remove")])])})),t("form",{staticClass:"package",on:{submit:function(a){return a.preventDefault(),e.addPackage(a)}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.addPackageName,expression:"addPackageName"}],staticClass:"package-name",attrs:{placeholder:"Package"},domProps:{value:e.addPackageName},on:{input:function(a){a.target.composing||(e.addPackageName=a.target.value)}}}),t("button",[e._v("add")])])],2)},i=[],u=(t("99af"),t("4de4"),t("caad"),t("d3b7"),t("6062"),t("2532"),t("3ca3"),t("ddb0"),t("2909")),s={model:{prop:"packageNames"},props:{packageNames:{type:Array,default:function(){return[]},validator:function(e){return new Set(e).size===e.length}}},data:function(){return{addPackageName:""}},methods:{addPackage:function(){this.packageNames.includes(this.addPackageName)||(this.$emit("input",[].concat(Object(u["a"])(this.packageNames),[this.addPackageName])),this.addPackageName="")},removePackage:function(e){this.$emit("input",this.packageNames.filter((function(a,t){return t!==e})))}}},p=s,l=(t("f3d7"),t("2877")),d=Object(l["a"])(p,o,i,!1,null,"59a5ae51",null),f=d.exports,g={name:"App",data:function(){return{packageNames:[]}},components:{PackageList:f}},m=g,v=(t("034f"),Object(l["a"])(m,r,c,!1,null,null,null)),k=v.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(k)}}).$mount("#app")},"85ec":function(e,a,t){},f3d7:function(e,a,t){"use strict";var n=t("5364"),r=t.n(n);r.a}});
//# sourceMappingURL=app.a1f26275.js.map