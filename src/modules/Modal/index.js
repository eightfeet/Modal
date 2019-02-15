import template from './template/index';
import { onceAnimationEnd } from 'web-animation-club';
import s from './template/index.scss';
import { createDom, removeDom } from '~/utils/htmlFactory.js';

const openAnimation = function(element, wrapElement, callback){
	element.classList.add(s.animated);
	window.setTimeout(() => {
		element.classList.remove(s.zoomIn);
		element.classList.remove(s.zoomOut);
		element.classList.add(s.zoomIn);
		wrapElement.classList.add(s.fadeIn);
		element.style.display="block";
		wrapElement.style.display="block";
		callback(element);
	});
};

const closeAnimation = function(element, callback){
	element.classList.add(s.animated);
	window.setTimeout(() => {
		element.classList.remove(s.zoomIn);
		element.classList.remove(s.zoomOut);
		element.classList.add(s.zoomOut);
		callback(element);
	});
};

class Modal {
	/**
	 *Creates an instance of Modal.
	 * @param { Object } data
	 * @memberof Modal
	 */
	constructor(data) {
		const stamp = (new Date()).getTime();
		const {
			id,
			shouldCloseOnOverlayClick,
			zIndex,
			closable,
			style,
			Animation
		} = data || {};

		this.state = {
			id: id || `modules${stamp}`, // moduleId
			shouldCloseOnOverlayClick: shouldCloseOnOverlayClick === true, // 点击背景层关闭弹窗
			zIndex: zIndex || 100, // 层级
			closable: closable === false ? false : true, // 是否自带关闭按钮
			style: style || null, // 基础样式
			Animation: Animation === false ? false : true // 是否开启弹窗动画
		};
	}
	/**
	 * @description 创建弹窗
	 * @param {Object} elements {head: htmlDom, main: htmlDom, footer: htmlDom}
	 * @param {Boolean} noRemoval 是否移除弹窗，noRemoval=true时点击关闭按钮仅隐藏当前弹窗而不移除当前弹窗Dom
	 * @memberof Modal
	 */
	create = (elements, noRemoval) => {
		const {id, Animation, shouldCloseOnOverlayClick, ...other} = this.state;
		const modalElement = document.getElementById(id);
		if (modalElement) {
			this.show();
			console.warn('已创建modal时 modal.create === modal.show');
			return Promise.resolve();
		}
		return createDom(template(elements, other), id)
			.then(() => console.log('创建弹窗成功'))
			.then(() => new Promise( resolve => {
				const wrapElement = document.querySelector(`.${s.cove}`);
				const element = document.querySelector(`.${s.content}`);
				if (!Animation) {
					element.style.display="block";
					wrapElement.style.display="block";
					resolve();
					return;
				}
				openAnimation(element, wrapElement, resolve);
			}))
			.then((element) => element ? onceAnimationEnd(element) : null)
			.then(() => console.log('动画结束'))
			.then(() => {
				const elementClose = document.querySelector(`.${s.close}`);
				const wrapElement = document.querySelector(`.${s.cove}`);
				// const element = document.querySelector(`.${s.modules}`);
				if (shouldCloseOnOverlayClick === true) {
					// element.onclick = e => e.stopPropagation(); 是否阻止事件冒泡（待定）
					wrapElement.onclick = () => {
						this.hide(noRemoval);
					};
				}
				elementClose.onclick = () => this.hide(noRemoval);
			})
			.catch(err => console.log(err));
	}
	/**
	 *
	 * @description 移除弹窗
	 * @memberof Modal
	 */
	remove = () => new Promise((resolve) => {
		if (!this.state.Animation) {
			resolve();
			return;
		}
		const element = document.querySelector(`.${s.content}`);
		closeAnimation(element, resolve);
	})
		.then((element) => element ? onceAnimationEnd(element) : null)
		.then(() => removeDom(this.state.id));

	/**
	 *
	 * @description 显示弹窗
	 * @memberof Modal
	 */
	show = () => {
		const {id, Animation} = this.state;
		const modalElement = document.getElementById(id);
		return new Promise((resolve, reject) => {
			const wrapElement = document.querySelector(`.${s.cove}`);
			const element = document.querySelector(`.${s.content}`);
			if (!modalElement) {
				reject('未创建或者已移除modal');
				return;
			}
			if (!Animation) {
				element.style.display="block";
				wrapElement.style.display="block";
				resolve();
				return;
			}
			openAnimation(element, wrapElement, resolve);
		})
			.then(() => {
				modalElement.style.display = 'block';
			});
	}
	/**
	 *
	 * @description 隐藏弹窗
	 * @memberof Modal
	 */
	unvisible = () => {
		const {id, Animation} = this.state;
		const modalElement = document.getElementById(id);
		return new Promise((resolve, reject) => {
			if (!modalElement) {
				reject('未创建modal');
				return;
			}
			if (!Animation) {
				resolve();
				return;
			}
			const element = document.querySelector(`.${s.content}`);
			closeAnimation(element, resolve);
		})
			.then(() => {
				modalElement.style.display = 'none';
			});
	}
	
	/**
	 * @description 隐藏或移除弹窗
	 * @param {Boolean} noRemoval 是否移除弹窗，noRemoval=true时仅隐藏当前弹窗而不移除当前弹窗Dom
	 * @memberof Modal
	 */
	hide = (noRemoval) => {
		if (noRemoval === true) {
			return this.unvisible();
		}
		return this.remove();
	}
}

export default Modal;