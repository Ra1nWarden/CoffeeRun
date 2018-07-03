(function (window) {
  'use strict';
  var App = window.App || {};

  function DataStore() {
    console.log('running the DataStore function');
    this.data = {};
  }

  DataStore.prototype.add = function (k, v) {
    this.data[k] = v;
  };

  DataStore.prototype.get = function (k) {
    return this.data[k];
  };

  DataStore.prototype.getAll = function () {
    return this.data;
  };

  DataStore.prototype.remove = function (k) {
    delete this.data[k];
  };

  App.DataStore = DataStore;
  window.App = App;
})(window);
