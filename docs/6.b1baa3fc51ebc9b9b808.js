webpackJsonp([6],{1110:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=u(n(0)),i=function(e){function t(e){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),o(t,[{key:"render",value:function(){var e=this,t=this.props.height;return t<600&&(t=600),c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"chequer-logo"},c.default.createElement("span",{className:"chi-chequer-full"})),c.default.createElement("table",{style:{height:t-100}},c.default.createElement("tbody",null,c.default.createElement("tr",null,c.default.createElement("td",null,c.default.createElement("div",{"data-page-content":"company"},c.default.createElement("h1",null,"WE LEAD TECHNOLOGIES"),c.default.createElement("article",null,c.default.createElement("p",{className:""},"We believe that technologies change the world better and we put our efforts in it. We make high-quality software you've dreamed to work on with the newest technologies.")),c.default.createElement("p",{className:"h1Label"},"OUR PRODUCT PROVOKE YOUR SUCCESS BUSINESS")))))),c.default.createElement("div",{className:"footer"},c.default.createElement("a",{onClick:function(t){return e.props.goPage("company-vision")}},c.default.createElement("span",{className:"chi-mouse"}))))}}]),t}(c.default.Component);t.default=i}});