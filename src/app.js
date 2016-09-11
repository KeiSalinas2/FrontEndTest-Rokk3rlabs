'use strict';

angular.module('app', ['ui.router','app.controller', 'app.services', 'app.dashboard', 'app.news'])

angular
  .module('app')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        views: {
          '': { templateUrl: './templates/base/app.html', controller: 'appController' },
          'dashboard@home': { templateUrl: './templates/dashboard/dashboard_tpl.html', controller: 'DahsboardController' },
          'news@home': { templateUrl: './templates/news/news_tpl.html', controller: 'NewsController' }
        }
      });

    $urlRouterProvider.otherwise('/');
  }]);

angular.module('app.controller', [])
  .controller('appController', ['$scope', '$state', function($scope, $state) {

    $scope.currentView = 'dashboard';

    $scope.nav = true;

    $scope.showNav = function(nav) {
      $scope.nav = nav;
    };

    $scope.templates = {
      header: 'templates/base/header_tpl.html',
      aside: 'templates/base/aside_tpl.html'
    };

    $scope.changeView = function(view) {
      $scope.currentView = view;
    };

  }]);