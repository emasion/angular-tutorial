'use strict'

var TableListService = require('./tablelist/TableListService')

// @ngInject
function config($routeProvider) {

}

angular.module('tutorial.common', [])
.config(config)
.service('TableListService', TableListService)