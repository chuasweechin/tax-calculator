!function(e){function t(t){for(var r,u,l=t[0],c=t[1],i=t[2],s=0,p=[];s<l.length;s++)u=l[s],o[u]&&p.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(t);p.length;)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={0:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var f=c;a.push([165,1]),n()}({165:function(e,t,n){e.exports=n(476)},476:function(e,t,n){"use strict";n.r(t),n(166),n(368),n(479);var r=n(2),o=n.n(r),a=n(164),u=n.n(a),l=n(77),c=n.n(l),i=n(484),f=n.n(i);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(){function e(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),function(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,y(e).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(e,o.a.Component),function(e,t,n){t&&p(e.prototype,t)}(e,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("span",{className:f.a.label+" "},"Your Monthly Income (IDR$):"),o.a.createElement("form",{onSubmit:function(t){e.props.calculateTaxHandler(t)},className:f.a.calculator+" form-group"},o.a.createElement("input",{name:"income",type:"number",defaultValue:"25000000",className:"form-control"}),o.a.createElement("button",{type:"submit",className:f.a.calculatorButton+" btn btn-primary"},"Calculate Tax Rate")))}}]),e}();m.propTypes={calculateTaxHandler:c.a.func.isRequired};var d=m,h=n(486),v=n.n(h);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(){function e(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),function(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,E(e).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(e,o.a.Component),function(e,t,n){t&&O(e.prototype,t)}(e,[{key:"render",value:function(){function e(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}return o.a.createElement("div",null,o.a.createElement("table",{className:v.a.income+" table table-striped table-bordered"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{scope:"col"}),o.a.createElement("th",{scope:"col"},"Taxable Amount (IDR$)"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Your Monthly Tax on this Income"),o.a.createElement("td",null,"$",e(this.props.result/12))),o.a.createElement("tr",null,o.a.createElement("td",null,"Your Annual Tax on this Income"),o.a.createElement("td",null,"$",e(this.props.result))))))}}]),e}();g.propTypes={result:c.a.number.isRequired};var j=g,S=n(488),x=n.n(S);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var C=function(){function e(){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),(t=function(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}(this,N(e).call(this))).state={result:0},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(e,o.a.Component),function(e,t,n){t&&T(e.prototype,t)}(e,[{key:"calculateTaxHandler",value:function(e){e.preventDefault();for(var t=0,n=12*e.target.income.value,r=[{previous:0,from:0,to:5e7,rate:.05},{previous:5e7,from:50000001,to:25e7,rate:.15},{previous:25e7,from:250000001,to:5e8,rate:.25},{previous:5e8,from:500000001,to:1/0,rate:.3}],o=0;o<r.length;o++)n>r[o].to&&(t+=(r[o].to-r[o].previous)*r[o].rate),n>r[o].from&&n<r[o].to&&(t+=(n-r[o].previous)*r[o].rate);this.setState({result:t})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:x.a.header},o.a.createElement("h2",null,"Tax Calculator")),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement(d,{calculateTaxHandler:function(t){e.calculateTaxHandler(t)}})),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-5"},o.a.createElement(j,{result:this.state.result})))))}}]),e}();u.a.render(o.a.createElement(C,null),document.getElementById("app"))},484:function(e,t){e.exports={label:"styles_label_2e33c",calculator:"styles_calculator_febd3",calculatorButton:"styles_calculatorButton_4368c"}},486:function(e,t){e.exports={income:"styles_income_1b2cd"}},488:function(e,t){e.exports={header:"styles_header_e147e"}}});