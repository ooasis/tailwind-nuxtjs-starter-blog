(window.webpackJsonp=window.webpackJsonp||[]).push([[15,2,6,8,11],{243:function(t,e,r){"use strict";r.r(e);var n={props:{article:{type:Object,required:!0}}},l=r(13),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-wrap"},t._l(t.article.tags,(function(e){return r("NuxtLink",{key:t.article.title+"-"+e,staticClass:"\n      mr-3\n      text-sm\n      font-medium\n      text-blue-500\n      uppercase\n      hover:text-blue-600\n      dark:hover:text-blue-400\n    ",attrs:{to:"/tag/"+e}},[t._v("\n    "+t._s(e)+"\n  ")])})),1)}),[],!1,null,null,null);e.default=component.exports},245:function(t,e,r){"use strict";r.r(e);var n={props:{article:{type:Object,required:!0}}},l=r(13),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400"},[r("time",{attrs:{dateTime:t.article.updatedAt}},[t._v("\n    "+t._s(new Date(t.article.updatedAt).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"}))+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},249:function(t,e,r){"use strict";r.r(e);var n={props:{prev:{type:Object,required:!0},next:{type:Object,required:!0}}},l=r(13),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"\n    text-sm\n    font-medium\n    leading-5\n    divide-gray-200\n    xl:divide-y\n    dark:divide-gray-700\n    xl:col-start-1 xl:row-start-2\n  "},[r("div",{staticClass:"flex justify-between py-4 xl:block xl:space-y-8 xl:py-8"},[t.prev?r("div",[r("h2",{staticClass:"\n          text-xs\n          tracking-wide\n          text-gray-500\n          uppercase\n          dark:text-gray-400\n        "},[t._v("\n        Previous Article\n      ")]),t._v(" "),r("div",{staticClass:"text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"},[r("NuxtLink",{attrs:{to:"/blog/"+t.prev.slug}},[t._v(t._s(t.$shortenTitle(t.prev.title,200)))])],1)]):t._e(),t._v(" "),t.next?r("div",[r("h2",{staticClass:"\n          text-xs\n          tracking-wide\n          text-gray-500\n          uppercase\n          dark:text-gray-400\n        "},[t._v("\n        Next Article\n      ")]),t._v(" "),r("div",{staticClass:"text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"},[r("NuxtLink",{attrs:{to:"/blog/"+t.next.slug}},[t._v(t._s(t.$shortenTitle(t.next.title,200)))])],1)]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},264:function(t,e,r){"use strict";r.r(e);var n={props:{article:{type:Object,required:!0},prev:{type:Object,required:!0},next:{type:Object,required:!0}}},l=r(13),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6",staticStyle:{"grid-template-rows":"auto 1fr"}},[r("dl",{staticClass:"xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700"},[r("dt",[r("div",{staticClass:"\n          text-sm\n          font-medium\n          leading-5\n          divide-gray-200\n          xl:divide-y\n          dark:divide-gray-700\n          xl:col-start-1 xl:row-start-2\n        "},[r("div",{staticClass:"py-4 xl:py-4"},[r("h2",{staticClass:"\n              text-xs\n              tracking-wide\n              text-gray-500\n              uppercase\n              dark:text-gray-400\n            "},[t._v("\n            Tags\n          ")]),t._v(" "),r("tags",{attrs:{article:t.article}})],1)])]),t._v(" "),t._m(0)]),t._v(" "),r("div",{staticClass:"\n      divide-y divide-gray-200\n      dark:divide-gray-700\n      xl:pb-0 xl:col-span-3 xl:row-span-2\n    "},[r("div",{staticClass:"pt-10 pb-0 prose dark:prose-dark max-w-none"},[r("nuxt-content",{attrs:{document:t.article}})],1)]),t._v(" "),r("footer",[r("prev-next-article",{attrs:{prev:t.prev,next:t.next}}),t._v(" "),r("div",{staticClass:"pt-4 xl:pt-8"},[r("NuxtLink",{staticClass:"text-blue-500 hover:text-blue-600 dark:hover:text-blue-400",attrs:{to:"/blogs"}},[t._v("\n        ← Back to the blogs\n      ")])],1)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("dd",[e("ul",{staticClass:"\n          flex\n          justify-center\n          pt-6\n          space-x-8\n          xl:block\n          sm:space-x-12\n          xl:space-x-0 xl:space-y-8\n        "},[e("li",{staticClass:"flex items-center space-x-2"},[e("dl",{staticClass:"text-sm font-medium leading-5 whitespace-nowrap"},[e("dd",{staticClass:"text-gray-900 dark:text-gray-100"})])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Tags:r(243).default,PrevNextArticle:r(249).default,Footer:r(127).default})},285:function(t,e,r){"use strict";r.r(e);var n=r(19),l=r(6),c=(r(43),{asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l,article,c,d,x,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,l=t.params,e.next=3,r("blog",l.slug).fetch();case 3:return article=e.sent,e.next=6,r("blog").only(["title","slug"]).sortBy("updatedAt","desc").surround(l.slug).fetch();case 6:return c=e.sent,d=Object(n.a)(c,2),x=d[0],o=d[1],e.abrupt("return",{article:article,prev:x,next:o});case 11:case"end":return e.stop()}}),e)})))()},head:function(){return this.$seo({title:this.article.title})}}),d=r(13),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("article",[r("div",{staticClass:"xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700"},[r("header",{staticClass:"pt-6 xl:pb-6"},[r("div",{staticClass:"space-y-1 text-center"},[r("dl",{staticClass:"space-y-10"},[r("div",[r("dt",{staticClass:"sr-only"},[t._v("Published on")]),t._v(" "),r("dd",[r("formatted-date",{attrs:{article:t.article}})],1)])]),t._v(" "),r("div",[r("h1",{staticClass:"\n                text-3xl\n                font-extrabold\n                leading-9\n                tracking-tight\n                text-gray-900\n                dark:text-gray-100\n                sm:text-4xl sm:leading-10\n                md:text-5xl md:leading-14\n              "},[t._v("\n              "+t._s(t.article.title)+"\n            ")])])])]),t._v(" "),r("single-view",{attrs:{article:t.article,prev:t.prev,next:t.next}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FormattedDate:r(245).default,Header:r(129).default,SingleView:r(264).default})}}]);