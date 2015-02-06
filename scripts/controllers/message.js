'use strict';

var app = angular.module('chattyApp')
 app.controller('MessageCtrl', function($scope, MessageService) {
    $scope.messages = [];

    MessageService.getMessages().then(function(res) {
    	$scope.messages = res.data;
    	// MessageService.getMessages();
    	//console.log($scope.messages)
    }) 

    $scope.addMessage = function() {
    	MessageService.postMessageData($scope.texts).then(function(res){
    		$scope.messages = res.data
    	});

    	$scope.texts = '';
    }
   
  });
