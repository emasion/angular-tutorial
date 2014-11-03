'use strict'

var TableListService = require('./tablelist/TableListService')

// @ngInject
function config($stateProvider) {

}

angular.module('tutorial.common', [])
.config(config)
.service('TableListService', TableListService)