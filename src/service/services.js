'use strict';


angular.module('app.services', [])
  .service('lodash', ['$window', function($window) {
    return $window._;
  }])
   .factory('loadFile', ['$http', function($http) {
    return function loadFile() {
      return $http.get('https://dl.dropboxusercontent.com/u/79679734/data.json');
    };
  }])