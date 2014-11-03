'use strict'

require('./tutorial/tutorial.module')

var debugState = require('./common/run/debugState')

angular.module('app', [
	'ui.router',
	'tutorial'
])
.run(debugState)

