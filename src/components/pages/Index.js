/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

'use strict';

var React = require('react');
var PageActions = require('../../actions/PageActions');
var App = require('../layout/App');
var Link = require('react-router').Link;

require('./index.less');

var HomePage = React.createClass({

  statics: {
    layout: App
  },

  getInitialState() {
    return {isLogin: false}
  },

  componentWillMount() {
    PageActions.set({title: 'Kylin - online examination system'});
  },

  render() {
    return ();
  }

});

module.exports = HomePage;
