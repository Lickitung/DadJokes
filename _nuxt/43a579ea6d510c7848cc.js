(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{184:function(e,t,n){"use strict";n.r(t);n(35);var o,r=n(5),c=n(154),d=n.n(c),l={data:function(){return{joke:{}}},created:(o=Object(r.a)(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Accept:"application/json"}},e.prev=1,e.next=4,d.a.get("https://icanhazdadjoke.com/j/".concat(this.$route.params.id),t);case 4:n=e.sent,this.joke=n.data.joke,console.log(this.joke),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}},e,this,[[1,9]])})),function(){return o.apply(this,arguments)}),head:function(){return{title:this.joke,meta:[{hid:"description",name:"description",content:"Best place for corny dad jokes"}]}}},h=n(12),component=Object(h.a)(l,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nuxt-link",{attrs:{to:"/jokes"}},[e._v("Back To jokes")]),e._v(" "),n("h2",[e._v(e._s(e.joke))]),e._v(" "),n("hr"),e._v(" "),n("small",[e._v("Joke ID: "+e._s(e.$route.params.id))])],1)},[],!1,null,"7af0f4fa",null);t.default=component.exports}}]);