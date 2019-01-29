import './style/common';
if (window.Promise === undefined) {
	throw new Error('Promise pollyfill not found.');
}

import Modal from 'modules/SuccessModal';

const newModal = new Modal({
	style: {
		overlay: {
			backgroundColor: 'rgba(0,0,0,0.8)'
		},
		content: {
			backgroundColor: '#eee',
			height: '5em',
			width: '95%'
		}
	}
});

newModal.show();

// module.exports = Modal;