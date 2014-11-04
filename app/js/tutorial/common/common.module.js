'use strict'

var TableListService = require('./tablelist/TableListService')
var LoadCodeTemplateService = require('./syntaxhighlighter/LoadCodeTemplateService')

// @ngInject
function config($routeProvider) {

}

angular.module('tutorial.common', [])
.config(config)
.service('TableListService', TableListService)
.service('LoadCodeTemplateService', LoadCodeTemplateService)