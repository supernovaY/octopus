(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{396:function(t,e,n){},397:function(t,e,n){},398:function(t,e,n){},399:function(t,e,n){},400:function(t,e,n){},406:function(t,e,n){"use strict";n(396)},407:function(t,e,n){"use strict";n(397)},408:function(t,e,n){"use strict";n(398)},409:function(t,e,n){"use strict";n(399)},410:function(t,e,n){"use strict";n(400)},411:function(t,e,n){"use strict";var s={name:"OctopusSider",data:function(){return{visible:!0}},methods:{}},i=(n(409),n(54)),a=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.visible?n("div",{staticClass:"sider"},[t._t("default"),t._v(" "),n("button",{on:{click:function(e){t.visible=!1}}},[t._v("close")])],2):t._e()])}),[],!1,null,"61551306",null);e.a=a.exports},412:function(t,e,n){"use strict";n(116),n(117),n(80);var s={name:"OctopusLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach((function(e){"GuluSider"===e.$options.name&&(t.layoutClass.hasSider=!0)}))}},i=(n(410),n(54)),a=Object(i.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)}),[],!1,null,"e47cc774",null);e.a=a.exports},413:function(t,e,n){"use strict";n(406);var s=n(54),i=Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)}),[],!1,null,"615a9710",null);e.a=i.exports},414:function(t,e,n){"use strict";n(407);var s=n(54),i=Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)}),[],!1,null,"2e3767b3",null);e.a=i.exports},415:function(t,e,n){"use strict";n(408);var s=n(54),i=Object(s.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)}),[],!1,null,"119b045e",null);e.a=i.exports},518:function(t,e,n){"use strict";n.r(e);var s=n(413),i=n(414),a=n(415),c=n(411),u={components:{"g-layout":n(412).a,"g-sider":c.a,"g-footer":a.a,"g-content":i.a,"g-header":s.a}},l=n(54),o=Object(l.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("g-layout",{staticStyle:{color:"white","margin-bottom":"50px"}},[e("g-header",{staticStyle:{height:"50px",background:"lightskyblue"}},[this._v("\n      header\n    ")]),this._v(" "),e("g-content",{staticStyle:{height:"100px",background:"deepskyblue"}},[this._v("\n      content\n    ")]),this._v(" "),e("g-footer",{staticStyle:{height:"50px",background:"lightskyblue"}},[this._v("\n      footer\n    ")])],1)],1)}),[],!1,null,null,null);e.default=o.exports}}]);