'use strict';

var keyMirror = require('react/lib/keyMirror');

var ActionTypes = keyMirror({

  // 问题相关
  QUESTION_LIST_RECEIVE: null,
  QUESTION_NEXT: null,
  QUESTION_PICK: null,

  // 答题相关
  ANSWER_CHOOSE: null,
  EXAM_START: null,
  EXAM_START_RESULT_RECEIVE: null,
  EXAM_STOP: null,

  // Route action types
  SET_CURRENT_ROUTE: null,

  // Page action types
  SET_CURRENT_PAGE: null

});

module.exports = ActionTypes;
