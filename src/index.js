import './style/common';
import {fixpx} from './utils/tools';
if (window.Promise === undefined) {
	throw new Error('Promise pollyfill not found.');
}

import Modal from 'modules/SuccessModal';

const newModal = new Modal({
	zIndex: 100,
	style: {
		overlay: {
			backgroundColor: 'rgba(0,0,0,0)'
		},
		content: {
			backgroundColor: 'rgba(100, 100, 100, 0.2)',
			width: fixpx(700),
			zIndex: 109
		},
		close: {
			
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

newModal.show({
	header:'<div style="position:relative; z-index: 90;background-color: yellow;">恭喜您</div>',
	main: '获得',
	footer: '啥东西'
});

// module.exports = Modal;