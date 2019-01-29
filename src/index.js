import './style/common';
import {fixpx} from './utils/tools';
if (window.Promise === undefined) {
	throw new Error('Promise pollyfill not found.');
}

import Modal from 'modules/SuccessModal';

const newModal = new Modal({
	style: {
		overlay: {
			backgroundColor: 'rgba(0,0,0,0)'
		},
		content: {
			backgroundColor: 'rgba(100, 100, 100, 0.2)',
			width: fixpx(700),
			zIndex: 101
		},
		modify: [
			{
				backgroundColor: 'green',
				width: '20%'
			},
			{
				backgroundColor: 'red',
				width: '150%',
				left: '0',
				top: '2em'
			}
		]
	}
});

newModal.show();

// module.exports = Modal;