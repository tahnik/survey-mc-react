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

	app.listen(3000, function () {
		console.log('Hello World listening on port 3000!');
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

	var _index = __webpack_require__(22);

	var _index2 = _interopRequireDefault(_index);

	var _redux = __webpack_require__(23);

	var _reactRedux = __webpack_require__(26);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var express = __webpack_require__(1);
	var router = express.Router();
	var path = __webpack_require__(27);

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
	  return '\n    <!DOCTYPE html>\n    <html lang="en">\n    <head>\n    \t<!-- Required meta tags always come first -->\n    \t<meta charset="utf-8">\n    \t<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">\n    \t<meta http-equiv="x-ua-compatible" content="ie=edge">\n\n    \t<!-- Bootstrap CSS -->\n    \t<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.3/css/bootstrap.min.css">\n    \t<link rel="stylesheet" href="../stylesheets/main.css">\n    </head>\n    <body>\n\n    \t<div id="reactbody"><div>' + html + '</div></div>\n        <script>\n            window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + '\n          </script>\n    \t<script src="../bin/app.bundle.js"></script>\n    \t<!-- jQuery first, then Bootstrap JS. -->\n    \t<script src="https://www.atlasestateagents.co.uk/javascript/tether.min.js"></script>\n    \t<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>\n    \t<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.3/js/bootstrap.min.js"></script>\n    </body>\n    </html>\n    ';
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

	var _header = __webpack_require__(7);

	var _header2 = _interopRequireDefault(_header);

	var _intro = __webpack_require__(8);

	var _intro2 = _interopRequireDefault(_intro);

	var _page = __webpack_require__(9);

	var _page2 = _interopRequireDefault(_page);

	var _page3 = __webpack_require__(10);

	var _page4 = _interopRequireDefault(_page3);

	var _page5 = __webpack_require__(11);

	var _page6 = _interopRequireDefault(_page5);

	var _page7 = __webpack_require__(12);

	var _page8 = _interopRequireDefault(_page7);

	var _page9 = __webpack_require__(13);

	var _page10 = _interopRequireDefault(_page9);

	var _page11 = __webpack_require__(14);

	var _page12 = _interopRequireDefault(_page11);

	var _page13 = __webpack_require__(15);

	var _page14 = _interopRequireDefault(_page13);

	var _page15 = __webpack_require__(16);

	var _page16 = _interopRequireDefault(_page15);

	var _page17 = __webpack_require__(17);

	var _page18 = _interopRequireDefault(_page17);

	var _page19 = __webpack_require__(18);

	var _page20 = _interopRequireDefault(_page19);

	var _page21 = __webpack_require__(19);

	var _page22 = _interopRequireDefault(_page21);

	var _page23 = __webpack_require__(20);

	var _page24 = _interopRequireDefault(_page23);

	var _page25 = __webpack_require__(21);

	var _page26 = _interopRequireDefault(_page25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.browserHistory },
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/', component: _header2.default },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _intro2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/page1', component: _page2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page2', component: _page4.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page3', component: _page6.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page4', component: _page8.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page5', component: _page10.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page6', component: _page12.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page7', component: _page14.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page8', component: _page16.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page9', component: _page18.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page10', component: _page20.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page11', component: _page22.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page12', component: _page24.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: '/Page13', component: _page26.default })
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
																	{ style: { marginTop: 20 } },
																	_react2.default.createElement(
																					'h1',
																					{ className: 'text-xs-center' },
																					'Welcome to the Survey'
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reduxForm = __webpack_require__(25);

	var _page_actions = __webpack_require__(28);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Intro = function (_Component) {
	    _inherits(Intro, _Component);

	    function Intro() {
	        _classCallCheck(this, Intro);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Intro).apply(this, arguments));
	    }

	    _createClass(Intro, [{
	        key: 'onSubmit',
	        value: function onSubmit(e) {
	            this.props.Signin(e);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props = this.props;
	            var password = _props.fields.password;
	            var handleSubmit = _props.handleSubmit;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'form',
	                    { className: 'form-inline', onSubmit: handleSubmit(function (e) {
	                            return _this2.onSubmit(e);
	                        }) },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'form-group' },
	                        _react2.default.createElement(
	                            'label',
	                            { className: 'sr-only' },
	                            'Password'
	                        ),
	                        _react2.default.createElement('input', _extends({ type: 'password', className: 'form-control', placeholder: 'Password' }, password)),
	                        password.touched && password.error && _react2.default.createElement(
	                            'div',
	                            { className: 'form-control-feedback' },
	                            password.error
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'button',
	                        { type: 'submit', className: 'btn btn-primary' },
	                        'Enter'
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
	    } else if (PASSWORD_VALIDATOR_REGEX.exec(formProps.password) === null) {
	        errors.password = "Password must have an Uppercase and Lowercase Letter and a number. It must be at least 6 characters long";
	    }

	    return errors;
	}

	exports.default = (0, _reduxForm.reduxForm)({
	    form: 'Signin',
	    fields: ['password'],
	    validate: validate
	}, null, { Signin: _page_actions.Signin })(Intro);

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

	var _reduxForm = __webpack_require__(25);

	var _page_actions = __webpack_require__(28);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Intro = function (_Component) {
	  _inherits(Intro, _Component);

	  function Intro() {
	    _classCallCheck(this, Intro);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Intro).apply(this, arguments));
	  }

	  _createClass(Intro, [{
	    key: 'onSubmit',
	    value: function onSubmit(e) {
	      this.props.Signin(e);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var password = _props.fields.password;
	      var handleSubmit = _props.handleSubmit;

	      return _react2.default.createElement(
	        'div',
	        { className: 'col-md-8 offset-xs-2' },
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Are you?'
	        ),
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
	              _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'exampleRadios', id: 'exampleRadios1', value: 'CSS' }),
	              'CSS'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'form-check' },
	            _react2.default.createElement(
	              'label',
	              { className: 'form-check-label' },
	              _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'exampleRadios', id: 'exampleRadios2', value: 'CSSS' }),
	              'CSSS'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'form-check' },
	            _react2.default.createElement(
	              'label',
	              { className: 'form-check-label' },
	              _react2.default.createElement('input', { className: 'form-check-input', type: 'radio', name: 'exampleRadios', id: 'exampleRadios3', value: 'CSSA' }),
	              'CSSA'
	            )
	          ),
	          _react2.default.createElement(
	            'button',
	            { type: 'submit', className: 'btn btn-primary' },
	            'Enter'
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
	  } else if (PASSWORD_VALIDATOR_REGEX.exec(formProps.password) === null) {
	    errors.password = "Password must have an Uppercase and Lowercase Letter and a number. It must be at least 6 characters long";
	  }

	  return errors;
	}

	exports.default = (0, _reduxForm.reduxForm)({
	  form: 'Signin',
	  fields: ['password'],
	  validate: validate
	}, null, { Signin: _page_actions.Signin })(Intro);

