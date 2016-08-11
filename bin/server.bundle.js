/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var express = __webpack_require__(1);
	var app = express();
	var index = __webpack_require__(2);
	app.use('/bin', express.static('./bin'));
	app.use('/stylesheets', express.static('./public/stylesheets'));

	app.use('/*', index);

	app.listen(3001, function () {
		console.log('Hello World listening on port 3001!');
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _server = __webpack_require__(3);

	var _reactRouter = __webpack_require__(4);

	var _routes = __webpack_require__(5);

	var _routes2 = _interopRequireDefault(_routes);

	var _index = __webpack_require__(39);

	var _index2 = _interopRequireDefault(_index);

	var _redux = __webpack_require__(40);

	var _reactRedux = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var express = __webpack_require__(1);
	var router = express.Router();
	var path = __webpack_require__(42);

	var React = __webpack_require__(6);

	router.get('/', function (req, res) {
	  (0, _reactRouter.match)({ routes: _routes2.default, location: req.originalUrl }, function (error, redirectLocation, renderProps) {
	    if (error) {
	      res.status(500).send(error.message);
	    } else if (redirectLocation) {
	      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	    } else if (renderProps) {
	      // You can also check renderProps.components or renderProps.routes for
	      // your "not found" component or route respectively, and send a 404 as
	      // below, if you're using a catch-all route.

	      var store = (0, _redux.createStore)(_index2.default);

	      var html = (0, _server.renderToString)(React.createElement(
	        _reactRedux.Provider,
	        { store: store },
	        React.createElement(_reactRouter.RouterContext, renderProps)
	      ));

	      var finalState = store.getState();

	      res.status(200).send(renderFullPage(html, finalState));
	    } else {
	      res.status(404).send('Not found');
	    }
	  });
	});

	function renderFullPage(html, initialState) {
	  return '\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n    \t<!-- Required meta tags always come first -->\n    \t<meta charset="utf-8">\n    \t<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n    \t<meta http-equiv="x-ua-compatible" content="ie=edge">\n\n    \t<!-- Bootstrap CSS -->\n    \t<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.3/css/bootstrap.min.css">\n\t\t<link rel="stylesheet" href="//code.jquery.com/ui/1.12.0/themes/base/jquery-ui.css">\n    \t<link rel="stylesheet" href="../stylesheets/main.css">\n        <link rel="stylesheet" href="../stylesheets/style.css">\n        <link href="../stylesheets/dist/css/bootstrap-material-design.css" rel="stylesheet">\n        <link href="../stylesheets/dist/css/ripples.min.css" rel="stylesheet">\n    </head>\n    <body>\n\n    \t<div id="reactbody"><div>' + html + '</div></div>\n        <script>\n            window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + '\n          </script>\n    \t<script src="../bin/app.bundle.js"></script>\n    \t<!-- jQuery first, then Bootstrap JS. -->\n    \t<script src="https://www.atlasestateagents.co.uk/javascript/tether.min.js"></script>\n    \t<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>\n    \t<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.3/js/bootstrap.min.js"></script>\n\t\t<script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>\n\n        \n    </body>\n    </html>\n    ';
	}

	module.exports = router;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	var _require_email = __webpack_require__(7);

	var _require_email2 = _interopRequireDefault(_require_email);

	var _header = __webpack_require__(9);

	var _header2 = _interopRequireDefault(_header);

	var _intro = __webpack_require__(10);

	var _intro2 = _interopRequireDefault(_intro);

	var _page = __webpack_require__(15);

	var _page2 = _interopRequireDefault(_page);

	var _page3 = __webpack_require__(16);

	var _page4 = _interopRequireDefault(_page3);

	var _page5 = __webpack_require__(18);

	var _page6 = _interopRequireDefault(_page5);

	var _page7 = __webpack_require__(19);

	var _page8 = _interopRequireDefault(_page7);

	var _page9 = __webpack_require__(20);

	var _page10 = _interopRequireDefault(_page9);

	var _page11 = __webpack_require__(21);

	var _page12 = _interopRequireDefault(_page11);

	var _page13 = __webpack_require__(22);

	var _page14 = _interopRequireDefault(_page13);

	var _page15 = __webpack_require__(24);

	var _page16 = _interopRequireDefault(_page15);

	var _page17 = __webpack_require__(25);

	var _page18 = _interopRequireDefault(_page17);

	var _page19 = __webpack_require__(26);

	var _page20 = _interopRequireDefault(_page19);

	var _page21 = __webpack_require__(27);

	var _page22 = _interopRequireDefault(_page21);

	var _page23 = __webpack_require__(28);

	var _page24 = _interopRequireDefault(_page23);

	var _page25 = __webpack_require__(29);

	var _page26 = _interopRequireDefault(_page25);

	var _page27 = __webpack_require__(31);

	var _page28 = _interopRequireDefault(_page27);

	var _page29 = __webpack_require__(32);

	var _page30 = _interopRequireDefault(_page29);

	var _page31 = __webpack_require__(33);

	var _page32 = _interopRequireDefault(_page31);

	var _page33 = __webpack_require__(34);

	var _page34 = _interopRequireDefault(_page33);

	var _page35 = __webpack_require__(35);

	var _page36 = _interopRequireDefault(_page35);

	var _page37 = __webpack_require__(36);

	var _page38 = _interopRequireDefault(_page37);

	var _page39 = __webpack_require__(37);

	var _page40 = _interopRequireDefault(_page39);

	var _page41 = __webpack_require__(38);

	var _page42 = _interopRequireDefault(_page41);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/', component: _header2.default },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _intro2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/page1', component: (0, _require_email2.default)(_page2.default) }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page2', component: (0, _require_email2.default)(_page4.default) }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page3', component: (0, _require_email2.default)(_page6.default) }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page4', component: (0, _require_email2.default)(_page8.default) }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page5', component: (0, _require_email2.default)(_page10.default) }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page6', component: (0, _require_email2.default)(_page12.default) }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page7', component: (0, _require_email2.default)(_page14.default) }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page8', component: (0, _require_email2.default)(_page16.default) }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page9', component: (0, _require_email2.default)(_page18.default) }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page10', component: (0, _require_email2.default)(_page20.default) }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page11', component: (0, _require_email2.default)(_page22.default) }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page12', component: (0, _require_email2.default)(_page24.default) }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page13', component: (0, _require_email2.default)(_page26.default) }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page14', component: (0, _require_email2.default)(_page28.default) }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page15', component: (0, _require_email2.default)(_page30.default) }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page16', component: (0, _require_email2.default)(_page32.default) }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page17', component: (0, _require_email2.default)(_page34.default) }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page18', component: (0, _require_email2.default)(_page36.default) }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page19', component: (0, _require_email2.default)(_page38.default) }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page20', component: _page40.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page21', component: _page42.default })
	    )
	);

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = function (ComposedComponent) {
	  var Authentication = function (_Component) {
	    _inherits(Authentication, _Component);

	    function Authentication() {
	      _classCallCheck(this, Authentication);

	      return _possibleConstructorReturn(this, Object.getPrototypeOf(Authentication).apply(this, arguments));
	    }

	    _createClass(Authentication, [{
	      key: 'componentWillMount',
	      value: function componentWillMount() {
	        if (!this.props.pageReducers.credentials) {
	          this.context.router.push('/');
	        }
	      }
	    }, {
	      key: 'componentWillUpdate',
	      value: function componentWillUpdate(nextProps) {
	        if (!nextProps.pageReducers.credentials) {
	          this.context.router.push('/');
	        }
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        return _react2.default.createElement(ComposedComponent, this.props);
	      }
	    }]);

	    return Authentication;
	  }(_react.Component);

	  Authentication.contextTypes = {
	    router: _react2.default.PropTypes.object
	  };


	  function mapStateToProps(state) {
	    return { pageReducers: state.pageReducers };
	  }

	  return (0, _reactRedux.connect)(mapStateToProps)(Authentication);
	};

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
					value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_Component) {
					_inherits(Header, _Component);

					function Header() {
									_classCallCheck(this, Header);

									return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
					}

					_createClass(Header, [{
									key: 'render',
									value: function render() {
													return _react2.default.createElement(
																	'div',
																	null,
																	_react2.default.createElement(
																					'div',
																					{ className: 'container-fluid customTop' },
																					_react2.default.createElement(
																									'h1',
																									{ className: 'text-xs-center' },
																									'London Office Design for the Future'
																					)
																	),
																	this.props.children,
																	_react2.default.createElement(
																					'nav',
																					{ 'aria-label': 'Page navigation', style: { textAlign: 'center' } },
																					_react2.default.createElement(
																									'ul',
																									{ className: 'pagination' },
																									_react2.default.createElement(
																													'li',
																													{ className: 'page-item' },
																													_react2.default.createElement(
																																	_reactRouter.Link,
																																	{ className: 'page-link', to: '/page1' },
																																	'1'
																													)
																									),
																									_react2.default.createElement(
																													'li',
																													{ className: 'page-item' },
																													_react2.default.createElement(
																																	_reactRouter.Link,
																																	{ className: 'page-link', to: '/page2' },
																																	'2'
																													)
																									),
																									_react2.default.createElement(
																													'li',
																													{ className: 'page-item' },
																													_react2.default.createElement(
																																	_reactRouter.Link,
																																	{ className: 'page-link', to: '/page3' },
																																	'3'
																													)
																									),
																									_react2.default.createElement(
																													'li',
																													{ className: 'page-item' },
																													_react2.default.createElement(
																																	_reactRouter.Link,
																																	{ className: 'page-link', to: '/page4' },
																																	'4'
																													)
																									),
																									_react2.default.createElement(
																													'li',
																													{ className: 'page-item' },
																													_react2.default.createElement(
																																	_reactRouter.Link,
																																	{ className: 'page-link', to: '/page5' },
																																	'5'
																													)
																									),
																									_react2.default.createElement(
																													'li',
																													{ className: 'page-item' },
																													_react2.default.createElement(
																																	_reactRouter.Link,
																																	{ className: 'page-link', to: '/page6' },
																																	'6'
																													)
																									),
																									_react2.default.createElement(
																													'li',
																													{ className: 'page-item' },
																													_react2.default.createElement(
																																	_reactRouter.Link,
																																	{ className: 'page-link', to: '/page7' },
																																	'7'
																													)
																									),
																									_react2.default.createElement(
																													'li',
																													{ className: 'page-item' },
																													_react2.default.createElement(
																																	_reactRouter.Link,
																																	{ className: 'page-link', to: '/page8' },
																																	'8'
																													)
																									),
																									_react2.default.createElement(
																													'li',
																													{ className: 'page-item' },
																													_react2.default.createElement(
																																	_reactRouter.Link,
																																	{ className: 'page-link', to: '/page9' },
																																	'9'
																													)
																									),
																									_react2.default.createElement(
																													'li',
																													{ className: 'page-item' },
																													_react2.default.createElement(
																																	_reactRouter.Link,
																																	{ className: 'page-link', to: '/page10' },
																																	'10'
																													)
																									),
																									_react2.default.createElement(
																													'li',
																													{ className: 'page-item' },
																													_react2.default.createElement(
																																	_reactRouter.Link,
																																	{ className: 'page-link', to: '/page11' },
																																	'11'
																													)
																									),
																									_react2.default.createElement(
																													'li',
																													{ className: 'page-item' },
																													_react2.default.createElement(
																																	_reactRouter.Link,
																																	{ className: 'page-link', to: '/page12' },
																																	'12'
																													)
																									),
																									_react2.default.createElement(
																													'li',
																													{ className: 'page-item' },
																													_react2.default.createElement(
																																	_reactRouter.Link,
																																	{ className: 'page-link', to: '/page13' },
																																	'13'
																													)
																									),
																									_react2.default.createElement(
																													'li',
																													{ className: 'page-item' },
																													_react2.default.createElement(
																																	_reactRouter.Link,
																																	{ className: 'page-link', to: '/page14' },
																																	'14'
																													)
																									),
																									_react2.default.createElement(
																													'li',
																													{ className: 'page-item' },
																													_react2.default.createElement(
																																	_reactRouter.Link,
																																	{ className: 'page-link', to: '/page15' },
																																	'15'
																													)
																									),
																									_react2.default.createElement(
																													'li',
																													{ className: 'page-item' },
																													_react2.default.createElement(
																																	_reactRouter.Link,
																																	{ className: 'page-link', to: '/page16' },
																																	'16'
																													)
																									),
																									_react2.default.createElement(
																													'li',
																													{ className: 'page-item' },
																													_react2.default.createElement(
																																	_reactRouter.Link,
																																	{ className: 'page-link', to: '/page17' },
																																	'17'
																													)
																									),
																									_react2.default.createElement(
																													'li',
																													{ className: 'page-item' },
																													_react2.default.createElement(
																																	_reactRouter.Link,
																																	{ className: 'page-link', to: '/page18' },
																																	'18'
																													)
																									),
																									_react2.default.createElement(
																													'li',
																													{ className: 'page-item' },
																													_react2.default.createElement(
																																	_reactRouter.Link,
																																	{ className: 'page-link', to: '/page19' },
																																	'19'
																													)
																									)
																					)
																	)
													);
									}
					}]);

					return Header;
	}(_react.Component);

	exports.default = Header;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reduxForm = __webpack_require__(11);

	var _page_actions = __webpack_require__(12);

	var _axios = __webpack_require__(13);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Intro = function (_Component) {
	    _inherits(Intro, _Component);

	    function Intro(props) {
	        _classCallCheck(this, Intro);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Intro).call(this, props));

	        _this.state = {
	            users: {}
	        };
	        return _this;
	    }

	    _createClass(Intro, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            _axios2.default.get('https://survey-6242b.firebaseio.com/users.json').then(function (response) {
	                var usersJSON = response.data;

	                _this2.setState({ users: usersJSON });
	            }).catch(function (error) {
	                console.log(error);
	            });
	        }
	    }, {
	        key: 'onSubmit',
	        value: function onSubmit(e) {
	            var users = this.state.users;
	            for (var id in users) {
	                if (users[id] == e.email) {
	                    window.alert("You've already taken the survey");
	                    return;
	                }
	            }
	            this.props.Signin(e);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var _props = this.props;
	            var _props$fields = _props.fields;
	            var email = _props$fields.email;
	            var password = _props$fields.password;
	            var handleSubmit = _props.handleSubmit;

	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'well bs-component' },
	                            _react2.default.createElement(
	                                'fieldset',
	                                null,
	                                _react2.default.createElement(
	                                    'legend',
	                                    null,
	                                    'Login'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-md-12' },
	                                    _react2.default.createElement(
	                                        'form',
	                                        { className: 'form-horizontal', onSubmit: handleSubmit(function (e) {
	                                                return _this3.onSubmit(e);
	                                            }) },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'form-group' },
	                                            _react2.default.createElement(
	                                                'label',
	                                                { className: 'col-md-2 control-label' },
	                                                'Email'
	                                            ),
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'col-md-9' },
	                                                _react2.default.createElement('input', _extends({ type: 'email', className: 'form-control', placeholder: 'name@example.com' }, email))
	                                            ),
	                                            email.touched && email.error && _react2.default.createElement(
	                                                'div',
	                                                { className: 'col-md-8 col-md-offset-4 form-control-feedback' },
	                                                email.error
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'form-group' },
	                                            _react2.default.createElement(
	                                                'label',
	                                                { className: 'col-md-2 control-label' },
	                                                'Password'
	                                            ),
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'col-md-9' },
	                                                _react2.default.createElement('input', _extends({ type: 'password', className: 'form-control', placeholder: 'password' }, password))
	                                            ),
	                                            password.touched && password.error && _react2.default.createElement(
	                                                'div',
	                                                { className: 'col-md-8 col-md-offset-4 form-control-feedback' },
	                                                password.error
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'form-group' },
	                                            _react2.default.createElement(
	                                                'div',
	                                                { className: 'col-md-12' },
	                                                _react2.default.createElement(
	                                                    'button',
	                                                    { type: 'submit', className: 'btn btn-primary' },
	                                                    'Next'
	                                                )
	                                            )
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Intro;
	}(_react.Component);

	function validate(formProps) {
	    var errors = {};
	    var PASSWORD_VALIDATOR_REGEX = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

	    if (!formProps.password) {
	        errors.password = 'Please enter a password';
	    } else if (formProps.password != "connecteds") {
	        errors.password = "Wrong password";
	    }

	    if (!formProps.email) {
	        errors.email = "Please enter an email";
	    }

	    return errors;
	}

	exports.default = (0, _reduxForm.reduxForm)({
	    form: 'Signin',
	    fields: ['email', 'password'],
	    validate: validate
	}, null, { Signin: _page_actions.Signin })(Intro);

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("redux-form");

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Signin = Signin;
	exports.page1Submit = page1Submit;
	exports.page2Submit = page2Submit;
	exports.page3Submit = page3Submit;
	exports.page4Submit = page4Submit;
	exports.page5Submit = page5Submit;
	exports.page6Submit = page6Submit;
	exports.page7Submit = page7Submit;
	exports.page8Submit = page8Submit;
	exports.page9Submit = page9Submit;
	exports.page10Submit = page10Submit;
	exports.page11Submit = page11Submit;
	exports.page12Submit = page12Submit;
	exports.page13Submit = page13Submit;
	exports.page14Submit = page14Submit;
	exports.page15Submit = page15Submit;
	exports.page16Submit = page16Submit;
	exports.page17Submit = page17Submit;
	exports.page18Submit = page18Submit;
	exports.page19Submit = page19Submit;

	var _reactRouter = __webpack_require__(4);

	var _axios = __webpack_require__(13);

	var _axios2 = _interopRequireDefault(_axios);

	var _crypto = __webpack_require__(14);

	var _crypto2 = _interopRequireDefault(_crypto);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function Signin(props) {
	    _reactRouter.browserHistory.push('/page1');
	    return {
	        type: "SIGN_IN",
	        payload: props
	    };
	}

	function page1Submit(props) {
	    _reactRouter.browserHistory.push('/page2');
	    return {
	        type: "PAGE_1",
	        payload: props
	    };
	}

	function page2Submit(props) {
	    _reactRouter.browserHistory.push('/page3');

	    return {
	        type: "PAGE_2",
	        payload: props
	    };
	}

	function page3Submit(props) {
	    _reactRouter.browserHistory.push('/page4');

	    return {
	        type: "PAGE_3",
	        payload: props
	    };
	}

	function page4Submit(props) {
	    _reactRouter.browserHistory.push('/page5');

	    return {
	        type: "PAGE_4",
	        payload: props
	    };
	}

	function page5Submit(props) {
	    _reactRouter.browserHistory.push('/page6');

	    return {
	        type: "PAGE_5",
	        payload: props
	    };
	}

	function page6Submit(props) {
	    _reactRouter.browserHistory.push('/page7');

	    return {
	        type: "PAGE_6",
	        payload: props
	    };
	}

	function page7Submit(props) {
	    _reactRouter.browserHistory.push('/page8');

	    return {
	        type: "PAGE_7",
	        payload: props
	    };
	}

	function page8Submit(props) {
	    _reactRouter.browserHistory.push('/page9');

	    return {
	        type: "PAGE_8",
	        payload: props
	    };
	}

	function page9Submit(props) {
	    _reactRouter.browserHistory.push('/page10');

	    return {
	        type: "PAGE_9",
	        payload: props
	    };
	}

	function page10Submit(props) {
	    _reactRouter.browserHistory.push('/page11');

	    return {
	        type: "PAGE_10",
	        payload: props
	    };
	}

	function page11Submit(props) {
	    _reactRouter.browserHistory.push('/page12');

	    return {
	        type: "PAGE_11",
	        payload: props
	    };
	}

	function page12Submit(props) {
	    _reactRouter.browserHistory.push('/page13');

	    return {
	        type: "PAGE_12",
	        payload: props
	    };
	}

	function page13Submit(props) {
	    _reactRouter.browserHistory.push('/page14');

	    return {
	        type: "PAGE_13",
	        payload: props
	    };
	}

	function page14Submit(props) {
	    _reactRouter.browserHistory.push('/page15');

	    return {
	        type: "PAGE_14",
	        payload: props
	    };
	}

	function page15Submit(props) {
	    _reactRouter.browserHistory.push('/page16');

	    return {
	        type: "PAGE_15",
	        payload: props
	    };
	}

	function page16Submit(props) {
	    _reactRouter.browserHistory.push('/page17');

	    return {
	        type: "PAGE_16",
	        payload: props
	    };
	}

	function page17Submit(props) {
	    _reactRouter.browserHistory.push('/page18');

	    return {
	        type: "PAGE_17",
	        payload: props
	    };
	}

	function page18Submit(props) {
	    _reactRouter.browserHistory.push('/page19');

	    return {
	        type: "PAGE_18",
	        payload: props
	    };
	}

	function page19Submit(props) {
	    _crypto2.default.randomBytes(5, function (err, buf) {
	        if (err) {
	            console.log(err);
	        } else {
	            var userRandomNumber = buf.toString('hex');
	            var userDataurl = 'https://survey-6242b.firebaseio.com/userData.json';
	            var usersurl = 'https://survey-6242b.firebaseio.com/users.json';
	            var email = props.credentials.email;
	            var users = _defineProperty({}, userRandomNumber, email);
	            var userData = _defineProperty({}, userRandomNumber, props);
	            //console.log(props);
	            var userRequest = _axios2.default.patch(usersurl, users);
	            var userDataRequest = _axios2.default.patch(userDataurl, userData);
	        }
	    });

	    return {
	        type: "FINISH"
	    };
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("axios");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("crypto");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reduxForm = __webpack_require__(11);

	var _page_actions = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Page1 = function (_Component) {
	    _inherits(Page1, _Component);

	    function Page1() {
	        _classCallCheck(this, Page1);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Page1).apply(this, arguments));
	    }

	    _createClass(Page1, [{
	        key: 'onSubmit',
	        value: function onSubmit(e) {
	            this.props.page1Submit(e);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var whatAreYou = _props.fields.whatAreYou;
	            var handleSubmit = _props.handleSubmit;

	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'well bs-component' },
	                            _react2.default.createElement(
	                                'fieldset',
	                                null,
	                                _react2.default.createElement(
	                                    'legend',
	                                    null,
	                                    'Question 1: Are you?'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-md-8 offset-xs-2' },
	                                    _react2.default.createElement(
	                                        'form',
	                                        { className: 'form', onSubmit: handleSubmit(function (e) {
	                                                return _this2.onSubmit(e);
	                                            }) },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'form-check' },
	                                            _react2.default.createElement(
	                                                'label',
	                                                { className: 'form-check-label' },
	                                                _react2.default.createElement('input', _extends({}, whatAreYou, { className: 'form-check-input', type: 'radio', value: 'CSS', checked: whatAreYou.value === 'CSS' })),
	                                                'CSS'
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'form-check' },
	                                            _react2.default.createElement(
	                                                'label',
	                                                { className: 'form-check-label' },
	                                                _react2.default.createElement('input', _extends({}, whatAreYou, { className: 'form-check-input', type: 'radio', value: 'CSSS', checked: whatAreYou.value === 'CSSS' })),
	                                                'CSSS'
	                                            )
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'form-check' },
	                                            _react2.default.createElement(
	                                                'label',
	                                                { className: 'form-check-label' },
	                                                _react2.default.createElement('input', _extends({}, whatAreYou, { className: 'form-check-input', type: 'radio', value: 'CSSA', checked: whatAreYou.value === 'CSSA' })),
	                                                'CSSA'
	                                            )
	                                        ),
	                                        whatAreYou.touched && whatAreYou.error && _react2.default.createElement(
	                                            'div',
	                                            { className: 'form-control-feedback' },
	                                            whatAreYou.error
	                                        ),
	                                        _react2.default.createElement(
	                                            'button',
	                                            { type: 'submit', className: 'btn btn-primary' },
	                                            'Next'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Page1;
	}(_react.Component);

	function validate(formProps) {
	    var errors = {};

	    if (!formProps.whatAreYou) {
	        errors.whatAreYou = 'Please select a choice';
	    }

	    return errors;
	}

	exports.default = (0, _reduxForm.reduxForm)({
	    form: 'Page1',
	    fields: ['whatAreYou'],
	    validate: validate
	}, null, { page1Submit: _page_actions.page1Submit })(Page1);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reduxForm = __webpack_require__(11);

	var _page_actions = __webpack_require__(12);

	var _jquery = __webpack_require__(17);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Page2 = function (_Component) {
	  _inherits(Page2, _Component);

	  function Page2() {
	    _classCallCheck(this, Page2);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Page2).apply(this, arguments));
	  }

	  _createClass(Page2, [{
	    key: 'onSubmit',
	    value: function onSubmit(e) {
	      console.log("Submitting");
	      this.props.page2Submit(e);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var _props$fields = _props.fields;
	      var affliation = _props$fields.affliation;
	      var specificDetails = _props$fields.specificDetails;
	      var handleSubmit = _props.handleSubmit;

	      return _react2.default.createElement(
	        'div',
	        { className: 'container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-md-12' },
	            _react2.default.createElement(
	              'div',
	              { className: 'well bs-component' },
	              _react2.default.createElement(
	                'fieldset',
	                null,
	                _react2.default.createElement(
	                  'legend',
	                  null,
	                  'Question 2: What is your affiliation?'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'col-md-8 offset-xs-2' },
	                  _react2.default.createElement(
	                    'form',
	                    { className: 'form', onSubmit: handleSubmit(function (e) {
	                        return _this2.onSubmit(e);
	                      }) },
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'form-check' },
	                      _react2.default.createElement(
	                        'label',
	                        { className: 'form-check-label' },
	                        _react2.default.createElement('input', _extends({}, affliation, { className: 'form-check-input', type: 'radio', value: 'GEN_CSS', checked: affliation.value === 'GEN_CSS' })),
	                        'Generalist CSS'
	                      )
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'form-check' },
	                      _react2.default.createElement(
	                        'label',
	                        { className: 'form-check-label' },
	                        _react2.default.createElement('input', _extends({}, affliation, { className: 'form-check-input', type: 'radio', value: 'Practice', checked: affliation.value === 'Practice' })),
	                        'Practice'
	                      )
	                    ),
	                    affliation.value == "Practice" ? _react2.default.createElement(
	                      'div',
	                      { className: 'form-group' },
	                      _react2.default.createElement(
	                        'label',
	                        null,
	                        'Please specify'
	                      ),
	                      _react2.default.createElement('textarea', _extends({ className: 'form-control', rows: '3' }, specificDetails))
	                    ) : _react2.default.createElement('div', null),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'form-check' },
	                      _react2.default.createElement(
	                        'label',
	                        { className: 'form-check-label' },
	                        _react2.default.createElement('input', _extends({}, affliation, { className: 'form-check-input', type: 'radio', value: 'MSO', checked: affliation.value === 'MSO' })),
	                        'MSO'
	                      )
	                    ),
	                    affliation.value == "MSO" ? _react2.default.createElement(
	                      'div',
	                      { className: 'form-group' },
	                      _react2.default.createElement(
	                        'label',
	                        null,
	                        'Please specify'
	                      ),
	                      _react2.default.createElement('textarea', _extends({ className: 'form-control', rows: '3' }, specificDetails))
	                    ) : _react2.default.createElement('div', null),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'form-check' },
	                      _react2.default.createElement(
	                        'label',
	                        { className: 'form-check-label' },
	                        _react2.default.createElement('input', _extends({}, affliation, { className: 'form-check-input', type: 'radio', value: 'PD_Learning_HR', checked: affliation.value === 'PD_Learning_HR' })),
	                        'PD/Learning/HR'
	                      )
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'form-check' },
	                      _react2.default.createElement(
	                        'label',
	                        { className: 'form-check-label' },
	                        _react2.default.createElement('input', _extends({}, affliation, { className: 'form-check-input', type: 'radio', value: 'FABP', checked: affliation.value === 'FABP' })),
	                        'Finance/Accouting/Benefits/Payroll'
	                      )
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'form-check' },
	                      _react2.default.createElement(
	                        'label',
	                        { className: 'form-check-label' },
	                        _react2.default.createElement('input', _extends({}, affliation, { className: 'form-check-input', type: 'radio', value: 'COMMS', checked: affliation.value === 'COMMS' })),
	                        'Comms (internal/external)'
	                      )
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'form-check' },
	                      _react2.default.createElement(
	                        'label',
	                        { className: 'form-check-label' },
	                        _react2.default.createElement('input', _extends({}, affliation, { className: 'form-check-input', type: 'radio', value: 'EA', checked: affliation.value === 'EA' })),
	                        'EA'
	                      )
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'form-check' },
	                      _react2.default.createElement(
	                        'label',
	                        { className: 'form-check-label' },
	                        _react2.default.createElement('input', _extends({}, affliation, { className: 'form-check-input', type: 'radio', value: 'OS', checked: affliation.value === 'OS' })),
	                        'Office services (IT, facilities, repro)'
	                      )
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'form-check' },
	                      _react2.default.createElement(
	                        'label',
	                        { className: 'form-check-label' },
	                        _react2.default.createElement('input', _extends({}, affliation, { className: 'form-check-input', type: 'radio', value: 'FF', checked: affliation.value === 'FF' })),
	                        'Firm functions (Audit, legal, risk, tax, MIO, MPS, Travel, VG, Firm IT)'
	                      )
	                    ),
	                    _react2.default.createElement(
	                      'div',
	                      { className: 'form-check' },
	                      _react2.default.createElement(
	                        'label',
	                        { className: 'form-check-label' },
	                        _react2.default.createElement('input', _extends({}, affliation, { className: 'form-check-input', type: 'radio', value: 'Other', checked: affliation.value === 'Other' })),
	                        'Other'
	                      )
	                    ),
	                    affliation.value == "Other" ? _react2.default.createElement(
	                      'div',
	                      { className: 'form-group' },
	                      _react2.default.createElement(
	                        'label',
	                        null,
	                        'Please specify'
	                      ),
	                      _react2.default.createElement('textarea', _extends({ className: 'form-control', rows: '3' }, specificDetails))
	                    ) : _react2.default.createElement('div', null),
	                    affliation.touched && affliation.error && _react2.default.createElement(
	                      'div',
	                      { className: 'form-control-feedback' },
	                      affliation.error
	                    ),
	                    _react2.default.createElement(
	                      'button',
	                      { type: 'submit', className: 'btn btn-primary' },
	                      'Next'
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Page2;
	}(_react.Component);

	function validate(formProps) {
	  var errors = {};

	  if (!formProps.whatAreYou) {
	    errors.whatAreYou = 'Please select a choice';
	  }

	  return errors;
	}

	exports.default = (0, _reduxForm.reduxForm)({
	  form: 'Page2',
	  fields: ['affliation', 'specificDetails']
	}, null, { page2Submit: _page_actions.page2Submit })(Page2);

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("jquery");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reduxForm = __webpack_require__(11);

	var _page_actions = __webpack_require__(12);

	var _reactRouter = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CSS = ['Senior Partner', 'Partner', 'AP', 'EM', 'Associate/JA', 'BA'];
	var Non_CSS = ['Manager/Team leader', 'Team member', 'Other'];

	var Page3 = function (_Component) {
	    _inherits(Page3, _Component);

	    function Page3() {
	        _classCallCheck(this, Page3);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Page3).apply(this, arguments));
	    }

	    _createClass(Page3, [{
	        key: 'onSubmit',
	        value: function onSubmit(e) {
	            this.props.page3Submit(e);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var roleMap = [];
	            if (!_reactRouter.browserHistory) {
	                return _react2.default.createElement(
	                    'div',
	                    null,
	                    'Loading...'
	                );
	            } else if (!this.props.pageData.page1) {
	                _reactRouter.browserHistory.push("/page1");
	            } else if (this.props.pageData.page1.whatAreYou == "CSS") {
	                roleMap = CSS;
	            } else {
	                roleMap = Non_CSS;
	            }
	            var _props = this.props;
	            var _props$fields = _props.fields;
	            var role = _props$fields.role;
	            var specificDetails = _props$fields.specificDetails;
	            var handleSubmit = _props.handleSubmit;

	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'well bs-component' },
	                            _react2.default.createElement(
	                                'fieldset',
	                                null,
	                                _react2.default.createElement(
	                                    'legend',
	                                    null,
	                                    'Question 3: What is your role?'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-md-8 offset-xs-2' },
	                                    _react2.default.createElement(
	                                        'form',
	                                        { className: 'form', onSubmit: handleSubmit(function (e) {
	                                                return _this2.onSubmit(e);
	                                            }) },
	                                        roleMap.map(function (e) {
	                                            return _react2.default.createElement(
	                                                'div',
	                                                { className: 'form-check' },
	                                                _react2.default.createElement(
	                                                    'label',
	                                                    { className: 'form-check-label' },
	                                                    _react2.default.createElement('input', _extends({}, role, { className: 'form-check-input', type: 'radio', value: e })),
	                                                    e
	                                                )
	                                            );
	                                        }),
	                                        role.value == "Other" ? _react2.default.createElement(
	                                            'div',
	                                            { className: 'form-group' },
	                                            _react2.default.createElement(
	                                                'label',
	                                                null,
	                                                'Please specify'
	                                            ),
	                                            _react2.default.createElement('textarea', _extends({ className: 'form-control', rows: '3' }, specificDetails))
	                                        ) : _react2.default.createElement('div', null),
	                                        role.touched && role.error && _react2.default.createElement(
	                                            'div',
	                                            { className: 'form-control-feedback' },
	                                            role.error
	                                        ),
	                                        specificDetails.touched && specificDetails.error && _react2.default.createElement(
	                                            'div',
	                                            { className: 'form-control-feedback' },
	                                            specificDetails.error
	                                        ),
	                                        _react2.default.createElement(
	                                            'button',
	                                            { type: 'submit', className: 'btn btn-primary' },
	                                            'Next'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Page3;
	}(_react.Component);

	function validate(formProps) {
	    var errors = {};

	    if (!formProps.role) {
	        errors.role = 'Please select a choice';
	    }

	    if (!formProps.specificDetails) {
	        if (formProps.role == "Other") {
	            errors.specificDetails = "Please specify in Other";
	        }
	    }

	    return errors;
	}

	function mapStateToProps(state) {
	    return {
	        pageData: state.pageReducers
	    };
	}

	exports.default = (0, _reduxForm.reduxForm)({
	    form: 'Page3',
	    fields: ['role', 'specificDetails'],
	    validate: validate
	}, mapStateToProps, { page3Submit: _page_actions.page3Submit })(Page3);

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reduxForm = __webpack_require__(11);

	var _page_actions = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TENURE = ['0-12 months', '1-2 years', '2-5 years', '>5 years'];

	var Page4 = function (_Component) {
	    _inherits(Page4, _Component);

	    function Page4() {
	        _classCallCheck(this, Page4);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Page4).apply(this, arguments));
	    }

	    _createClass(Page4, [{
	        key: 'onSubmit',
	        value: function onSubmit(e) {
	            this.props.page4Submit(e);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var _props$fields = _props.fields;
	            var tenure = _props$fields.tenure;
	            var daysPerMonth = _props$fields.daysPerMonth;
	            var handleSubmit = _props.handleSubmit;

	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'well bs-component' },
	                            _react2.default.createElement(
	                                'fieldset',
	                                null,
	                                _react2.default.createElement(
	                                    'legend',
	                                    null,
	                                    'Question 4: Are you?'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-md-8 offset-xs-2' },
	                                    _react2.default.createElement(
	                                        'form',
	                                        { className: 'form', onSubmit: handleSubmit(function (e) {
	                                                return _this2.onSubmit(e);
	                                            }) },
	                                        TENURE.map(function (e) {
	                                            return _react2.default.createElement(
	                                                'div',
	                                                { className: 'form-check' },
	                                                _react2.default.createElement(
	                                                    'label',
	                                                    { className: 'form-check-label' },
	                                                    _react2.default.createElement('input', _extends({}, tenure, { className: 'form-check-input', type: 'radio', value: e })),
	                                                    e
	                                                )
	                                            );
	                                        }),
	                                        tenure.touched && tenure.error && _react2.default.createElement(
	                                            'div',
	                                            { className: 'form-control-feedback' },
	                                            tenure.error
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'form-group' },
	                                            _react2.default.createElement(
	                                                'label',
	                                                null,
	                                                'How many days per month are you in the office?'
	                                            ),
	                                            _react2.default.createElement('textarea', _extends({ className: 'form-control', rows: '3' }, daysPerMonth))
	                                        ),
	                                        _react2.default.createElement(
	                                            'button',
	                                            { type: 'submit', className: 'btn btn-primary' },
	                                            'Next'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Page4;
	}(_react.Component);

	function validate(formProps) {
	    var errors = {};

	    if (!formProps.tenure) {
	        errors.tenure = 'Please select a choice';
	    }

	    return errors;
	}

	exports.default = (0, _reduxForm.reduxForm)({
	    form: 'Page4',
	    fields: ['tenure', 'daysPerMonth'],
	    validate: validate
	}, null, { page4Submit: _page_actions.page4Submit })(Page4);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reduxForm = __webpack_require__(11);

	var _page_actions = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var USUAL_WORKSPACE = ['Assigned desk in office', 'Assigned desk, open plan', 'Hot desk', 'Meeting room/ team room', 'Informal meet area', 'Monk cells'];

	var Page5 = function (_Component) {
	    _inherits(Page5, _Component);

	    function Page5() {
	        _classCallCheck(this, Page5);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Page5).apply(this, arguments));
	    }

	    _createClass(Page5, [{
	        key: 'onSubmit',
	        value: function onSubmit(e) {
	            this.props.page5Submit(e);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var usualWorkspace = _props.fields.usualWorkspace;
	            var handleSubmit = _props.handleSubmit;

	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'well bs-component' },
	                            _react2.default.createElement(
	                                'fieldset',
	                                null,
	                                _react2.default.createElement(
	                                    'legend',
	                                    null,
	                                    'Question 5: What is your usual workspace in London office?'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-md-8 offset-xs-2' },
	                                    _react2.default.createElement(
	                                        'form',
	                                        { className: 'form', onSubmit: handleSubmit(function (e) {
	                                                return _this2.onSubmit(e);
	                                            }) },
	                                        USUAL_WORKSPACE.map(function (e) {
	                                            return _react2.default.createElement(
	                                                'div',
	                                                { className: 'form-check' },
	                                                _react2.default.createElement(
	                                                    'label',
	                                                    { className: 'form-check-label' },
	                                                    _react2.default.createElement('input', _extends({}, usualWorkspace, { className: 'form-check-input', type: 'radio', value: e })),
	                                                    e
	                                                )
	                                            );
	                                        }),
	                                        usualWorkspace.touched && usualWorkspace.error && _react2.default.createElement(
	                                            'div',
	                                            { className: 'form-control-feedback' },
	                                            usualWorkspace.error
	                                        ),
	                                        _react2.default.createElement(
	                                            'button',
	                                            { type: 'submit', className: 'btn btn-primary' },
	                                            'Next'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Page5;
	}(_react.Component);

	function validate(formProps) {
	    var errors = {};

	    if (!formProps.usualWorkspace) {
	        errors.usualWorkspace = 'Please select a choice';
	    }

	    return errors;
	}

	exports.default = (0, _reduxForm.reduxForm)({
	    form: 'Page5',
	    fields: ['usualWorkspace'],
	    validate: validate
	}, null, { page5Submit: _page_actions.page5Submit })(Page5);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reduxForm = __webpack_require__(11);

	var _page_actions = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Page6 = function (_Component) {
	    _inherits(Page6, _Component);

	    function Page6() {
	        _classCallCheck(this, Page6);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Page6).apply(this, arguments));
	    }

	    _createClass(Page6, [{
	        key: 'onSubmit',
	        value: function onSubmit(e) {
	            console.log(this.props.fields.satisfiedLondon);
	            this.props.page6Submit(e);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var S = [{ name: 'Fully Satisfied', value: 'FUSA' }, { name: 'Satisfied', value: 'SA' }, { name: 'Neither satisfied nor dissatisfied', value: 'NSND' }, { name: 'Dissatisfied', value: 'DI' }, { name: 'Fully Dissatisfied', value: 'FD' }];

	            var E = [{ name: 'Excellent', value: 'EX' }, { name: 'Good', value: 'GO' }, { name: 'Neither good nor bad', value: 'NGNB' }, { name: 'Poor', value: 'PO' }, { name: 'Very poor', value: 'VP' }];

	            var A = [{ name: 'Strongly Agree', value: 'STA' }, { name: 'Agree', value: 'AG' }, { name: 'Neither Agree nor Disagree', value: 'NAND' }, { name: 'Disagree', value: 'DA' }, { name: 'Strongly Disagree', value: 'SDA' }];

	            var SATISFACTION = [{ Q: 'How satisfied are you with London office?', fieldValue: this.props.fields.satisfiedLondon, selectionType: 'S' }, { Q: 'What gets the best out of you in London office?', fieldValue: this.props.fields.bestOutOfLondonOffice, selectionType: 'FT' }, { Q: 'What would you change about the office?', fieldValue: this.props.fields.changeAboutOffice, selectionType: 'FT' }, { Q: 'The variety of workspaces available?', fieldValue: this.props.fields.workspaceVariety, selectionType: 'E' }, { Q: 'The lighting?', fieldValue: this.props.fields.lighting, selectionType: 'E' }, { Q: 'The air quality?', fieldValue: this.props.fields.airQuality, selectionType: 'E' }, { Q: 'The noise levels?', fieldValue: this.props.fields.noiseLevel, selectionType: 'E' }, { Q: 'The furniture/ergonomics/comfort?', fieldValue: this.props.fields.furniture, selectionType: 'E' }, { Q: 'The informal breakout and social spaces?', fieldValue: this.props.fields.informalBreakout, selectionType: 'E' }, { Q: 'The availability of workspace?', fieldValue: this.props.fields.choiceOfWorkspace, selectionType: 'E' }, { Q: 'The showers/changing /cycling facilities?', fieldValue: this.props.fields.showers, selectionType: 'E' }, { Q: 'The design of the current office  space creates an enjoyable environment to work in', fieldValue: this.props.fields.designOfCurrentOffice, selectionType: 'A' }];
	            console.log(this.props.fields.satisfiedLondon);
	            var _props = this.props;
	            var _props$fields = _props.fields;
	            var satisfiedLondon = _props$fields.satisfiedLondon;
	            var bestOutOfLondonOffice = _props$fields.bestOutOfLondonOffice;
	            var changeAboutOffice = _props$fields.changeAboutOffice;
	            var workspaceVariety = _props$fields.workspaceVariety;
	            var lighting = _props$fields.lighting;
	            var airQuality = _props$fields.airQuality;
	            var noiseLevel = _props$fields.noiseLevel;
	            var furniture = _props$fields.furniture;
	            var informalBreakout = _props$fields.informalBreakout;
	            var availableWorkspace = _props$fields.availableWorkspace;
	            var showers = _props$fields.showers;
	            var designOfCurrentOffice = _props$fields.designOfCurrentOffice;
	            var handleSubmit = _props.handleSubmit;

	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'well bs-component' },
	                            _react2.default.createElement(
	                                'fieldset',
	                                null,
	                                _react2.default.createElement(
	                                    'legend',
	                                    null,
	                                    'Question 6: Satisfaction'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-md-8 offset-xs-2' },
	                                    _react2.default.createElement(
	                                        'form',
	                                        { className: 'form', onSubmit: handleSubmit(function (e) {
	                                                return _this2.onSubmit(e);
	                                            }) },
	                                        SATISFACTION.map(function (e) {
	                                            if (e.selectionType == 'S') {
	                                                return _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    e.Q,
	                                                    S.map(function (v) {
	                                                        return _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'form-check' },
	                                                            _react2.default.createElement(
	                                                                'label',
	                                                                { className: 'form-check-label' },
	                                                                _react2.default.createElement('input', _extends({}, e.fieldValue, { className: 'form-check-input', type: 'radio', value: v.value })),
	                                                                v.name
	                                                            )
	                                                        );
	                                                    })
	                                                );
	                                            } else if (e.selectionType == 'E') {
	                                                return _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    e.Q,
	                                                    E.map(function (v) {
	                                                        return _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'form-check' },
	                                                            _react2.default.createElement(
	                                                                'label',
	                                                                { className: 'form-check-label' },
	                                                                _react2.default.createElement('input', _extends({}, e.fieldValue, { className: 'form-check-input', type: 'radio', value: v.value })),
	                                                                v.name
	                                                            )
	                                                        );
	                                                    })
	                                                );
	                                            } else if (e.selectionType == 'A') {
	                                                return _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    e.Q,
	                                                    A.map(function (v) {
	                                                        return _react2.default.createElement(
	                                                            'div',
	                                                            { className: 'form-check' },
	                                                            _react2.default.createElement(
	                                                                'label',
	                                                                { className: 'form-check-label' },
	                                                                _react2.default.createElement('input', _extends({}, e.fieldValue, { className: 'form-check-input', type: 'radio', value: v.value })),
	                                                                v.name
	                                                            )
	                                                        );
	                                                    })
	                                                );
	                                            } else if (e.selectionType == 'FT') {
	                                                return _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    e.Q,
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'form-group' },
	                                                        _react2.default.createElement('textarea', _extends({ className: 'form-control', rows: '3' }, e.fieldValue))
	                                                    )
	                                                );
	                                            }
	                                        }),
	                                        _react2.default.createElement(
	                                            'button',
	                                            { type: 'submit', className: 'btn btn-primary' },
	                                            'Next'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Page6;
	}(_react.Component);

	function validate(formProps) {
	    var errors = {};

	    return errors;
	}

	exports.default = (0, _reduxForm.reduxForm)({
	    form: 'Page6',
	    fields: ['satisfiedLondon', 'bestOutOfLondonOffice', 'changeAboutOffice', 'workspaceVariety', 'lighting', 'airQuality', 'noiseLevel', 'furniture', 'informalBreakout', 'availableWorkspace', 'showers', 'designOfCurrentOffice'],
	    validate: validate
	}, null, { page6Submit: _page_actions.page6Submit })(Page6);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(23);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reduxForm = __webpack_require__(11);

	var _page_actions = __webpack_require__(12);

	var _jquery = __webpack_require__(17);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Page7 = function (_Component) {
	    _inherits(Page7, _Component);

	    function Page7(props) {
	        _classCallCheck(this, Page7);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Page7).call(this, props));

	        _this.state = {
	            totalDragged: 0
	        };
	        return _this;
	    }

	    _createClass(Page7, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var node1 = _reactDom2.default.findDOMNode(this.refs.sortable1);
	            var node2 = _reactDom2.default.findDOMNode(this.refs.sortable2);
	        }
	    }, {
	        key: 'onSubmit',
	        value: function onSubmit(e) {
	            var droppedHole = document.getElementById('droppedHours');
	            var childrens = (0, _jquery2.default)(droppedHole).children();
	            var IW = 0;
	            var FM = 0;
	            var SO = 0;
	            var CL = 0;
	            childrens.map(function (e) {
	                if (childrens[e].id == "1hIW") {
	                    IW++;
	                } else if (childrens[e].id == "1hFM") {
	                    FM++;
	                } else if (childrens[e].id == "1hSO") {
	                    SO++;
	                } else if (childrens[e].id == "1hCL") {
	                    CL++;
	                }
	            });
	            var props = {
	                IW: IW,
	                FM: FM,
	                SO: SO,
	                CL: CL
	            };
	            this.props.page7Submit(props);
	        }
	    }, {
	        key: 'drop',
	        value: function drop(ev) {
	            if (ev.target.id != "droppedHours") {
	                return;
	            }
	            var data = ev.dataTransfer.getData("text");
	            var clonedNode = document.getElementById(data).cloneNode(true);
	            (0, _jquery2.default)(clonedNode).addClass('cardBottom');
	            (0, _jquery2.default)(clonedNode).on('dragend', function (e) {
	                this.remove();
	            });
	            if (this.state.totalDragged < 20) {
	                ev.target.appendChild(clonedNode);
	            }
	            var droppedHole = document.getElementById('droppedHours');
	            this.setState({
	                totalDragged: (0, _jquery2.default)(droppedHole).children().length
	            });
	        }
	    }, {
	        key: 'drag',
	        value: function drag(ev) {
	            ev.dataTransfer.setData("text", ev.target.id);
	        }
	    }, {
	        key: 'allowDrop',
	        value: function allowDrop(ev) {
	            ev.preventDefault();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var whatAreYou = _props.fields.whatAreYou;
	            var handleSubmit = _props.handleSubmit;

	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'well bs-component' },
	                            _react2.default.createElement(
	                                'fieldset',
	                                null,
	                                _react2.default.createElement(
	                                    'legend',
	                                    null,
	                                    'Question 7: How do you currently use the office?'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-md-12' },
	                                    _react2.default.createElement(
	                                        'h5',
	                                        null,
	                                        'Proportion of time spent on: (Starting from the beginning of the day at the bottom)'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-md-4' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { id: '1hIW', draggable: 'true', onDragStart: function onDragStart(e) {
	                                                    return _this2.drag(e);
	                                                }, className: 'col-md-offset-1 col-md-10', style: { backgroundColor: '#0062c4', height: '3em', marginBottom: '1em', paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center' } },
	                                            '1hr Individual Work'
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { id: '1hFM', draggable: 'true', onDragStart: function onDragStart(e) {
	                                                    return _this2.drag(e);
	                                                }, className: 'col-md-offset-1 col-md-10', style: { backgroundColor: '#ff8900', height: '3em', marginBottom: '1em', paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center' } },
	                                            '1hr Formal Meetings'
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { id: '1hSO', draggable: 'true', onDragStart: function onDragStart(e) {
	                                                    return _this2.drag(e);
	                                                }, className: 'col-md-offset-1 col-md-10', style: { backgroundColor: '#1d7e00', height: '3em', marginBottom: '1em', paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center' } },
	                                            '1hr Social'
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { id: '1hCL', draggable: 'true', onDragStart: function onDragStart(e) {
	                                                    return _this2.drag(e);
	                                                }, className: 'col-md-offset-1 col-md-10', style: { backgroundColor: '#c40000', height: '3em', marginBottom: '1em', paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center' } },
	                                            '1hr Clients'
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-md-2' },
	                                        _react2.default.createElement(
	                                            'h5',
	                                            { style: { textAlign: 'right' } },
	                                            'End of the day'
	                                        )
	                                    ),
	                                    _react2.default.createElement('div', { id: 'droppedHours', onDrop: function onDrop(e) {
	                                            return _this2.drop(e);
	                                        }, onDragOver: function onDragOver(e) {
	                                            return _this2.allowDrop(e);
	                                        }, className: 'col-md-8', style: { borderLeft: "10px solid grey", borderBottom: "10px solid grey", minHeight: '65vh', paddingBottom: '4em' } }),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-md-12' },
	                                        _react2.default.createElement(
	                                            'button',
	                                            { onClick: function onClick(e) {
	                                                    return _this2.onSubmit(e);
	                                                }, className: 'btn btn-primary' },
	                                            'Next'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Page7;
	}(_react.Component);

	function validate(formProps) {
	    var errors = {};

	    if (!formProps.whatAreYou) {
	        errors.whatAreYou = 'Please select a choice';
	    }

	    return errors;
	}

	exports.default = (0, _reduxForm.reduxForm)({
	    form: 'Page1',
	    fields: ['whatAreYou'],
	    validate: validate
	}, null, { page7Submit: _page_actions.page7Submit })(Page7);

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(23);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reduxForm = __webpack_require__(11);

	var _page_actions = __webpack_require__(12);

	var _jquery = __webpack_require__(17);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Page8 = function (_Component) {
	    _inherits(Page8, _Component);

	    function Page8(props) {
	        _classCallCheck(this, Page8);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Page8).call(this, props));

	        _this.state = {
	            totalDragged: 0
	        };
	        return _this;
	    }

	    _createClass(Page8, [{
	        key: 'onSubmit',
	        value: function onSubmit(e) {
	            var remoteMeetingsChildrens = (0, _jquery2.default)(document.getElementById('remoteMeetings')).children();
	            var inPersonChildrens = (0, _jquery2.default)(document.getElementById('inPerson')).children();
	            var formalEventsChildrens = (0, _jquery2.default)(document.getElementById('formalEvents')).children();
	            var remoteMeetings = 0;
	            var inPerson = 0;
	            var formalEvents = 0;
	            remoteMeetingsChildrens.map(function (e) {
	                if (remoteMeetingsChildrens[e].id == "0.5h") {
	                    remoteMeetings += 0.5;
	                } else if (remoteMeetingsChildrens[e].id == "1h") {
	                    remoteMeetings++;
	                }
	            });
	            inPersonChildrens.map(function (e) {
	                if (inPersonChildrens[e].id == "0.5h") {
	                    inPerson += 0.5;
	                } else if (inPersonChildrens[e].id == "1h") {
	                    inPerson++;
	                }
	            });
	            formalEventsChildrens.map(function (e) {
	                if (formalEventsChildrens[e].id == "0.5h") {
	                    formalEvents += 0.5;
	                } else if (formalEventsChildrens[e].id == "1h") {
	                    formalEvents++;
	                }
	            });
	            var props = {
	                remoteMeetings: remoteMeetings,
	                inPerson: inPerson,
	                formalEvents: formalEvents
	            };
	            this.props.page8Submit(props);
	        }
	    }, {
	        key: 'drop',
	        value: function drop(ev) {
	            if (ev.target.id != "remoteMeetings" && ev.target.id != "inPerson" && ev.target.id != "formalEvents") {
	                return;
	            }
	            var data = ev.dataTransfer.getData("text");
	            var clonedNode = document.getElementById(data).cloneNode(true);
	            (0, _jquery2.default)(clonedNode).removeClass('col-md-4');
	            (0, _jquery2.default)(clonedNode).addClass('col-md-12');
	            (0, _jquery2.default)(clonedNode).on('dragend', function (e) {
	                this.remove();
	            });
	            if (this.state.totalDragged < 8) {
	                ev.target.appendChild(clonedNode);
	            }
	            var droppedHole = document.getElementById('droppedHours');
	            this.setState({
	                totalDragged: (0, _jquery2.default)(droppedHole).children().length
	            });
	        }
	    }, {
	        key: 'drag',
	        value: function drag(ev) {
	            ev.dataTransfer.setData("text", ev.target.id);
	        }
	    }, {
	        key: 'allowDrop',
	        value: function allowDrop(ev) {
	            ev.preventDefault();
	        }
	    }, {
	        key: 'deleteDropped',
	        value: function deleteDropped(ev) {
	            var data = ev.dataTransfer.getData("text");
	            var Node = document.getElementById(data);
	            console.log(Node);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var whatAreYou = _props.fields.whatAreYou;
	            var handleSubmit = _props.handleSubmit;

	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'well bs-component' },
	                            _react2.default.createElement(
	                                'fieldset',
	                                null,
	                                _react2.default.createElement(
	                                    'legend',
	                                    null,
	                                    'Question 8: How do you currently use the office?'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-md-8 offset-xs-2' },
	                                    _react2.default.createElement(
	                                        'h5',
	                                        null,
	                                        'Of the time you spend collaborating with colleagues in formal meetings, what proportion of this is:'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-md-12' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { id: '0.5h', draggable: 'true', onDragStart: function onDragStart(e) {
	                                                    return _this2.drag(e);
	                                                }, className: 'col-md-4', style: { backgroundColor: '#0062c4', height: '3em', marginBottom: '1em', paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center', marginRight: '2em' } },
	                                            '1/2hr'
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { id: '1h', draggable: 'true', onDragStart: function onDragStart(e) {
	                                                    return _this2.drag(e);
	                                                }, className: 'col-md-offset-1 col-md-4', style: { backgroundColor: '#ff9300', height: '3em', marginBottom: '1em', paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center' } },
	                                            '1hr'
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { id: 'remoteMeetings', onDrop: function onDrop(e) {
	                                                return _this2.drop(e);
	                                            }, onDragOver: function onDragOver(e) {
	                                                return _this2.allowDrop(e);
	                                            }, className: 'col-md-4', style: { minHeight: '50vh', paddingBottom: '5em' } },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'col-md-10 col-md-offset-1', style: { height: '2em', textAlign: 'center', paddingTop: '7px', backgroundColor: 'skyblue', position: 'absolute', bottom: 0, borderRadius: '5px' } },
	                                            'Remote Meeting'
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { id: 'inPerson', onDrop: function onDrop(e) {
	                                                return _this2.drop(e);
	                                            }, onDragOver: function onDragOver(e) {
	                                                return _this2.allowDrop(e);
	                                            }, className: 'col-md-4', style: { minHeight: '50vh', paddingBottom: '5em' } },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'col-md-10 col-md-offset-1', style: { height: '2em', textAlign: 'center', paddingTop: '7px', backgroundColor: 'skyblue', position: 'absolute', bottom: 0, borderRadius: '5px' } },
	                                            'In person'
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { id: 'formalEvents', onDrop: function onDrop(e) {
	                                                return _this2.drop(e);
	                                            }, onDragOver: function onDragOver(e) {
	                                                return _this2.allowDrop(e);
	                                            }, className: 'col-md-4', style: { minHeight: '50vh', paddingBottom: '5em' } },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'col-md-10 col-md-offset-1', style: { height: '2em', textAlign: 'center', paddingTop: '7px', backgroundColor: 'skyblue', position: 'absolute', bottom: 0, borderRadius: '5px' } },
	                                            'Formal events'
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-md-12' },
	                                        _react2.default.createElement(
	                                            'button',
	                                            { onClick: function onClick(e) {
	                                                    return _this2.onSubmit(e);
	                                                }, className: 'btn btn-primary' },
	                                            'Next'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Page8;
	}(_react.Component);

	function validate(formProps) {
	    var errors = {};

	    if (!formProps.whatAreYou) {
	        errors.whatAreYou = 'Please select a choice';
	    }

	    return errors;
	}

	exports.default = (0, _reduxForm.reduxForm)({
	    form: 'Page1',
	    fields: ['whatAreYou'],
	    validate: validate
	}, null, { page8Submit: _page_actions.page8Submit })(Page8);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(23);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reduxForm = __webpack_require__(11);

	var _page_actions = __webpack_require__(12);

	var _jquery = __webpack_require__(17);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Page9 = function (_Component) {
	    _inherits(Page9, _Component);

	    function Page9(props) {
	        _classCallCheck(this, Page9);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Page9).call(this, props));

	        _this.state = {
	            totalDragged: 0
	        };
	        return _this;
	    }

	    _createClass(Page9, [{
	        key: 'onSubmit',
	        value: function onSubmit(e) {
	            var oneToOneChildrens = (0, _jquery2.default)(document.getElementById('oneToOne')).children();
	            var threeToFiveChildrens = (0, _jquery2.default)(document.getElementById('threeToFive')).children();
	            var moreThan5Childrens = (0, _jquery2.default)(document.getElementById('moreThan5')).children();
	            var oneToOne = 0;
	            var threeToFive = 0;
	            var moreThan5 = 0;
	            oneToOneChildrens.map(function (e) {
	                if (oneToOneChildrens[e].id == "0.5h") {
	                    oneToOne += 0.5;
	                } else if (oneToOneChildrens[e].id == "1h") {
	                    oneToOne++;
	                }
	            });
	            threeToFiveChildrens.map(function (e) {
	                if (threeToFiveChildrens[e].id == "0.5h") {
	                    threeToFive += 0.5;
	                } else if (threeToFiveChildrens[e].id == "1h") {
	                    threeToFive++;
	                }
	            });
	            moreThan5Childrens.map(function (e) {
	                if (moreThan5Childrens[e].id == "0.5h") {
	                    moreThan5 += 0.5;
	                } else if (moreThan5Childrens[e].id == "1h") {
	                    moreThan5++;
	                }
	            });
	            var props = {
	                oneToOne: oneToOne,
	                threeToFive: threeToFive,
	                moreThan5: moreThan5
	            };
	            this.props.page9Submit(props);
	        }
	    }, {
	        key: 'drop',
	        value: function drop(ev) {
	            if (ev.target.id != "oneToOne" && ev.target.id != "threeToFive" && ev.target.id != "moreThan5") {
	                return;
	            }
	            var data = ev.dataTransfer.getData("text");
	            var clonedNode = document.getElementById(data).cloneNode(true);
	            (0, _jquery2.default)(clonedNode).removeClass('col-md-4');
	            (0, _jquery2.default)(clonedNode).addClass('col-md-12');
	            (0, _jquery2.default)(clonedNode).on('dragend', function (e) {
	                this.remove();
	            });
	            if (this.state.totalDragged < 8) {
	                ev.target.appendChild(clonedNode);
	            }
	            var droppedHole = document.getElementById('droppedHours');
	            this.setState({
	                totalDragged: (0, _jquery2.default)(droppedHole).children().length
	            });
	        }
	    }, {
	        key: 'drag',
	        value: function drag(ev) {
	            ev.dataTransfer.setData("text", ev.target.id);
	        }
	    }, {
	        key: 'allowDrop',
	        value: function allowDrop(ev) {
	            ev.preventDefault();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var whatAreYou = _props.fields.whatAreYou;
	            var handleSubmit = _props.handleSubmit;

	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'well bs-component' },
	                            _react2.default.createElement(
	                                'fieldset',
	                                null,
	                                _react2.default.createElement(
	                                    'legend',
	                                    null,
	                                    'Question 9: How do you currently use the office?'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-md-8 offset-xs-2' },
	                                    _react2.default.createElement(
	                                        'h5',
	                                        null,
	                                        'Of the in person meetings what proportion of your meetings are:'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-md-12' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { id: '0.5h', draggable: 'true', onDragStart: function onDragStart(e) {
	                                                    return _this2.drag(e);
	                                                }, className: 'col-md-4', style: { backgroundColor: '#0062c4', height: '3em', marginBottom: '1em', paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center', marginRight: '2em' } },
	                                            '1/2hr'
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { id: '1h', draggable: 'true', onDragStart: function onDragStart(e) {
	                                                    return _this2.drag(e);
	                                                }, className: 'col-md-offset-1 col-md-4', style: { backgroundColor: '#ff9300', height: '3em', marginBottom: '1em', paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center' } },
	                                            '1hr'
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { id: 'oneToOne', onDrop: function onDrop(e) {
	                                                return _this2.drop(e);
	                                            }, onDragOver: function onDragOver(e) {
	                                                return _this2.allowDrop(e);
	                                            }, className: 'col-md-4', style: { minHeight: '40vh', paddingBottom: '5em' } },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'col-md-10 col-md-offset-1', style: { height: '2em', paddingTop: '7px', backgroundColor: 'skyblue', position: 'absolute', bottom: 0, borderRadius: '5px' } },
	                                            _react2.default.createElement(
	                                                'h6',
	                                                { className: 'text-xs-center' },
	                                                '1-1'
	                                            )
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { id: 'threeToFive', onDrop: function onDrop(e) {
	                                                return _this2.drop(e);
	                                            }, onDragOver: function onDragOver(e) {
	                                                return _this2.allowDrop(e);
	                                            }, className: 'col-md-4', style: { minHeight: '40vh', paddingBottom: '5em' } },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'col-md-10 col-md-offset-1', style: { height: '2em', paddingTop: '7px', backgroundColor: 'skyblue', position: 'absolute', bottom: 0, borderRadius: '5px' } },
	                                            _react2.default.createElement(
	                                                'h6',
	                                                { className: 'text-xs-center' },
	                                                '3-5'
	                                            )
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { id: 'moreThan5', onDrop: function onDrop(e) {
	                                                return _this2.drop(e);
	                                            }, onDragOver: function onDragOver(e) {
	                                                return _this2.allowDrop(e);
	                                            }, className: 'col-md-4', style: { minHeight: '40vh', paddingBottom: '5em' } },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'col-md-10 col-md-offset-1', style: { height: '2em', paddingTop: '7px', backgroundColor: 'skyblue', position: 'absolute', bottom: 0, borderRadius: '5px' } },
	                                            _react2.default.createElement(
	                                                'h6',
	                                                { className: 'text-xs-center' },
	                                                'More than 5'
	                                            )
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-md-12' },
	                                        _react2.default.createElement(
	                                            'button',
	                                            { onClick: function onClick(e) {
	                                                    return _this2.onSubmit(e);
	                                                }, className: 'btn btn-primary' },
	                                            'Next'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Page9;
	}(_react.Component);

	function validate(formProps) {
	    var errors = {};

	    if (!formProps.whatAreYou) {
	        errors.whatAreYou = 'Please select a choice';
	    }

	    return errors;
	}

	exports.default = (0, _reduxForm.reduxForm)({
	    form: 'Page9',
	    fields: ['whatAreYou'],
	    validate: validate
	}, null, { page9Submit: _page_actions.page9Submit })(Page9);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(23);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reduxForm = __webpack_require__(11);

	var _page_actions = __webpack_require__(12);

	var _jquery = __webpack_require__(17);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Page10 = function (_Component) {
	    _inherits(Page10, _Component);

	    function Page10(props) {
	        _classCallCheck(this, Page10);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Page10).call(this, props));

	        _this.state = {
	            totalDragged: 0
	        };
	        return _this;
	    }

	    _createClass(Page10, [{
	        key: 'onSubmit',
	        value: function onSubmit(e) {
	            var planExChildrens = (0, _jquery2.default)(document.getElementById('planEx')).children();
	            var FeDevChildrens = (0, _jquery2.default)(document.getElementById('FeDev')).children();
	            var CrProChildrens = (0, _jquery2.default)(document.getElementById('CrPro')).children();
	            var planEx = 0;
	            var FeDev = 0;
	            var CrPro = 0;
	            planExChildrens.map(function (e) {
	                if (planExChildrens[e].id == "0.5h") {
	                    planEx += 0.5;
	                } else if (planExChildrens[e].id == "1h") {
	                    planEx++;
	                }
	            });
	            FeDevChildrens.map(function (e) {
	                if (FeDevChildrens[e].id == "0.5h") {
	                    FeDev += 0.5;
	                } else if (FeDevChildrens[e].id == "1h") {
	                    FeDev++;
	                }
	            });
	            CrProChildrens.map(function (e) {
	                if (CrProChildrens[e].id == "0.5h") {
	                    CrPro += 0.5;
	                } else if (CrProChildrens[e].id == "1h") {
	                    CrPro++;
	                }
	            });
	            var props = {
	                planEx: planEx,
	                FeDev: FeDev,
	                CrPro: CrPro
	            };
	            this.props.page10Submit(props);
	        }
	    }, {
	        key: 'drop',
	        value: function drop(ev) {
	            if (ev.target.id != "planEx" && ev.target.id != "FeDev" && ev.target.id != "CrPro") {
	                return;
	            }
	            var data = ev.dataTransfer.getData("text");
	            var clonedNode = document.getElementById(data).cloneNode(true);
	            (0, _jquery2.default)(clonedNode).removeClass('col-md-4');
	            (0, _jquery2.default)(clonedNode).addClass('col-md-12');
	            (0, _jquery2.default)(clonedNode).on('dragend', function (e) {
	                this.remove();
	            });
	            if (this.state.totalDragged < 8) {
	                ev.target.appendChild(clonedNode);
	            }
	            var droppedHole = document.getElementById('droppedHours');
	            this.setState({
	                totalDragged: (0, _jquery2.default)(droppedHole).children().length
	            });
	        }
	    }, {
	        key: 'drag',
	        value: function drag(ev) {
	            ev.dataTransfer.setData("text", ev.target.id);
	        }
	    }, {
	        key: 'allowDrop',
	        value: function allowDrop(ev) {
	            ev.preventDefault();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var whatAreYou = _props.fields.whatAreYou;
	            var handleSubmit = _props.handleSubmit;

	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'well bs-component' },
	                            _react2.default.createElement(
	                                'fieldset',
	                                null,
	                                _react2.default.createElement(
	                                    'legend',
	                                    null,
	                                    'Question 10: How do you currently use the office?'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-md-8 offset-xs-2' },
	                                    _react2.default.createElement(
	                                        'h5',
	                                        null,
	                                        'What proportion of your meetings are:'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-md-12' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { id: '0.5h', draggable: 'true', onDragStart: function onDragStart(e) {
	                                                    return _this2.drag(e);
	                                                }, className: 'col-md-4', style: { backgroundColor: '#0062c4', height: '3em', marginBottom: '1em', paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center', marginRight: '2em' } },
	                                            '1/2hr'
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { id: '1h', draggable: 'true', onDragStart: function onDragStart(e) {
	                                                    return _this2.drag(e);
	                                                }, className: 'col-md-offset-1 col-md-4', style: { backgroundColor: '#ff9300', height: '3em', marginBottom: '1em', paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center' } },
	                                            '1hr'
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { id: 'planEx', onDrop: function onDrop(e) {
	                                                return _this2.drop(e);
	                                            }, onDragOver: function onDragOver(e) {
	                                                return _this2.allowDrop(e);
	                                            }, className: 'col-md-4', style: { minHeight: '50vh', paddingBottom: '6em' } },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'col-md-10 col-md-offset-1', style: { height: '3em', paddingTop: '7px', backgroundColor: 'skyblue', position: 'absolute', bottom: 0, borderRadius: '5px' } },
	                                            _react2.default.createElement(
	                                                'h6',
	                                                { className: 'text-xs-center' },
	                                                'Planning/execution discussions'
	                                            )
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { id: 'FeDev', onDrop: function onDrop(e) {
	                                                return _this2.drop(e);
	                                            }, onDragOver: function onDragOver(e) {
	                                                return _this2.allowDrop(e);
	                                            }, className: 'col-md-4', style: { minHeight: '50vh', paddingBottom: '6em' } },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'col-md-10 col-md-offset-1', style: { height: '3em', paddingTop: '7px', backgroundColor: 'skyblue', position: 'absolute', bottom: 0, borderRadius: '5px' } },
	                                            _react2.default.createElement(
	                                                'h6',
	                                                { className: 'text-xs-center' },
	                                                'Feedback/development discussions'
	                                            )
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { id: 'CrPro', onDrop: function onDrop(e) {
	                                                return _this2.drop(e);
	                                            }, onDragOver: function onDragOver(e) {
	                                                return _this2.allowDrop(e);
	                                            }, className: 'col-md-4', style: { minHeight: '50vh', paddingBottom: '6em' } },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'col-md-10 col-md-offset-1', style: { height: '3em', paddingTop: '7px', backgroundColor: 'skyblue', position: 'absolute', bottom: 0, borderRadius: '5px' } },
	                                            _react2.default.createElement(
	                                                'h6',
	                                                { className: 'text-xs-center' },
	                                                'Creative/problem solving discussions'
	                                            )
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-md-12' },
	                                        _react2.default.createElement(
	                                            'button',
	                                            { onClick: function onClick(e) {
	                                                    return _this2.onSubmit(e);
	                                                }, className: 'btn btn-primary' },
	                                            'Next'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Page10;
	}(_react.Component);

	function validate(formProps) {
	    var errors = {};

	    if (!formProps.whatAreYou) {
	        errors.whatAreYou = 'Please select a choice';
	    }

	    return errors;
	}

	exports.default = (0, _reduxForm.reduxForm)({
	    form: 'Page10',
	    fields: ['whatAreYou'],
	    validate: validate
	}, null, { page10Submit: _page_actions.page10Submit })(Page10);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(23);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reduxForm = __webpack_require__(11);

	var _page_actions = __webpack_require__(12);

	var _jquery = __webpack_require__(17);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Page11 = function (_Component) {
	    _inherits(Page11, _Component);

	    function Page11(props) {
	        _classCallCheck(this, Page11);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Page11).call(this, props));

	        _this.state = {
	            totalDragged: 0
	        };
	        return _this;
	    }

	    _createClass(Page11, [{
	        key: 'onSubmit',
	        value: function onSubmit(e) {
	            var NoCoChildrens = (0, _jquery2.default)(document.getElementById('NoCo')).children();
	            var SOCOChildrens = (0, _jquery2.default)(document.getElementById('SOCO')).children();
	            var HICOChildrens = (0, _jquery2.default)(document.getElementById('HICO')).children();
	            var NoCo = 0;
	            var SOCO = 0;
	            var HICO = 0;
	            NoCoChildrens.map(function (e) {
	                if (NoCoChildrens[e].id == "0.5h") {
	                    NoCo += 0.5;
	                } else if (NoCoChildrens[e].id == "1h") {
	                    NoCo++;
	                }
	            });
	            SOCOChildrens.map(function (e) {
	                if (SOCOChildrens[e].id == "0.5h") {
	                    SOCO += 0.5;
	                } else if (SOCOChildrens[e].id == "1h") {
	                    SOCO++;
	                }
	            });
	            HICOChildrens.map(function (e) {
	                if (HICOChildrens[e].id == "0.5h") {
	                    HICO += 0.5;
	                } else if (HICOChildrens[e].id == "1h") {
	                    HICO++;
	                }
	            });
	            var props = {
	                NoCo: NoCo,
	                SOCO: SOCO,
	                HICO: HICO
	            };
	            this.props.page11Submit(props);
	        }
	    }, {
	        key: 'drop',
	        value: function drop(ev) {
	            if (ev.target.id != "NoCo" && ev.target.id != "SOCO" && ev.target.id != "HICO") {
	                return;
	            }
	            var data = ev.dataTransfer.getData("text");
	            var clonedNode = document.getElementById(data).cloneNode(true);
	            (0, _jquery2.default)(clonedNode).removeClass('col-md-4');
	            (0, _jquery2.default)(clonedNode).addClass('col-md-12');
	            (0, _jquery2.default)(clonedNode).on('dragend', function (e) {
	                this.remove();
	            });
	            if (this.state.totalDragged < 8) {
	                ev.target.appendChild(clonedNode);
	            }
	            var droppedHole = document.getElementById('droppedHours');
	            this.setState({
	                totalDragged: (0, _jquery2.default)(droppedHole).children().length
	            });
	        }
	    }, {
	        key: 'drag',
	        value: function drag(ev) {
	            ev.dataTransfer.setData("text", ev.target.id);
	        }
	    }, {
	        key: 'allowDrop',
	        value: function allowDrop(ev) {
	            ev.preventDefault();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var whatAreYou = _props.fields.whatAreYou;
	            var handleSubmit = _props.handleSubmit;

	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'well bs-component' },
	                            _react2.default.createElement(
	                                'fieldset',
	                                null,
	                                _react2.default.createElement(
	                                    'legend',
	                                    null,
	                                    'Question 11: How do you currently use the office?'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-md-8 offset-xs-2' },
	                                    _react2.default.createElement(
	                                        'h5',
	                                        null,
	                                        'What proportion of your meetings are:'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-md-12' },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { id: '0.5h', draggable: 'true', onDragStart: function onDragStart(e) {
	                                                    return _this2.drag(e);
	                                                }, className: 'col-md-4', style: { backgroundColor: '#0062c4', height: '3em', marginBottom: '1em', paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center', marginRight: '2em' } },
	                                            '1/2hr'
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { id: '1h', draggable: 'true', onDragStart: function onDragStart(e) {
	                                                    return _this2.drag(e);
	                                                }, className: 'col-md-offset-1 col-md-4', style: { backgroundColor: '#ff9300', height: '3em', marginBottom: '1em', paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center' } },
	                                            '1hr'
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { id: 'NoCo', onDrop: function onDrop(e) {
	                                                return _this2.drop(e);
	                                            }, onDragOver: function onDragOver(e) {
	                                                return _this2.allowDrop(e);
	                                            }, className: 'col-md-4', style: { minHeight: '40vh', paddingBottom: '6em' } },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'col-md-10 col-md-offset-1', style: { height: '3em', paddingTop: '7px', backgroundColor: 'skyblue', position: 'absolute', bottom: 0, borderRadius: '5px' } },
	                                            _react2.default.createElement(
	                                                'h6',
	                                                { className: 'text-xs-center' },
	                                                'Not confidential'
	                                            )
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { id: 'SOCO', onDrop: function onDrop(e) {
	                                                return _this2.drop(e);
	                                            }, onDragOver: function onDragOver(e) {
	                                                return _this2.allowDrop(e);
	                                            }, className: 'col-md-4', style: { minHeight: '40vh', paddingBottom: '6em' } },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'col-md-10 col-md-offset-1', style: { height: '3em', paddingTop: '7px', backgroundColor: 'skyblue', position: 'absolute', bottom: 0, borderRadius: '5px' } },
	                                            _react2.default.createElement(
	                                                'h6',
	                                                { className: 'text-xs-center' },
	                                                'Somewhat confidential'
	                                            )
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { id: 'HICO', onDrop: function onDrop(e) {
	                                                return _this2.drop(e);
	                                            }, onDragOver: function onDragOver(e) {
	                                                return _this2.allowDrop(e);
	                                            }, className: 'col-md-4', style: { minHeight: '40vh', paddingBottom: '6em' } },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'col-md-10 col-md-offset-1', style: { height: '3em', paddingTop: '7px', backgroundColor: 'skyblue', position: 'absolute', bottom: 0, borderRadius: '5px' } },
	                                            _react2.default.createElement(
	                                                'h6',
	                                                { className: 'text-xs-center' },
	                                                'Highly confidential'
	                                            )
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-md-12' },
	                                        _react2.default.createElement(
	                                            'button',
	                                            { onClick: function onClick(e) {
	                                                    return _this2.onSubmit(e);
	                                                }, className: 'btn btn-primary' },
	                                            'Next'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Page11;
	}(_react.Component);

	function validate(formProps) {
	    var errors = {};

	    if (!formProps.whatAreYou) {
	        errors.whatAreYou = 'Please select a choice';
	    }

	    return errors;
	}

	exports.default = (0, _reduxForm.reduxForm)({
	    form: 'Page11',
	    fields: ['whatAreYou'],
	    validate: validate
	}, null, { page11Submit: _page_actions.page11Submit })(Page11);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(23);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reduxForm = __webpack_require__(11);

	var _page_actions = __webpack_require__(12);

	var _jquery = __webpack_require__(17);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Page12 = function (_Component) {
	    _inherits(Page12, _Component);

	    function Page12(props) {
	        _classCallCheck(this, Page12);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Page12).call(this, props));

	        _this.state = {
	            totalDragged: 0
	        };
	        return _this;
	    }

	    _createClass(Page12, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var node1 = _reactDom2.default.findDOMNode(this.refs.sortable1);
	            var node2 = _reactDom2.default.findDOMNode(this.refs.sortable2);
	        }
	    }, {
	        key: 'onSubmit',
	        value: function onSubmit(e) {
	            var most = (0, _jquery2.default)(document.getElementById('most')).children()[0].id;
	            var more = (0, _jquery2.default)(document.getElementById('more')).children()[0].id;
	            var last = (0, _jquery2.default)(document.getElementById('last')).children()[0].id;
	            var least = (0, _jquery2.default)(document.getElementById('least')).children()[0].id;
	            var props = {
	                most: most,
	                more: more,
	                last: last,
	                least: least
	            };
	            this.props.page12Submit(props);
	        }
	    }, {
	        key: 'drop',
	        value: function drop(ev) {
	            if (ev.target.id != "most" && ev.target.id != "more" && ev.target.id != "last" && ev.target.id != "least") {
	                return;
	            }
	            var data = ev.dataTransfer.getData("text");
	            var clonedNode = document.getElementById(data).cloneNode(true);
	            (0, _jquery2.default)(clonedNode).addClass('cardBottom');
	            (0, _jquery2.default)(clonedNode).on('dragend', function (e) {
	                this.remove();
	            });
	            if (this.state.totalDragged < 8) {
	                ev.target.appendChild(clonedNode);
	            }
	            var droppedHole = document.getElementById('droppedHours');
	            this.setState({
	                totalDragged: (0, _jquery2.default)(droppedHole).children().length
	            });
	        }
	    }, {
	        key: 'drag',
	        value: function drag(ev) {
	            ev.dataTransfer.setData("text", ev.target.id);
	        }
	    }, {
	        key: 'allowDrop',
	        value: function allowDrop(ev) {
	            ev.preventDefault();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var whatAreYou = _props.fields.whatAreYou;
	            var handleSubmit = _props.handleSubmit;

	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'well bs-component' },
	                            _react2.default.createElement(
	                                'fieldset',
	                                null,
	                                _react2.default.createElement(
	                                    'legend',
	                                    null,
	                                    'Question 12: How do you currently use the office?'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-md-8 offset-xs-2' },
	                                    _react2.default.createElement(
	                                        'h5',
	                                        null,
	                                        'Who do you most meet informally? (In order of most at the top)'
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-md-4' },
	                                        _react2.default.createElement('div', { className: 'col-md-offset-1 col-md-10', style: { backgroundColor: 'white', height: '3em', marginBottom: '1em', paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center' } }),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { id: 'team', draggable: 'true', onDragStart: function onDragStart(e) {
	                                                    return _this2.drag(e);
	                                                }, className: 'col-md-offset-1 col-md-10', style: { backgroundColor: '#0062c4', height: '3em', marginBottom: '1em', paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center' } },
	                                            'My team'
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { id: 'cohort', draggable: 'true', onDragStart: function onDragStart(e) {
	                                                    return _this2.drag(e);
	                                                }, className: 'col-md-offset-1 col-md-10', style: { backgroundColor: '#ff8900', height: '3em', marginBottom: '1em', paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center' } },
	                                            'My cohort'
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { id: 'practice', draggable: 'true', onDragStart: function onDragStart(e) {
	                                                    return _this2.drag(e);
	                                                }, className: 'col-md-offset-1 col-md-10', style: { backgroundColor: '#1d7e00', height: '3em', marginBottom: '1em', paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center' } },
	                                            'My practice'
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { id: 'others', draggable: 'true', onDragStart: function onDragStart(e) {
	                                                    return _this2.drag(e);
	                                                }, className: 'col-md-offset-1 col-md-10', style: { backgroundColor: '#c40000', height: '3em', marginBottom: '1em', paddingTop: '0.7em', color: 'white', borderRadius: '5px', textAlign: 'center' } },
	                                            'Others'
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-md-8', style: { height: '3em', float: 'right', marginBottom: '1em' } },
	                                        _react2.default.createElement(
	                                            'h4',
	                                            { style: { textAlign: 'center', marginTop: 10 } },
	                                            'Most'
	                                        )
	                                    ),
	                                    _react2.default.createElement('div', { id: 'most', onDrop: function onDrop(e) {
	                                            return _this2.drop(e);
	                                        }, onDragOver: function onDragOver(e) {
	                                            return _this2.allowDrop(e);
	                                        }, className: 'col-md-8', style: { border: "1px solid grey", height: '3em', float: 'right', marginBottom: '1em' } }),
	                                    _react2.default.createElement('div', { id: 'more', onDrop: function onDrop(e) {
	                                            return _this2.drop(e);
	                                        }, onDragOver: function onDragOver(e) {
	                                            return _this2.allowDrop(e);
	                                        }, className: 'col-md-8', style: { border: "1px solid grey", height: '3em', float: 'right', marginBottom: '1em' } }),
	                                    _react2.default.createElement('div', { id: 'last', onDrop: function onDrop(e) {
	                                            return _this2.drop(e);
	                                        }, onDragOver: function onDragOver(e) {
	                                            return _this2.allowDrop(e);
	                                        }, className: 'col-md-8', style: { border: "1px solid grey", height: '3em', float: 'right', marginBottom: '1em' } }),
	                                    _react2.default.createElement('div', { id: 'least', onDrop: function onDrop(e) {
	                                            return _this2.drop(e);
	                                        }, onDragOver: function onDragOver(e) {
	                                            return _this2.allowDrop(e);
	                                        }, className: 'col-md-8', style: { border: "1px solid grey", height: '3em', float: 'right', marginBottom: '1em' } }),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-md-8', style: { height: '3em', float: 'right', marginBottom: '1em' } },
	                                        _react2.default.createElement(
	                                            'h4',
	                                            { style: { textAlign: 'center', marginTop: 10 } },
	                                            'Least'
	                                        )
	                                    ),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { className: 'col-md-12' },
	                                        _react2.default.createElement(
	                                            'button',
	                                            { onClick: function onClick(e) {
	                                                    return _this2.onSubmit(e);
	                                                }, className: 'btn btn-primary' },
	                                            'Next'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return Page12;
	}(_react.Component);

	function validate(formProps) {
	    var errors = {};

	    if (!formProps.whatAreYou) {
	        errors.whatAreYou = 'Please select a choice';
	    }

	    return errors;
	}

	exports.default = (0, _reduxForm.reduxForm)({
	    form: 'Page1',
	    fields: ['whatAreYou'],
	    validate: validate
	}, null, { page12Submit: _page_actions.page12Submit })(Page12);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reduxForm = __webpack_require__(11);

	var _page_actions = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Rcslider = __webpack_require__(30);

	var page13 = function (_Component) {
	    _inherits(page13, _Component);

	    function page13(props) {
	        _classCallCheck(this, page13);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(page13).call(this, props));

	        _this.state = {
	            RCValue: 0
	        };
	        return _this;
	    }

	    _createClass(page13, [{
	        key: 'onSubmit',
	        value: function onSubmit(e) {
	            this.props.page13Submit({ proportionOfMeetings: this.state.RCValue });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var whatAreYou = _props.fields.whatAreYou;
	            var handleSubmit = _props.handleSubmit;

	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'well bs-component' },
	                            _react2.default.createElement(
	                                'fieldset',
	                                null,
	                                _react2.default.createElement(
	                                    'legend',
	                                    null,
	                                    'Question 13: How do you currently use the office?'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-md-8 offset-xs-2' },
	                                    _react2.default.createElement(
	                                        'h4',
	                                        { style: { marginBottom: 20 } },
	                                        'What proportion of your client meetings are:'
	                                    ),
	                                    _react2.default.createElement(
	                                        'h5',
	                                        { style: { color: 'skyblue', marginBottom: 20 } },
	                                        'Formal meetings or workshops',
	                                        _react2.default.createElement(
	                                            'span',
	                                            { style: { color: '#b2b2b2' } },
	                                            ' | Informal working sessions'
	                                        )
	                                    ),
	                                    _react2.default.createElement(Rcslider, { onAfterChange: function onAfterChange(e) {
	                                            return _this2.setState({ RCValue: e });
	                                        } }),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { style: { marginTop: 20 }, className: 'col-md-12' },
	                                        _react2.default.createElement(
	                                            'button',
	                                            { onClick: function onClick(e) {
	                                                    return _this2.onSubmit(e);
	                                                }, className: 'btn btn-primary' },
	                                            'Next'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return page13;
	}(_react.Component);

	function validate(formProps) {
	    var errors = {};

	    if (!formProps.whatAreYou) {
	        errors.whatAreYou = 'Please select a choice';
	    }

	    return errors;
	}

	exports.default = (0, _reduxForm.reduxForm)({
	    form: 'page13',
	    fields: ['whatAreYou'],
	    validate: validate
	}, null, { page13Submit: _page_actions.page13Submit })(page13);

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = require("rc-slider");

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reduxForm = __webpack_require__(11);

	var _page_actions = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Rcslider = __webpack_require__(30);

	var page14 = function (_Component) {
	    _inherits(page14, _Component);

	    function page14(props) {
	        _classCallCheck(this, page14);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(page14).call(this, props));

	        _this.state = {
	            RCValue: 0
	        };
	        return _this;
	    }

	    _createClass(page14, [{
	        key: 'onSubmit',
	        value: function onSubmit(e) {
	            this.props.page14Submit({ timeSpentWorkingIndividually: this.state.RCValue });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var whatAreYou = _props.fields.whatAreYou;
	            var handleSubmit = _props.handleSubmit;

	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'well bs-component' },
	                            _react2.default.createElement(
	                                'fieldset',
	                                null,
	                                _react2.default.createElement(
	                                    'legend',
	                                    null,
	                                    'Question 14: How do you currently use the office?'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-md-8 offset-xs-2' },
	                                    _react2.default.createElement(
	                                        'h5',
	                                        { style: { marginBottom: 20 } },
	                                        'Of the time you spend working individually, what proportion of the work is:'
	                                    ),
	                                    _react2.default.createElement(
	                                        'h5',
	                                        { style: { color: 'skyblue', marginBottom: 20 } },
	                                        'Complex work requiring concentration',
	                                        _react2.default.createElement(
	                                            'span',
	                                            { style: { color: '#b2b2b2' } },
	                                            ' | Routine or administrative work'
	                                        )
	                                    ),
	                                    _react2.default.createElement(Rcslider, { onAfterChange: function onAfterChange(e) {
	                                            return _this2.setState({ RCValue: e });
	                                        } }),
	                                    _react2.default.createElement(
	                                        'div',
	                                        { style: { marginTop: 20 }, className: 'col-md-12' },
	                                        _react2.default.createElement(
	                                            'button',
	                                            { onClick: function onClick(e) {
	                                                    return _this2.onSubmit(e);
	                                                }, className: 'btn btn-primary' },
	                                            'Next'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return page14;
	}(_react.Component);

	function validate(formProps) {
	    var errors = {};

	    if (!formProps.whatAreYou) {
	        errors.whatAreYou = 'Please select a choice';
	    }

	    return errors;
	}

	exports.default = (0, _reduxForm.reduxForm)({
	    form: 'page14',
	    fields: ['whatAreYou'],
	    validate: validate
	}, null, { page14Submit: _page_actions.page14Submit })(page14);

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reduxForm = __webpack_require__(11);

	var _page_actions = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var page15 = function (_Component) {
	    _inherits(page15, _Component);

	    function page15() {
	        _classCallCheck(this, page15);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(page15).apply(this, arguments));
	    }

	    _createClass(page15, [{
	        key: 'onSubmit',
	        value: function onSubmit(e) {
	            this.props.page15Submit(e);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var daysPerMonth = _props.fields.daysPerMonth;
	            var handleSubmit = _props.handleSubmit;

	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'well bs-component' },
	                            _react2.default.createElement(
	                                'fieldset',
	                                null,
	                                _react2.default.createElement(
	                                    'legend',
	                                    null,
	                                    'Question 15'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-md-8 offset-xs-2' },
	                                    _react2.default.createElement(
	                                        'form',
	                                        { className: 'form', onSubmit: handleSubmit(function (e) {
	                                                return _this2.onSubmit(e);
	                                            }) },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'form-group' },
	                                            _react2.default.createElement(
	                                                'label',
	                                                null,
	                                                'How many days per month are you in the office?'
	                                            ),
	                                            _react2.default.createElement('textarea', _extends({ className: 'form-control', rows: '3' }, daysPerMonth))
	                                        ),
	                                        _react2.default.createElement(
	                                            'button',
	                                            { type: 'submit', className: 'btn btn-primary' },
	                                            'Next'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return page15;
	}(_react.Component);

	function validate(formProps) {
	    var errors = {};

	    return errors;
	}

	exports.default = (0, _reduxForm.reduxForm)({
	    form: 'page15',
	    fields: ['daysPerMonth'],
	    validate: validate
	}, null, { page15Submit: _page_actions.page15Submit })(page15);

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reduxForm = __webpack_require__(11);

	var _page_actions = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var page16 = function (_Component) {
	    _inherits(page16, _Component);

	    function page16() {
	        _classCallCheck(this, page16);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(page16).apply(this, arguments));
	    }

	    _createClass(page16, [{
	        key: 'onSubmit',
	        value: function onSubmit(e) {
	            this.props.page16Submit(e);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var _props$fields = _props.fields;
	            var one = _props$fields.one;
	            var two = _props$fields.two;
	            var three = _props$fields.three;
	            var four = _props$fields.four;
	            var five = _props$fields.five;
	            var six = _props$fields.six;
	            var seven = _props$fields.seven;
	            var eight = _props$fields.eight;
	            var nine = _props$fields.nine;
	            var ten = _props$fields.ten;
	            var eleven = _props$fields.eleven;
	            var twelve = _props$fields.twelve;
	            var thirteen = _props$fields.thirteen;
	            var fourteen = _props$fields.fourteen;
	            var fifteen = _props$fields.fifteen;
	            var sixteen = _props$fields.sixteen;
	            var handleSubmit = _props.handleSubmit;

	            var questions = [{ id: this.props.fields.one, one: 'An allocated desk in an open plan setting', two: 'An unassigned desk, with access to quiet space for focused work' }, { id: this.props.fields.two, one: 'A shared desk in a shared office', two: 'An unassigned desk, with access to quiet space for focused work' }, { id: this.props.fields.three, one: 'An shared desk in an open plan setting', two: 'An unassigned desk, with access to quiet space for focused work' }, { id: this.props.fields.four, one: 'An allocated desk with access to multifunctional meeting space (e.g., village green)', two: 'An unassigned desk, with access to single purpose meeting space (closed rooms, white boards, access to VC)' }, { id: this.props.fields.five, one: 'An allocated desk in an open plan setting', two: 'An unassigned desk with access to private space for phone calls and VC' }, { id: this.props.fields.six, one: 'An allocated desk in an open plan setting but no defined social space', two: 'An unassigned desk with access to social space' }, { id: this.props.fields.seven, one: 'An allocated desk, among people you do not usually work with or interact with', two: 'An unassigned desk close to your team or peers' }, { id: this.props.fields.eight, one: 'Space in a shared closed office, with access to multifunctional meeting space (e.g., village green)', two: 'Space in an open plan setting with access to single purpose meeting space (closed rooms, white boards, access to VC)' }, { id: this.props.fields.nine, one: 'Space in a shared closed office, without access to alternative closed spaces for phone calls/ private conversations', two: 'Space in an open plan environment with access to private space for phone calls and VC' }, { id: this.props.fields.ten, one: 'Space in a shared closed office but no defined social space', two: 'Space in an open plan environment with access to social space' }, { id: this.props.fields.eleven, one: 'Space in a shared closed office among people you do not usually work with or interact with', two: 'Space in an open plan environment close to your team or peers' }, { id: this.props.fields.twelve, one: 'Access to single purpose meeting space but no alternative closed spaces for phone calls/ private conversations', two: 'Access to multifunctional meetings space (e.g., village green) and closed space for making phone calls/ private conversations' }, { id: this.props.fields.thirteen, one: 'Access to single purpose meeting space but no defined social space', two: 'Access to multifunctional meetings space (e.g., village green) which can be used as both a meeting and social space' }, { id: this.props.fields.fourteen, one: 'Access to single purpose meeting space but no facility to sit close to your peers or team', two: 'Access to multifunctional meetings space (e.g., village green) and the ability to sit close to your peers or team' }, { id: this.props.fields.fifteen, one: 'Access to closed space for phone calls/private conversations and VC but no defined social space', two: 'Access to defined social space but no closed space for phone calls/private conversations or VC' }, { id: this.props.fields.sixteen, one: 'Access to defined social space but no facility to sit close to your peers or team', two: 'The ability to sit close to your team but no access to defined social space' }];
	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'well bs-component' },
	                            _react2.default.createElement(
	                                'fieldset',
	                                null,
	                                _react2.default.createElement(
	                                    'legend',
	                                    null,
	                                    'Question 16'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-md-8 offset-xs-2' },
	                                    _react2.default.createElement(
	                                        'h4',
	                                        { style: { marginBottom: '20px' } },
	                                        'In designing the new office, we need to make a number of trade-offs. This section helps us understand what is most important to you.'
	                                    ),
	                                    _react2.default.createElement(
	                                        'form',
	                                        { className: 'form', onSubmit: handleSubmit(function (e) {
	                                                return _this2.onSubmit(e);
	                                            }) },
	                                        questions.map(function (e) {
	                                            if (e.id) {
	                                                return _react2.default.createElement(
	                                                    'div',
	                                                    null,
	                                                    _react2.default.createElement(
	                                                        'h4',
	                                                        null,
	                                                        'Would you prefer'
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'form-check' },
	                                                        _react2.default.createElement(
	                                                            'label',
	                                                            { className: 'form-check-label' },
	                                                            _react2.default.createElement('input', _extends({}, e.id, { className: 'form-check-input', type: 'radio', value: e.id.name })),
	                                                            e.one
	                                                        )
	                                                    ),
	                                                    _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'form-check' },
	                                                        _react2.default.createElement(
	                                                            'label',
	                                                            { className: 'form-check-label' },
	                                                            _react2.default.createElement('input', _extends({}, e.id, { className: 'form-check-input', type: 'radio', value: e.id.name })),
	                                                            e.two
	                                                        )
	                                                    )
	                                                );
	                                            }
	                                        }),
	                                        _react2.default.createElement(
	                                            'button',
	                                            { type: 'submit', className: 'btn btn-primary' },
	                                            'Next'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return page16;
	}(_react.Component);

	function validate(formProps) {
	    var errors = {};

	    return errors;
	}

	exports.default = (0, _reduxForm.reduxForm)({
	    form: 'page16',
	    fields: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen'],
	    validate: validate
	}, null, { page16Submit: _page_actions.page16Submit })(page16);

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reduxForm = __webpack_require__(11);

	var _page_actions = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var page17 = function (_Component) {
	    _inherits(page17, _Component);

	    function page17() {
	        _classCallCheck(this, page17);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(page17).apply(this, arguments));
	    }

	    _createClass(page17, [{
	        key: 'onSubmit',
	        value: function onSubmit(e) {
	            this.props.page17Submit(e);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var A = [{ name: 'Strongly Agree', value: 'STA' }, { name: 'Agree', value: 'AG' }, { name: 'Neither Agree nor Disagree', value: 'NAND' }, { name: 'Disagree', value: 'DA' }, { name: 'Strongly Disagree', value: 'SDA' }];

	            var SATISFACTION = [{ Q: 'The design of the current office space creates an enjoyable environment to work in', fieldValue: this.props.fields.one, selectionType: 'E' }, { Q: 'The design of the office enables me to work productively and supports my daily tasks', fieldValue: this.props.fields.two, selectionType: 'E' }, { Q: 'I can focus when Iâ€™m in the office', fieldValue: this.props.fields.three, selectionType: 'S' }, { Q: 'I can collaborate with colleagues when Iâ€™m in the office', fieldValue: this.props.fields.four, selectionType: 'FT' }, { Q: 'I can be creative in the office', fieldValue: this.props.fields.five, selectionType: 'FT' }, { Q: 'I feel physically comfortable in the office', fieldValue: this.props.fields.six, selectionType: 'E' }, { Q: 'The design of the office supports mobility', fieldValue: this.props.fields.seven, selectionType: 'E' }, { Q: 'My current office space supports my physical wellbeing', fieldValue: this.props.fields.eight, selectionType: 'A' }, { Q: 'I feel connected to the office', fieldValue: this.props.fields.nine, selectionType: 'E' }, { Q: 'The office supports me to develop client relationships', fieldValue: this.props.fields.ten, selectionType: 'E' }, { Q: 'I am proud to bring visitors to the office', fieldValue: this.props.fields.eleven, selectionType: 'E' }, { Q: 'The office is reflective of the firmâ€™s culture', fieldValue: this.props.fields.twelve, selectionType: 'E' }];
	            console.log(this.props.fields.satisfiedLondon);
	            var _props = this.props;
	            var _props$fields = _props.fields;
	            var one = _props$fields.one;
	            var two = _props$fields.two;
	            var three = _props$fields.three;
	            var four = _props$fields.four;
	            var five = _props$fields.five;
	            var six = _props$fields.six;
	            var seven = _props$fields.seven;
	            var eight = _props$fields.eight;
	            var nine = _props$fields.nine;
	            var ten = _props$fields.ten;
	            var eleven = _props$fields.eleven;
	            var twelve = _props$fields.twelve;
	            var handleSubmit = _props.handleSubmit;

	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'well bs-component' },
	                            _react2.default.createElement(
	                                'fieldset',
	                                null,
	                                _react2.default.createElement(
	                                    'legend',
	                                    null,
	                                    'Question 17'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-md-8 offset-xs-2' },
	                                    _react2.default.createElement(
	                                        'h4',
	                                        { style: { marginBottom: '20px' } },
	                                        'Please state the extent to which you agree or disagree with the following statements.'
	                                    ),
	                                    _react2.default.createElement(
	                                        'form',
	                                        { className: 'form', onSubmit: handleSubmit(function (e) {
	                                                return _this2.onSubmit(e);
	                                            }) },
	                                        SATISFACTION.map(function (e) {
	                                            return _react2.default.createElement(
	                                                'div',
	                                                null,
	                                                e.Q,
	                                                A.map(function (v) {
	                                                    return _react2.default.createElement(
	                                                        'div',
	                                                        { className: 'form-check' },
	                                                        _react2.default.createElement(
	                                                            'label',
	                                                            { className: 'form-check-label' },
	                                                            _react2.default.createElement('input', _extends({}, e.fieldValue, { className: 'form-check-input', type: 'radio', value: v.value })),
	                                                            v.name
	                                                        )
	                                                    );
	                                                })
	                                            );
	                                        }),
	                                        _react2.default.createElement(
	                                            'button',
	                                            { type: 'submit', className: 'btn btn-primary' },
	                                            'Next'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return page17;
	}(_react.Component);

	function validate(formProps) {
	    var errors = {};

	    return errors;
	}

	exports.default = (0, _reduxForm.reduxForm)({
	    form: 'page17',
	    fields: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'],
	    validate: validate
	}, null, { page17Submit: _page_actions.page17Submit })(page17);

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reduxForm = __webpack_require__(11);

	var _page_actions = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var page18 = function (_Component) {
	    _inherits(page18, _Component);

	    function page18() {
	        _classCallCheck(this, page18);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(page18).apply(this, arguments));
	    }

	    _createClass(page18, [{
	        key: 'onSubmit',
	        value: function onSubmit(e) {
	            this.props.page18Submit(e);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var _props$fields = _props.fields;
	            var designImpactCor = _props$fields.designImpactCor;
	            var designImpactEnv = _props$fields.designImpactEnv;
	            var workspaceInteraction = _props$fields.workspaceInteraction;
	            var currentWork3 = _props$fields.currentWork3;
	            var futureWork3 = _props$fields.futureWork3;
	            var handleSubmit = _props.handleSubmit;

	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'well bs-component' },
	                            _react2.default.createElement(
	                                'fieldset',
	                                null,
	                                _react2.default.createElement(
	                                    'legend',
	                                    null,
	                                    'Question 18: Future space'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-md-8 offset-xs-2' },
	                                    _react2.default.createElement(
	                                        'form',
	                                        { className: 'form', onSubmit: handleSubmit(function (e) {
	                                                return _this2.onSubmit(e);
	                                            }) },
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'form-group' },
	                                            _react2.default.createElement(
	                                                'label',
	                                                null,
	                                                'What impact do you think the design of the current office has on its corporate image?'
	                                            ),
	                                            _react2.default.createElement('textarea', _extends({ className: 'form-control', rows: '3' }, designImpactCor))
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'form-group' },
	                                            _react2.default.createElement(
	                                                'label',
	                                                null,
	                                                'What impact do you think the design of the current office has on its environmental sustainability?'
	                                            ),
	                                            _react2.default.createElement('textarea', _extends({ className: 'form-control', rows: '3' }, designImpactEnv))
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'form-group' },
	                                            _react2.default.createElement(
	                                                'label',
	                                                null,
	                                                'What could improve workspace interaction?'
	                                            ),
	                                            _react2.default.createElement('textarea', _extends({ className: 'form-control', rows: '3' }, workspaceInteraction))
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'form-group' },
	                                            _react2.default.createElement(
	                                                'label',
	                                                null,
	                                                'Please provide 3 words to describe your current workplace'
	                                            ),
	                                            _react2.default.createElement('textarea', _extends({ className: 'form-control', rows: '3' }, currentWork3))
	                                        ),
	                                        _react2.default.createElement(
	                                            'div',
	                                            { className: 'form-group' },
	                                            _react2.default.createElement(
	                                                'label',
	                                                null,
	                                                'Please provide 3 words to describe you ideal future workplace'
	                                            ),
	                                            _react2.default.createElement('textarea', _extends({ className: 'form-control', rows: '3' }, futureWork3))
	                                        ),
	                                        _react2.default.createElement(
	                                            'button',
	                                            { type: 'submit', className: 'btn btn-primary' },
	                                            'Next'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return page18;
	}(_react.Component);

	function validate(formProps) {
	    var errors = {};

	    return errors;
	}

	exports.default = (0, _reduxForm.reduxForm)({
	    form: 'page18',
	    fields: ['designImpactCor', 'designImpactEnv', 'workspaceInteraction', 'currentWork3', 'futureWork3'],
	    validate: validate
	}, null, { page18Submit: _page_actions.page18Submit })(page18);

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reduxForm = __webpack_require__(11);

	var _page_actions = __webpack_require__(12);

	var _reactRouter = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var page19 = function (_Component) {
	    _inherits(page19, _Component);

	    function page19() {
	        _classCallCheck(this, page19);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(page19).apply(this, arguments));
	    }

	    _createClass(page19, [{
	        key: 'onSubmit',
	        value: function onSubmit(e) {
	            this.props.page19Submit(this.props.pageData);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var _props$fields = _props.fields;
	            var role = _props$fields.role;
	            var specificDetails = _props$fields.specificDetails;
	            var handleSubmit = _props.handleSubmit;

	            return _react2.default.createElement(
	                'div',
	                { className: 'container' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'row' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'col-md-12' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'well bs-component' },
	                            _react2.default.createElement(
	                                'fieldset',
	                                null,
	                                _react2.default.createElement(
	                                    'legend',
	                                    null,
	                                    'Finish Survey'
	                                ),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'col-md-8 offset-xs-2' },
	                                    _react2.default.createElement(
	                                        'form',
	                                        { className: 'form', onSubmit: handleSubmit(function (e) {
	                                                return _this2.onSubmit(e);
	                                            }) },
	                                        _react2.default.createElement(
	                                            'button',
	                                            { type: 'submit', className: 'btn btn-primary' },
	                                            'Finish & Submit'
	                                        )
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return page19;
	}(_react.Component);

	function mapStateToProps(state) {
	    return {
	        pageData: state.pageReducers
	    };
	}

	exports.default = (0, _reduxForm.reduxForm)({
	    form: 'page19',
	    fields: ['role', 'specificDetails']
	}, mapStateToProps, { page19Submit: _page_actions.page19Submit })(page19);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Page13 = function (_Component) {
	    _inherits(Page13, _Component);

	    function Page13() {
	        _classCallCheck(this, Page13);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Page13).apply(this, arguments));
	    }

	    _createClass(Page13, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Page 13'
	                )
	            );
	        }
	    }]);

	    return Page13;
	}(_react.Component);

	exports.default = Page13;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Page13 = function (_Component) {
	    _inherits(Page13, _Component);

	    function Page13() {
	        _classCallCheck(this, Page13);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Page13).apply(this, arguments));
	    }

	    _createClass(Page13, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Page 13'
	                )
	            );
	        }
	    }]);

	    return Page13;
	}(_react.Component);

	exports.default = Page13;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(40);

	var _pageReducers = __webpack_require__(41);

	var _reduxForm = __webpack_require__(11);

	var rootReducer = (0, _redux.combineReducers)({
	    pageReducers: _pageReducers.page_data,
	    form: _reduxForm.reducer
	});

	exports.default = rootReducer;

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.page_data = page_data;
	function page_data() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case "SIGN_IN":
	            return _extends({}, state, { credentials: action.payload });
	        case "PAGE_1":
	            console.log(state);
	            return _extends({}, state, { page1: action.payload });
	        case "PAGE_2":
	            console.log(state);
	            return _extends({}, state, { page2: action.payload });
	        case "PAGE_3":
	            console.log(state);
	            return _extends({}, state, { page3: action.payload });
	        case "PAGE_4":
	            console.log(state);
	            return _extends({}, state, { page4: action.payload });
	        case "PAGE_5":
	            console.log(state);
	            return _extends({}, state, { page5: action.payload });
	        case "PAGE_6":
	            console.log(action.payload);
	            return _extends({}, state, { page6: action.payload });
	        case "PAGE_7":
	            console.log(action.payload);
	            return _extends({}, state, { page7: action.payload });
	        case "PAGE_8":
	            console.log(action.payload);
	            return _extends({}, state, { page8: action.payload });
	        case "PAGE_9":
	            console.log(action.payload);
	            return _extends({}, state, { page9: action.payload });
	        case "PAGE_10":
	            console.log(action.payload);
	            return _extends({}, state, { page10: action.payload });
	        case "PAGE_11":
	            console.log(action.payload);
	            return _extends({}, state, { page11: action.payload });
	        case "PAGE_12":
	            console.log(action.payload);
	            return _extends({}, state, { page12: action.payload });
	        case "PAGE_13":
	            console.log(action.payload);
	            return _extends({}, state, { page13: action.payload });
	        case "PAGE_14":
	            console.log(action.payload);
	            return _extends({}, state, { page14: action.payload });
	        case "PAGE_15":
	            console.log(action.payload);
	            return _extends({}, state, { page15: action.payload });
	        case "PAGE_16":
	            console.log(action.payload);
	            return _extends({}, state, { page16: action.payload });
	        case "PAGE_17":
	            console.log(action.payload);
	            return _extends({}, state, { page17: action.payload });
	        case "PAGE_18":
	            console.log(action.payload);
	            return _extends({}, state, { page18: action.payload });
	    }
	    return state;
	}

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ }
/******/ ]);