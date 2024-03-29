import template from './template/index';
import { onceTransitionEnd } from '~/utils/web-animation-club.js';
import s from './template/index.scss';
import { createDom, removeDom } from '~/utils/htmlFactory.js';

const commonErr = 'Modal is not created or Modal is removed!';

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
			animation,
			parentId,
			shouldCloseOnOverlayClick,
			zIndex,
			closable,
			style,
			emBase,
			onCancel
		} = data || {};

		this.state = {
			id: id || `modal${stamp}-${window.Math.floor(window.Math.random()*100)}`, // modalId 不传自动生成 modal + 时间戳 + 100以内的随机数
			animation: animation || {},
			shouldCloseOnOverlayClick: shouldCloseOnOverlayClick === true, // 点击背景层关闭弹窗
			parentId,
			zIndex: zIndex || 100, // 层级
			closable: closable === false ? false : true, // 是否自带关闭按钮
			style: style || null, // 基础样式
			contentDom: null,
			emBase,
			onCancel,
			display: false
		};
	}
	

	/**
	 *
	 * 关闭取消
	 * @param {*} noRemoval
	 * @memberof Modal
	 */
	handleClose = (noRemoval) => {
		const {id, shouldCloseOnOverlayClick, onCancel} = this.state;
		const modalElement = document.getElementById(id);
		const elementClose = modalElement.querySelector(`.${s.close}`);
		const wrapElement = modalElement.querySelector(`.${s.cove}`);
		if (shouldCloseOnOverlayClick === true) {
			// element.onclick = e => e.stopPropagation(); 是否阻止事件冒泡（待定）
			wrapElement.onclick = () => this.hide(noRemoval).then(() => {
				if (onCancel && typeof onCancel === 'function') {
					onCancel();
				}
			});
		}
		if (elementClose) {
			elementClose.onclick = e => {
				e.stopPropagation();
				this.hide(noRemoval).then(() => {
					if (onCancel && typeof onCancel === 'function') {
						onCancel();
					}
				});
			};
		}
	}


	/**
	 * @description 创建弹窗
	 * @param {Object} elements {header: htmlDom, article: htmlDom, footer: htmlDom}
	 * @param {Boolean} noRemoval 是否移除弹窗，noRemoval=true时点击关闭按钮仅隐藏当前弹窗而不移除当前弹窗Dom
	 * @memberof Modal
	 */
	create = (elements, noRemoval) => {
		const {id, parentId, emBase, ...other} = this.state;
		let modalElement = document.getElementById(id);
		if (modalElement) {
			this.show();
			console.warn('已创建modal时 modal.create === modal.show');
			return Promise.resolve();
		}
		return createDom(template(elements, other, id), id, parentId, emBase)
			.then(() => {
				this.state.display = true;
				modalElement = document.getElementById(id);
				const wrapElement = modalElement.querySelector(`.${s.cove}`);
				this.state.contentDom = modalElement.querySelector(`.${s.content}`);
				this.handleClose(noRemoval);
				return new Promise(resolve => {
					window.setTimeout(() => {
						wrapElement.classList.add(s.coveshow);
						resolve(wrapElement);
					}, 100);
				});
			})
			.then(wrapElement => onceTransitionEnd(wrapElement));
	}
	/**
	 *
	 * @description 移除弹窗
	 * @memberof Modal
	 */
	remove = () => new Promise((resolve) => {
		const modalElement = document.getElementById(this.state.id);
		const wrapElement = modalElement.querySelector(`.${s.cove}`);
		wrapElement.classList.remove(s.coveshow);
		resolve(wrapElement);
	})
		.then(wrapElement => onceTransitionEnd(wrapElement))
		.then(() => removeDom(this.state.id));

	/**
	 *
	 * @description 显示弹窗
	 * @memberof Modal
	 */
	show = () => {
		const {id} = this.state;
		const modalElement = document.getElementById(id);
		return new Promise((resolve, reject) => {
			if (!modalElement) {
				reject(commonErr);
				return;
			}
			const wrapElement = modalElement.querySelector(`.${s.cove}`);
			modalElement.style.display = 'block';
			window.setTimeout(() => {
				wrapElement.classList.add(s.coveshow);
				this.state.display = true;
				resolve();
			}, 100);
		})
			.then(() => this.handleClose(true));
	}
	/**
	 *
	 * @description 隐藏弹窗
	 * @memberof Modal
	 */
	unvisible = () => {
		const {id} = this.state;
		const modalElement = document.getElementById(id);
		return new Promise((resolve, reject) => {
			const wrapElement = modalElement.querySelector(`.${s.cove}`);
			if (!modalElement) {
				reject(commonErr);
				return;
			}
			wrapElement.classList.remove(s.coveshow);
			resolve(wrapElement);
		})
			.then(wrapElement => onceTransitionEnd(wrapElement))
			.then(() => modalElement.style.display = 'none');
	}
	
	/**
	 * @description 隐藏或移除弹窗
	 * @param {Boolean} noRemoval 是否移除弹窗，noRemoval=true时仅隐藏当前弹窗而不移除当前弹窗Dom
	 * @memberof Modal
	 */
	hide = (noRemoval) => {
		if (this.state.display === false) {
			return Promise.reject('The Modal was not opened.');
		}
		this.state.display = false;
		if (noRemoval === true) {
			return this.unvisible();
		}
		return this.remove();
	}
}

export default Modal;