import s from './index.scss';
import { inlineStyle } from '~/utils/tools';

/**
 *
 *
 * @export
 * @param {Object} elements {head: htmlDom, main: htmlDom, footer: htmlDom}
 * @param {*} config {zIndex, closable, style}
 * @returns
 */
export default function (elements, config) {
	const { style, zIndex, closable, animation } = config || {};
	const { overlay, content, modify, close } = style || {};
	const operateElements = elements || {};
	const operateModify = modify || [];
	let doms= null;

	for (let index = 0; index < operateModify.length; index++) {
		const elementStyle = operateModify[index];
		doms = (doms || '') + `<div class="${s.modify}" style="${inlineStyle(elementStyle)} z-index: ${zIndex + index * 2}">&nbsp;</div>`;
	}

	const { from, duration } = animation || {};
	let timeset = parseFloat(duration);

	if (!isNaN(timeset)) {
		timeset = '0.3s';
	}

	if (timeset <= 0) {
		timeset = '0.01s';
	}


	const transitionDuration = `transition-duration: ${timeset}; -webkit-transition-duration: ${timeset};`;

	let fromStyle = '';

	switch (from) {
		case 'left':
			fromStyle = s.animateleft;
			break;
		case 'right':
			fromStyle = s.animateright;
			break;
		case 'top':
			fromStyle = s.animatetop;
			break;
		case 'bottom':
			fromStyle = s.animatebottom;
			break;
		case 'zoomout':
			fromStyle = s.animatezoom;
			break;
		default:
			fromStyle = s.animatezoom;
			break;
	}

	return (
		`<div class="modal____wrap ${s.modal}">
			<div class="${s.cove} ${fromStyle}" ${overlay && `style="z-index:${zIndex}; ${transitionDuration} ${inlineStyle(overlay)}"`}>
				<div class="${s.wrap}">
					<div class="${s.content}" style="${transitionDuration}">
						${doms || ''}
						<div class="${s.modules}" ${content && `style="z-index:${zIndex}; box-sizing: border-box; ${inlineStyle(content)}"`}>
							${operateElements.header ? `<div class="${s.center}">${operateElements.header}</div>` : ''}
							${operateElements.main ? `<div class="${s.left}">${operateElements.main}</div>` : ''}
							${operateElements.footer ? `<div class="${s.center}">${operateElements.footer}</div>` : ''}
						</div>
						${closable ? (close ? `<div class=${s.close} style="${inlineStyle(close)} z-index: ${zIndex + operateModify.length * 2}"></div>` : '') : ''}
					</div>
				</div>
			</div>
		</div>`
	);
}