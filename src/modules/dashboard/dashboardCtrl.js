'use strict';

/* Controllers */

angular.module('app.dashboard', [])
  .controller('DahsboardController', ['$scope', 'lodash',
    function($scope, _) {

      $scope.data=[
        {"zoneId":"Calle 85", "data":{"count":1,"speed":10,"time":1466781876681}},
        {"zoneId":"Salitre plaza", "data":{"count":2,"speed":8.5,"time":1466781876681}},
        {"zoneId":"Parque 93", "data":{"count":4,"speed":15,"time":1466781876681}},
        {"zoneId":"Calle 80", "data":{"count":3,"speed":13.5,"time":1466781876681}},
        {"zoneId":"Centro", "data":{"count":1,"speed": 9 ,"time":1466781876681}}
      ]

      $scope.fillData = function() {
        $scope.loadData($scope.data, false);

        setInterval(function(){
          $scope.loadData(res.data, true);
        }, 100000);
      };

      $scope.loadData = function(data, interval) {
        var zones = [];
        var count = [];
        var speed = [];
        var time = [];

        _.forEach($scope.data, function(data) {
          zones.push(data.zoneId);
          count.push(data.data.count);
          speed.push(data.data.count);
          time.push(data.data.time);
        });

        if(interval){
          count = _.shuffle(counts);
          speed = _.shuffle(speed);
          avg = _.shuffle(avg);
        }

        $scope.countChart(count, zones);
        $scope.speedtChart(speed, zones);
        $scope.averageChart(time, zones);

      };

      $scope.countChart = function(data, labels) {
        $scope.dataCount = {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [{
              data: data,
              label: labels,
              backgroundColor: [
                'rgba(4, 255, 125, 1)',
                'rgba(56, 1, 293, 1)',
                'rgba(247, 0, 160, 1)',
                'rgba(131, 24, 205, 1)',
                'rgba(131, 255, 205, 1)',
                'rgba(19, 4, 255, 1)'
              ],
              borderColor: [
                'rgba(5, 222, 172, 1)',
                'rgba(209, 74, 219, 1)',
                'rgba(97, 136, 211, 1)',
                'rgba(95, 136, 11, 1)',
                'rgba(193, 215, 91, 1)',
                'rgba(40, 14, 91, 1)'
              ],
              borderWidth: 1
            }]
          }
        };

        var ctx = document.getElementById("count").getContext("2d");
        var myChart = new Chart(ctx, $scope.dataCount)
      };

      $scope.speedtChart = function(data, labels) {
        $scope.dataSpeed = {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              data: data,
              label: labels,
              backgroundColor: [
                'rgba(4, 255, 125, 1)',
                'rgba(56, 1, 293, 1)',
                'rgba(247, 0, 160, 1)',
                'rgba(131, 24, 205, 1)',
                'rgba(131, 255, 205, 1)',
                'rgba(19, 4, 255, 1)'
              ],
              borderColor: [
                'rgba(5, 222, 172, 1)',
                'rgba(209, 74, 219, 1)',
                'rgba(97, 136, 211, 1)',
                'rgba(95, 136, 11, 1)',
                'rgba(193, 215, 91, 1)',
                'rgba(40, 14, 91, 1)'
              ],
              borderWidth: 1
            }]
          }
        };

        var ctx = document.getElementById("speed").getContext("2d");
        var myChart = new Chart(ctx, $scope.dataSpeed)
      };

      $scope.averageChart = function(data, labels) {
        $scope.dataSpeed = {
          type: 'doughnut',
          data: {
            labels: labels,
            datasets: [{
              data: data,
              label: labels,
              backgroundColor: [
                'rgba(4, 255, 125, 1)',
                'rgba(56, 1, 293, 1)',
                'rgba(247, 0, 160, 1)',
                'rgba(131, 24, 205, 1)',
                'rgba(131, 255, 205, 1)',
                'rgba(19, 4, 255, 1)'
              ],
              borderColor: [
                'rgba(5, 222, 172, 1)',
                'rgba(209, 74, 219, 1)',
                'rgba(97, 136, 211, 1)',
                'rgba(95, 136, 11, 1)',
                'rgba(193, 215, 91, 1)',
                'rgba(40, 14, 91, 1)'
              ],
              borderWidth: 1
            }]
          }
        };

        var ctx = document.getElementById("average").getContext("2d");
        var myChart = new Chart(ctx, $scope.dataSpeed)
      };

    }
  ]);