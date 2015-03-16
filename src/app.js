'use strict';

// use jQuery
window.jQuery = window.$ = require("jquery");
var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

// Export React so the dev tools can find it
(window !== window.top ? window.top : window).React = React;

var routes = require('./components/common/routers');
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});

