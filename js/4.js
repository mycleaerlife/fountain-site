(window.webpackJsonp=window.webpackJsonp||[]).push([[4,9],{532:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var r=n(1),a=n.n(r),o=n(99);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function y(e,t){return(y=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}var d=[{img:"thumb-1"},{img:"thumb-2"},{img:"thumb-3"},{img:"thumb-4"},{img:"thumb-5"},{img:"thumb-6"}],h=function(e){function t(e){var n;return c(this,t),(n=u(this,p(t).call(this,e))).handleGoService=function(e){sessionStorage&&sessionStorage.setItem("ty-fountain-project",e)},n.goServiceDetail=function(e){n.handleGoService(e||o.a.projectsData[0].title);var t=n.props.setProps;if(t)t(e);else{var r=window.location.origin;window.location.href="".concat(r,"/#/project")}},n.state={},n}return m(t,e),s(t,[{key:"render",value:function e(){var t=this,n=o.a.projectsData;return a.a.createElement("div",{className:"pt100"},a.a.createElement("p",{className:"page-title",onClick:function e(){return t.goServiceDetail()}},"Recent Projects"),a.a.createElement("div",{style:v.container},a.a.createElement("div",{style:v.silder,className:"w1200 main-wrapper"},n.map(function(e,n){return a.a.createElement("span",{className:"dib",style:v.wrapper},a.a.createElement("div",{key:n,style:v.item,className:"".concat(e.thumb),onClick:function n(){return t.goServiceDetail(e.title)}}),a.a.createElement("h3",{style:v.title},e.title))}))))}}]),t}(r.Component);h.displayName="Feature",h.propTypes={},h.defaultProps={};var v={container:{padding:"80px 0",background:"#F6F7F9"},wrapper:{width:"260px",margin:"10px",verticalAlign:"top",cursor:"pointer"},title:{whiteSpace:"normal"},item:{width:"260px",height:"220px"},silder:{overflowX:"auto",whiteSpace:"nowrap"}}},552:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return C});var r=n(228),a=n(101),o=n(1),i=n.n(o),c=n(532),l=n(154),s=n.n(l),u=n(151),f=n(152),p=n(99),m=n(153),y=n(199),d=n.n(y),h=n(200),v=n.n(h),b=n(198),w=n.n(b);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t,n){return t&&S(e.prototype,t),n&&S(e,n),e}function j(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?N(e):t}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function O(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}function k(e,t){return(k=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}var _=a.a.Row,D=a.a.Col,C=function(e){function t(e){var n;return E(this,t),(n=j(this,P(t).call(this,e))).setActiveKey=function(){return sessionStorage&&sessionStorage.getItem("ty-fountain-project")||p.a.projectsData[0].title},n.getShowData=function(e){return p.a.projectsData.filter(function(t){return t.title===e})[0]||{}},n.renderPagination=function(e){var t=n.state.index;if(1!==e)return Array.from({length:e}).map(function(e,r){var a=t===r?"active":"";return i.a.createElement("span",{className:"page-dot ".concat(a),key:r,onClick:function e(){return n.setState({index:r})}})})},n.setProps=function(e){e!==n.activeKey&&(n.activeKey=e,n.setState({showData:n.getShowData(n.activeKey),index:0})),n.ref.scrollIntoView()},n.toNext=function(e){var t=n.state.index;t===e-1?n.setState({index:0}):n.setState({index:t+1})},n.toPre=function(e){var t=n.state.index;0===t?n.setState({index:e-1}):n.setState({index:t-1})},n.activeKey=n.setActiveKey(),n.state={index:0,showData:n.getShowData(n.activeKey)},n}return O(t,e),x(t,[{key:"componentDidMount",value:function e(){this.ref.scrollIntoView()}},{key:"componentWillReceiveProps",value:function e(t){t.location.search!==this.props.location.search&&(this.setState({activeKey:this.setActiveKey()}),this.ref.scrollIntoView())}},{key:"render",value:function e(){var t=this,n=this.state,r=n.index,a=n.showData,o=a.imgs||[],l=o.length;return i.a.createElement("div",null,i.a.createElement(u.a,null),i.a.createElement("div",null,i.a.createElement("div",{className:"project-head light-bg",ref:function e(n){return t.ref=n}},i.a.createElement("span",{className:"project-title"},a.title),i.a.createElement(_,{wrap:!0,className:"w960 main-wrapper mt16"},i.a.createElement(D,{xxs:"12",s:"8",l:"8"},i.a.createElement(m.a,{icon:h.faClock,className:"icon"}),i.a.createElement("span",{className:"ft16"},a.time)),i.a.createElement(D,{xxs:"12",s:"8",l:"8"},i.a.createElement(m.a,{icon:y.faLocationArrow,className:"icon"}),i.a.createElement("span",{className:"ft16"},a.location)),a.feature&&i.a.createElement(D,{xxs:"12",s:"8",l:"8"},i.a.createElement(m.a,{icon:b.faPalette,className:"icon"}),i.a.createElement("span",{className:"ft16"},a.feature)))),i.a.createElement("div",{className:"project-content"},i.a.createElement("div",{className:"slider-wrapper w1300 main-wrapper"},i.a.createElement(s.a,{index:r,containerStyle:{height:"100%"},className:"project-detail-slider"},o.map(function(e){return i.a.createElement("div",{key:e,className:"service-detail-img ".concat(e)})})),i.a.createElement("div",{className:"pre-icon",onClick:function e(){return t.toPre(l)}}),i.a.createElement("div",{className:"next-icon",onClick:function e(){return t.toNext(l)}}),i.a.createElement("div",{className:"pagination"},this.renderPagination(o.length))))),i.a.createElement(c.default,{setProps:this.setProps}),i.a.createElement(f.a,null))}}]),t}(o.Component);C.displayName="ProjectDetail"}}]);