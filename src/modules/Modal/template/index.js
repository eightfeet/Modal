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
	const { overlay, content, modify, close, header, main, footer } = style || {};
	const operateElements = elements || {};
	const operateModify = modify || [];
	let doms= null;

	for (let index = 0; index < operateModify.length; index++) {
		const elementStyle = operateModify[index];
		doms = (doms || '') + `<div class="${s.modify}" style="${inlineStyle(elementStyle)} z-index: ${zIndex + index * 2}">&nbsp;</div>`;
	}

	const { form, duration } = animation || {};

	const time = parseFloat(duration);
	let timeset = null;
	// 处理非数值
	if (!isNaN(time)) {
		timeset = `${time}s`;
	} else if (time <= 0) {
		timeset = '0.01s';
	} else {
		timeset = '0.3s';
	}


	const transitionDuration = `transition-duration: ${timeset}; -webkit-transition-duration: ${timeset};`;

	let formStyle = '';

	switch (form) {
		case 'fadeInLeft':
			formStyle = s.animate_in_left;
			break;
		case 'fadeInRight':
			formStyle = s.animate_in_right;
			break;
		case 'fadeInDown':
			formStyle = s.animate_in_down;
			break;
		case 'fadeInUp':
			formStyle = s.animate_in_up;
			break;
		case 'zoomInLeft':
			formStyle = s.animate_zoom_in_left;
			break;
		case 'zoomInRight':
			formStyle = s.animate_zoom_in_right;
			break;
		case 'zoomInDown':
			formStyle = s.animate_zoom_in_down;
			break;
		case 'zoomInUp':
			formStyle = s.animate_zoom_in_up;
			break;
		case 'zoomIn':
			formStyle = s.animate_zoom_in;
			break;
		default:
			formStyle = s.animate_zoom_in;
			break;
	}

	const overlayStyle = inlineStyle(overlay);
	const contentStyle = inlineStyle(content);
	const closeStyle = inlineStyle(close);
	const headerStyle = inlineStyle(header);
	const mainStyle = inlineStyle(main);
	const footerStyle = inlineStyle(footer);
	
	return (
		`<div class="modal____wrap ${s.modal}">
			<div class="${s.cove} ${formStyle}" ${overlay && `style="z-index:${zIndex}; ${transitionDuration} ${overlayStyle || ''}"`}>
				<div class="${s.wrap}">
					<div class="${s.content}" style="${transitionDuration}">
						${doms || ''}
						<div class="${s.modules}" ${content && `style="z-index:${zIndex}; box-sizing: border-box; ${contentStyle || ''}"`}>
							${operateElements.header ? `<div class="${s.center}" ${headerStyle ? `style="${headerStyle}"` : ''}>${operateElements.header}</div>` : ''}
							${operateElements.main ? `<div class="${s.left}" ${mainStyle ? `style="${mainStyle}"` : ''}>${operateElements.main}</div>` : ''}
							${operateElements.footer ? `<div class="${s.center}" ${footerStyle ? `style="${footerStyle}"` : ''}>${operateElements.footer}</div>` : ''}
						</div>
						${closable ? (close ? `<div class=${s.close} style="${closeStyle || ''} z-index: ${zIndex + operateModify.length * 2}"></div>` : '') : ''}
					</div>
				</div>
			</div>
		</div>`
	);
}