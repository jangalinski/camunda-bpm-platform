'use strict';

var Page = require('./../base');

module.exports = Page.extend({

  url: '/camunda/app/admin/default/#/groups/:group?tab=group',

  updateGroupButton: function() {
    return element(by.css('[data-ng-click="updateGroup()"]'));
  },

  groupNameInput: function(inputValue) {
    var inputField = element(by.model('group.name'));

    if (arguments.length !== 0)
      inputField.sendKeys(inputValue);

    return inputField;
  },

  groupTypeInput: function(inputValue) {
    var inputField = element(by.model('group.type'));

    if (arguments.length !== 0)
      inputField.sendKeys(inputValue);

    return inputField;
  },

  deleteGroupButton: function() {
    return element(by.css('[data-ng-click="deleteGroup()"]'));
  },

  deleteGroupAlert: function() {
    var ptor = protractor.getInstance();
    return ptor.switchTo().alert();
  }

});
