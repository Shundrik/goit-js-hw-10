!function(){function n(n){return n&&n.__esModule?n.default:n}var t,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(n){return n&&n.constructor===Symbol?"symbol":typeof n};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),p=Object.prototype.toString,d=Math.max,v=Math.min,y=function(){return s.Date.now()};function g(t){var e=void 0===t?"undefined":n(o)(t);return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(o)(t))||function(n){return!!n&&"object"==typeof n}(t)&&"[object Symbol]"==p.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var f=u.test(t);return f||c.test(t)?a(t.slice(2),f?2:8):r.test(t)?NaN:+t}t=function(n,t,e){var o,i,r,u,c,a,f=0,l=!1,s=!1,p=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function b(t){var e=o,r=i;return o=i=void 0,f=t,u=n.apply(r,e)}function h(n){return f=n,c=setTimeout(T,t),l?b(n):u}function j(n){var e=n-a;return void 0===a||e>=t||e<0||s&&n-f>=r}function T(){var n=y();if(j(n))return O(n);c=setTimeout(T,function(n){var e=t-(n-a);return s?v(e,r-(n-f)):e}(n))}function O(n){return c=void 0,p&&o?b(n):(o=i=void 0,u)}function w(){var n=y(),e=j(n);if(o=arguments,i=this,a=n,e){if(void 0===c)return h(a);if(s)return c=setTimeout(T,t),b(a)}return void 0===c&&(c=setTimeout(T,t)),u}return t=m(t)||0,g(e)&&(l=!!e.leading,r=(s="maxWait"in e)?d(m(e.maxWait)||0,t):r,p="trailing"in e?!!e.trailing:p),w.cancel=function(){void 0!==c&&clearTimeout(c),f=0,o=a=i=c=void 0},w.flush=function(){return void 0===c?u:O(y())},w};var b={input:document.querySelector("input"),countryList:document.querySelector(".country-list"),countryInfo:document.querySelector(".country-info")};b.input.addEventListener("input",n(t)((function(n){var t,e=n.target.value;t=e,console.log(t),fetch("https://restcountries.com/v2/name/".concat(t,"?capital,population,flags,languages;")).then((function(n){return console.log(n),n.json()})).then((function(n){return console.log(n),n.map((function(n,t){var e=n.name,o=n.capital,i=n.population,r=n.flags.svg,u=n.languages;return'<div  style="display:flex; align-items: center; gap: 15px ">\n               <img src="'.concat(r,'" alt="').concat(e,'" height="60" "> \n                <h1>').concat(e,"</h1>\n                          </div>\n                            <ul>\n                              <li><p>capital: <span>").concat(o,"</span></p></li>\n                              <li><p>population: <span>").concat(i,"</span></p></li>\n                              <li><p>languages: <span>").concat(u,"</span></p></li>\n                            </ul>")})).join(" ")})).then((function(n){b.countryInfo.insertAdjacentHTML("afterbegin",n)})).catch((function(){console.log("error")}))}),300))}();
//# sourceMappingURL=index.005ecde6.js.map
