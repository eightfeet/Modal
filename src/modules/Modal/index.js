import template from './template/index';
import { onceAnimationEnd } from 'web-animation-club';
import s from './template/index.scss';
import { createDom, removeDom } from '~/utils/htmlFactory.js';

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
			style,
			Animation
		} = data || {};

		this.state = {
			id: id || `modules${stamp}`, // moduleId
			shouldCloseOnOverlayClick: shouldCloseOnOverlayClick === true, // 点击背景层关闭弹窗
			maxWidth: maxWidth || '90%', // 最大宽度
			maxHeight: maxHeight || '80%', // 最大高度
			zIndex: zIndex || 100, // 层级
			closable: closable === true, // 可关闭
			style: style || null, // 基础样式
			Animation: !!Animation
		};
	}
	show = (elements) => {
		const {id, Animation, ...other} = this.state;
		return createDom(template(elements, other), id)
			.then(() => console.log('创建弹窗成功'))
			.then(() => new Promise( resolve => {
				if (!Animation) {
					resolve();
					return;
				}
				const element = document.querySelector(`.${s.content}`);
				element.classList.add(s.animated);
				window.setTimeout(() => {
					element.classList.add(s.zoomIn);
					element.style.display="block";
					resolve(element);
				});
			}))
			.then((element) => element ? onceAnimationEnd(element) : null)
			.then(() => console.log('动画结束'))
			.then(() => {
				const element = document.querySelector(`.${s.close}`);
				element.onclick = () => this.hide();
			})
			.catch(err => console.log(err));
	}
	hide = () => new Promise((resolve) => {
		console.log(0, this.state);
		if (!this.state.Animation) {
			console.log(1);
			resolve();
			return;
		}
		const element = document.querySelector(`.${s.content}`);
		element.classList.add(s.animated);
		window.setTimeout(() => {
			console.log(2);
			element.classList.remove(s.zoomIn);
			element.classList.add(s.zoomOut);
			resolve(element);
		});
	}).then(() => removeDom(this.state.id));
}

export default Modal;