/***/ },
/* 10 */
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

	var Page2 = function (_Component) {
	    _inherits(Page2, _Component);

	    function Page2() {
	        _classCallCheck(this, Page2);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Page2).apply(this, arguments));
	    }

	    _createClass(Page2, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Page 2'
	                )
	            );
	        }
	    }]);

	    return Page2;
	}(_react.Component);

	exports.default = Page2;

/***/ },
/* 11 */
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

	var Page3 = function (_Component) {
	    _inherits(Page3, _Component);

	    function Page3() {
	        _classCallCheck(this, Page3);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Page3).apply(this, arguments));
	    }

	    _createClass(Page3, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Page 3'
	                )
	            );
	        }
	    }]);

	    return Page3;
	}(_react.Component);

	exports.default = Page3;

/***/ },
/* 12 */
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

	var Page4 = function (_Component) {
	    _inherits(Page4, _Component);

	    function Page4() {
	        _classCallCheck(this, Page4);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Page4).apply(this, arguments));
	    }

	    _createClass(Page4, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Page 4'
	                )
	            );
	        }
	    }]);

	    return Page4;
	}(_react.Component);

	exports.default = Page4;

/***/ },
/* 13 */
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

	var Page5 = function (_Component) {
	    _inherits(Page5, _Component);

	    function Page5() {
	        _classCallCheck(this, Page5);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Page5).apply(this, arguments));
	    }

	    _createClass(Page5, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Page 5'
	                )
	            );
	        }
	    }]);

	    return Page5;
	}(_react.Component);

	exports.default = Page5;

