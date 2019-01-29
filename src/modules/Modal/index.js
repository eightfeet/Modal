import template from './template/index';
import { createDom } from '~/utils/htmlFactory.js';

// const Element = {
// 	header: '1',
// 	main: '2',
// 	footer: '3'
// };

class Modal {
	constructor(data) {
		const stamp = (new Date()).getTime();
		const {
			id,
			shouldCloseOnOverlayClick,
			maxWidth,
			maxHeight,
			zIndex,
			closable,
			style
		} = data || {};

		this.state = {
			id: id || `modules${stamp}`, // moduleId
			shouldCloseOnOverlayClick: shouldCloseOnOverlayClick === true, // 点击背景层关闭弹窗
			maxWidth: maxWidth || '90%', // 最大宽度
			maxHeight: maxHeight || '80%', // 最大高度
			zIndex: zIndex || 100, // 层级
			closable: closable === true, // 可关闭
			style: style || null // 基础样式
		};
	}
	show = (elements) => {
		const {id, ...other} = this.state;
		createDom(template(elements, other), id)
			.catch(err => console.log(err));
	}
}

export default Modal;