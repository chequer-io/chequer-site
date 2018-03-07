webpackJsonp([6],{"./src/pages/Company.tsx":function(module,exports,__webpack_require__){"use strict";eval('/* WEBPACK VAR INJECTION */(function(module) {\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n(function () {\n    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar __importDefault = undefined && undefined.__importDefault || function (mod) {\n    return mod && mod.__esModule ? mod : { "default": mod };\n};\nObject.defineProperty(exports, "__esModule", { value: true });\nvar react_1 = __importDefault(__webpack_require__("./node_modules/react/index.js"));\n\nvar Company = function (_react_1$default$Comp) {\n    _inherits(Company, _react_1$default$Comp);\n\n    function Company(props) {\n        _classCallCheck(this, Company);\n\n        return _possibleConstructorReturn(this, (Company.__proto__ || Object.getPrototypeOf(Company)).call(this, props));\n    }\n\n    _createClass(Company, [{\n        key: "render",\n        value: function render() {\n            var _this2 = this;\n\n            var pageMinHeight = this.props.height;\n            if (pageMinHeight < 600) {\n                pageMinHeight = 600;\n            }\n            return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement("div", { className: \'chequer-logo\' }, react_1.default.createElement("span", { className: "chi-chequer-full" })), react_1.default.createElement("table", { style: { height: pageMinHeight - 100 } }, react_1.default.createElement("tbody", null, react_1.default.createElement("tr", null, react_1.default.createElement("td", null, react_1.default.createElement("div", { "data-page-content": "company" }, react_1.default.createElement("h1", null, "WE LEAD TECHNOLOGIES"), react_1.default.createElement("article", null, react_1.default.createElement("p", { className: \'\' }, "We believe that technologies change the world better and we put our efforts in it. We make high-quality software you\'ve dreamed to work on with the newest technologies.")), react_1.default.createElement("p", { className: \'h1Label\' }, "OUR PRODUCT PROVOKE YOUR SUCCESS BUSINESS")))))), react_1.default.createElement("div", { className: \'footer\' }, react_1.default.createElement("a", { onClick: function onClick(e) {\n                    return _this2.props.goPage(\'company-vision\');\n                } }, react_1.default.createElement("span", { className: "chi-mouse" }))));\n        }\n    }, {\n        key: "__reactstandin__regenerateByEval",\n        value: function __reactstandin__regenerateByEval(key, code) {\n            this[key] = eval(code);\n        }\n    }]);\n\n    return Company;\n}(react_1.default.Component);\n\nexports.default = Company;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;\n\n    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(__importDefault, "__importDefault", "/Users/tom/Works-chequer/chequer.io/src/pages/Company.tsx");\n    reactHotLoader.register(react_1, "react_1", "/Users/tom/Works-chequer/chequer.io/src/pages/Company.tsx");\n    reactHotLoader.register(Company, "Company", "/Users/tom/Works-chequer/chequer.io/src/pages/Company.tsx");\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/pages/Company.tsx\n// module id = ./src/pages/Company.tsx\n// module chunks = 6\n\n//# sourceURL=webpack:///./src/pages/Company.tsx?')}});