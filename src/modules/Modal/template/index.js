import s from './index.scss';
import { inlineStyle } from '~/utils/tools';

export default function (elements, config) {
	const { style, zIndex, ...other } = config || {};
	console.log('other', other);
	const { overlay, content, modify } = style || {};
	const operateElements = elements || {};
	const operateModify = modify || [];
	let doms= null;

	for (let index = 0; index < operateModify.length; index++) {
		const elementStyle = operateModify[index];
		doms = (doms || '') + `<div class="${s.modify}" style="${inlineStyle(elementStyle)} z-index: ${zIndex + index * 2}">&nbsp;</div>`;
	}

	console.log('doms', doms);

	return (
		`<div class="modal____wrap ${s.modal}" style="z-index:${zIndex}">
			<div class="${s.cove}" ${overlay && `style="${inlineStyle(overlay)}"`}>
					<div class="${s.content}">
						${doms || ''}
						<div class="${s.modules}" ${content && `style="z-index:${zIndex}; ${inlineStyle(content)}"`}>
							${operateElements.header ? `<div class="${s.center}">${operateElements.header}</div>` : ''}
							${operateElements.main ? `<div class="${s.left}">${operateElements.main}</div>` : ''}
							${operateElements.footer ? `<div class="${s.center}">${operateElements.footer}</div>` : ''}
						</div>
					</div>
				</div>
			</div>
		</div>`
	);
}