require('./style/common');
if (window.Promise === undefined) {
	throw new Error('Promise pollyfill not found.');
}

class Modal {
	constructor(){
		this.name = 'Modal';
	}
}

module.exports = Modal;