/***/ },
/* 14 */
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

	var Page6 = function (_Component) {
	    _inherits(Page6, _Component);

	    function Page6() {
	        _classCallCheck(this, Page6);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Page6).apply(this, arguments));
	    }

	    _createClass(Page6, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Page 6'
	                )
	            );
	        }
	    }]);

	    return Page6;
	}(_react.Component);

	exports.default = Page6;

/***/ },
/* 15 */
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

	var Page7 = function (_Component) {
	    _inherits(Page7, _Component);

	    function Page7() {
	        _classCallCheck(this, Page7);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Page7).apply(this, arguments));
	    }

	    _createClass(Page7, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Page 7'
	                )
	            );
	        }
	    }]);

	    return Page7;
	}(_react.Component);

	exports.default = Page7;

/***/ },
/* 16 */
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

	var Page8 = function (_Component) {
	    _inherits(Page8, _Component);

	    function Page8() {
	        _classCallCheck(this, Page8);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Page8).apply(this, arguments));
	    }

	    _createClass(Page8, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Page 8'
	                )
	            );
	        }
	    }]);

	    return Page8;
	}(_react.Component);

	exports.default = Page8;

/***/ },
/* 17 */
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

	var Page9 = function (_Component) {
	    _inherits(Page9, _Component);

	    function Page9() {
	        _classCallCheck(this, Page9);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Page9).apply(this, arguments));
	    }

	    _createClass(Page9, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Page 9'
	                )
	            );
	        }
	    }]);

	    return Page9;
	}(_react.Component);

	exports.default = Page9;

/***/ },
/* 18 */
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

	var Page10 = function (_Component) {
	    _inherits(Page10, _Component);

	    function Page10() {
	        _classCallCheck(this, Page10);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Page10).apply(this, arguments));
	    }

	    _createClass(Page10, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Page 10'
	                )
	            );
	        }
	    }]);

	    return Page10;
	}(_react.Component);

	exports.default = Page10;

/***/ },
/* 19 */
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

	var Page11 = function (_Component) {
	    _inherits(Page11, _Component);

	    function Page11() {
	        _classCallCheck(this, Page11);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Page11).apply(this, arguments));
	    }

	    _createClass(Page11, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Page 11'
	                )
	            );
	        }
	    }]);

	    return Page11;
	}(_react.Component);

	exports.default = Page11;

/***/ },
/* 20 */
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

	var Page12 = function (_Component) {
	    _inherits(Page12, _Component);

	    function Page12() {
	        _classCallCheck(this, Page12);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Page12).apply(this, arguments));
	    }

	    _createClass(Page12, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'Page 12'
	                )
	            );
	        }
	    }]);

	    return Page12;
	}(_react.Component);

	exports.default = Page12;

/***/ },
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _redux = __webpack_require__(23);

	var _pageReducers = __webpack_require__(24);

	var _reduxForm = __webpack_require__(25);

	var rootReducer = (0, _redux.combineReducers)({
	    pageReducers: _pageReducers.page_data,
	    form: _reduxForm.reducer
	});

	exports.default = rootReducer;

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.page_data = page_data;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function page_data() {
	    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	    var action = arguments[1];

	    switch (action.type) {
	        case "PAGE_1":
	            return [].concat(_toConsumableArray(state), [action.payload]);
	    }
	    return state;
	}

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = require("redux-form");

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Signin = Signin;

	var _reactRouter = __webpack_require__(4);

	function Signin(password) {
		console.log(password);
	}

/***/ }
/******/ ]);