'use strict';

var Router   = require('react-router')
  , { Routes, Route, DefaultRoute } = Router;


var Index = require('../pages/Index')
  , Privacy = require('../pages/Privacy')
  , QuestionList = require('../pages/question/list')
  , App = require('../layout/App');


// TODO sub-route
module.exports = (
    <Route handler={App}>
      <DefaultRoute handler={Index}/>
      <Route name="privacy" path="/privacy" handler={Privacy}/>
      <Route name="questionList" path="/question/list" handler={QuestionList} />
    </Route>
);
