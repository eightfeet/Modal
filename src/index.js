require('./style/common');
if (window.Promise === undefined) {
	throw new Error('Promise pollyfill not found.');
}

module.exports = require('./modules/Modal').default;
