import './style/common';
if (window.Promise === undefined) {
	throw new Error('Promise pollyfill not found.');
}

import Modal from 'modules/Modal';

module.exports = Modal;
