'use strict';

var TableListService = require('./tablelist/tablelist.svc')

// @ngInject
function config($routeProvider) {

}

angular.module('tutorial.common', [])
.config(config)
.service('TableListService', TableListService)