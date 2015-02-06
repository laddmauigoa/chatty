'use strict';

var app = angular.module('chattyApp')
  app.service('MessageService', function($http, $q){
  	this.getMessages = function() {
  		var dfd = $q.defer();

  		$http({
  			method: 'GET',
  			url: 'http://localhost:8864'
  		})
  		.then(function(res) {
  			console.log(res)
  			console.log('..............')
  			var Obj = {
  				data: res
  			}
  			dfd.resolve(res);
  		},
  			function(err) {
  				console.log('err', err)
  			})
  		return dfd.promise;
  	}

  	this.postMessageData = function(text) {
  		var dfd = $q.defer();

  		$http({
  			method: 'POST',
  			url: 'http://localhost:8864',
  			data: {
  				messages: text
  			}
  			

  		})
  		.then(function(res) {
  			console.log(res)
  			// var Obj = {
  			// 	data: res
  			// }
  			dfd.resolve(res);
  		},
  			function(err) {
  				console.log('err', err)
  			})
  		return dfd.promise;
  	}
  		//  return $http({
  		// 	method: 'POST',
  		// 	url: 'http://localhost:8864',
  		// 	data: text

  		// })
  	//}
    
  });

