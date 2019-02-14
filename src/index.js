import './style/common';
import {fixpx} from './utils/tools';
if (window.Promise === undefined) {
	throw new Error('Promise pollyfill not found.');
}

import Modal from 'modules/SuccessModal';

const newModal = new Modal({
	// zIndex: 100, // modal的层级默认100
	Animation: true, // 默认false
	style: {
		overlay: {
			backgroundColor: 'rgba(0,0,0,0.5)'
		},
		content: {
			backgroundColor: 'rgba(100, 100, 100, 0.2)',
			width: fixpx(700),
			// 设置内容的层级关系
			zIndex: 107
		},
		close: {
			backgroundColor: 'rgba(0, 0, 0, 1)',
			width: '1em',
			height: '1em',
			top: '-3em',
			left: '50%'
		},
		// modify层级按照zIndex（modal的层级）以2为步值递增
		modify: [
			{
				backgroundColor: 'rgba(0, 0, 255, 0.4)',
				width: '120%',
				left: '-10%',
				height: '200px',
				border: '1px solid rgba(0, 0, 255, 0.6)',
				top: '-5em'
			},
			{
				backgroundColor: 'rgba(0, 0, 255, 0.4)',
				width: '130%',
				left: '-15%',
				height: '200px',
				border: '1px solid rgba(0, 0, 255, 0.6)',
				top: '-4em'
			},
			{
				backgroundColor: 'rgba(0, 0, 255, 0.4)',
				width: '140%',
				left: '-20%',
				height: '200px',
				border: '1px solid rgba(0, 0, 255, 0.6)',
				top: '-3em'
			},
			{
				backgroundColor: 'rgba(0, 0, 255, 0.4)',
				width: '150%',
				left: '-25%',
				height: '200px',
				border: '1px solid rgba(0, 0, 255, 0.6)',
				top: '-2em'
			}
		]
	}
});

const btn = document.getElementById('example');

btn.onclick = () => newModal.show({
	header:'<div style="position:relative; z-index: 90;background-color: yellow;">头部</div>',
	main: `<div style="background-color: #fff;">
				这是一段内容这是一段内容
			</div>`,
	footer: `<div style="background-color: white">
				<button id="close" style="border:1px solid #aaa; padding: 1em">确定</button>
				<br>
				脚部
			</div>`
}).then(() => {
	document.getElementById('close').onclick = () => newModal.hide();
});


// module.exports = Modal;