require("babel-register")({
	sourceMap: 'inline',
	presets: ['es2015', 'stage-3'],
	// include superfluous whitespace characters and line terminators
	compact: false
});
require('dotenv').config({path: '.env'});

const logger = require('./lib/logger');
const server = require('./server.js');

server.listen(process.env.APP_PORT || 3000, function () {
	logger.info('Server running at', process.env.PORT || 3000)
})