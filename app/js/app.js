'use strict';

require('./tutorial/tutorial.module')

var debugState = require('./common/run/debugState')
var rootScope = require('./common/run/rootScope')

angular.module('app', [
	'tutorial'
])
.run(debugState)
.run(rootScope)

