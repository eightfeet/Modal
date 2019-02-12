import './style/common';
import {fixpx} from './utils/tools';
if (window.Promise === undefined) {
	throw new Error('Promise pollyfill not found.');
}

import Modal from 'modules/SuccessModal';

const newModal = new Modal({
	zIndex: 100, // modal的层级
	// Animation: true,
	style: {
		overlay: {
			backgroundColor: 'rgba(0,0,0,0.5)'
		},
		content: {
			backgroundColor: 'rgba(100, 100, 100, 0.2)',
			width: fixpx(700),
			// 设置内容的层级关系
			zIndex: 101
		},
		close: {
			backgroundColor: 'rgba(0, 0, 0, 1)'
		},
		// modify层级按照zIndex（modal的层级）以2为步值递增
		modify: [
			{
				backgroundColor: 'green',
				width: '20%'
			},
			{
				backgroundColor: 'red',
				width: '100%',
				left: '0',
				top: '2em'
			},
			{
				backgroundColor: 'blue',
				width: '30px',
				left: '3em',
				top: '1em'
			}
		]
	}
});

const btn = document.getElementById('asd');

btn.onclick = () => newModal.show({
	header:'<div style="position:relative; z-index: 90;background-color: yellow;">恭喜您</div>',
	main: '<div style="background-color: #fff; height: 300px">获得</div>',
	footer: `<div style="background-color: white" id="close">啥东西</div>`
}).then(() => {
	document.getElementById('close').onclick = () => newModal.hide();
});


// module.exports = Modal;