'use strict'

require('./tutorial/tutorial.module')

var debugState = require('./common/run/debugState')

angular.module('app', [
	'tutorial'
])
.run(debugState)

