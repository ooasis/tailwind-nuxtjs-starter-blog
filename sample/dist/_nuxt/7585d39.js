(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{265:function(e,r,t){"use strict";t.r(r);var n=t(6),o=(t(43),t(34),t(126),{props:{onUpdate:{type:Function,required:!0}},data:function(){return{searchQuery:""}},watch:{searchQuery:function(e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$content("blog").only(["title","description","tags","slug","updatedAt"]).sortBy("updatedAt","desc").search(e).fetch();case 2:n=t.sent,r.onUpdate(n,r.searchQuery);case 4:case"end":return t.stop()}}),t)})))()}}}),c=t(13),component=Object(c.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"pt-6 pb-8 space-y-2 md:space-y-5"},[t("div",{staticClass:"relative max-w-lg"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"\n        block\n        w-full\n        px-4\n        py-2\n        text-gray-900\n        bg-white\n        border border-gray-300\n        rounded-md\n        dark:border-gray-900\n        focus:ring-blue-500 focus:border-blue-500\n        dark:bg-gray-800 dark:text-gray-100\n      ",attrs:{type:"search",autocomplete:"off","aria-label":"Search articles",placeholder:"Search articles"},domProps:{value:e.searchQuery},on:{input:function(r){r.target.composing||(e.searchQuery=r.target.value)}}}),e._v(" "),t("svg",{staticClass:"absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"{2}",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}})])])])}),[],!1,null,null,null);r.default=component.exports}}]);