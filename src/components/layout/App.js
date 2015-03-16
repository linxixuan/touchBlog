/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var React = require('react');
var PageStore = require('../../stores/PageStore');
var Navbar = require('../layout/Navbar');
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;

/**
 * Retrieves the current page metadata from the PageStore.
 * @returns {{title: string}}
 */
function getState() {
  return {
    title: PageStore.get().title
  };
}

var DefaultLayout = React.createClass({

  mixins: [PageStore.Mixin],

  getInitialState() {
    return getState();
  },

  // TODO cause all component render twice
  componentDidMount() {
    PageStore.emitChange();
  },

  render() {
    /* jshint ignore:start */
    var header = (
      <div className="container title-container">
        <h2>{this.state.title}</h2>
      </div>
    );
    /* jshint ignore:end */

    return (
      /* jshint ignore:start */
      <div>
        <Navbar />
        {header}

        <RouteHandler />

        <div className="navbar-footer">
          <div className="container">
            <p className="text-muted">
              <span><Link to="/">Home</Link></span>
              <span><Link to="/privacy">Privacy</Link></span>
            </p>
          </div>
        </div>
      </div>
      /* jshint ignore:end */
    );
  },

  /**
   * Event handler for 'change' events coming from the PageStore.
   */
  onChange() {
    this.setState(getState());
  }
});

module.exports = DefaultLayout;
