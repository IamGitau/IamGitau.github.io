(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{246:function(e,t,r){"use strict";r.r(t);r(16),r(42),r(29),r(53),r(54),r(47),r(30);var n=r(18),c=r(1),o=r(24);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var f=c.a.extend({computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)(["email"]))}),m=r(9),component=Object(m.a)(f,(function(){var e=this.$createElement;return(this._self._c||e)("a",{staticClass:"px-5 py-2 mt-5 font-bold tracking-wide text-center text-white transition-colors duration-300 bg-green-500 border-2 border-green-500 rounded-lg shadow select-none hover:bg-transparent hover:border-green-500 hover:shadow-md",attrs:{href:"mailto:"+this.email,rel:"noopener noreferrer"}},[this._v("\n  Send mail\n")])}),[],!1,null,null,null);t.default=component.exports},264:function(e,t,r){"use strict";r.r(t);r(16),r(42),r(29),r(53),r(54),r(47),r(30);var n=r(18),c=r(1),o=r(24);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=c.a.extend({name:"Contact",data:function(){return{headers:{description:"You can contact me directly through my personal email. Also feel free to write me a direct message using the contact page",title:"CONTACT ME — A Full stack web developer",image:"/breakfast-dark.svg"},links:[{name:"Github",url:"https://github.com/IAmGitau"},{name:"Twitter",url:"https://twitter.com/_gitau_"},{name:"LinkedIn",url:"https://www.linkedin.com/in/joseph-gitau-2415a41a6/"}]}},computed:f({},Object(o.c)(["c_head","email"])),mounted:function(){this.changeHeader()},methods:f(f({},Object(o.b)(["changeTD"])),{},{changeHeader:function(){this.changeTD(this.headers)},validateEmail:function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}}),head:function(){return this.c_head}}),d=r(9),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"flex flex-col items-start justify-center w-full h-full space-y-4 space-y-16 text-white"},[r("div",{staticClass:"flex flex-col items-start justify-center"},[r("p",{staticClass:"text-sm leading-8 tracking-wide sm:leading-normal sm:tracking-normal sm:text-lg"},[e._v("\n      You can contact me directly through my personal email.\n    ")]),e._v(" "),r("email")],1),e._v(" "),r("div",{staticClass:"flex flex-col items-start justify-center"},[r("p",{staticClass:"tracking-wider underline opacity-50"},[e._v("Other links")]),e._v(" "),r("ul",{staticClass:"flex flex-col items-start justify-between mt-5 space-y-2"},e._l(e.links,(function(link){return r("li",{key:link.name},[r("a",{staticClass:"transition-colors duration-300 hover:opacity-75",attrs:{href:link.url,rel:"noreferrer noopenner",target:"_blank"}},[e._v("\n          "+e._s(link.name)+"\n        ")])])})),0)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Email:r(246).default})}}]);