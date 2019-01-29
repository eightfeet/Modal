import s from './index.scss';
import { inlineStyle } from '~/utils/tools';

export default function (elements, config) {
	const { style, zIndex, ...other } = config || {};
	console.log('other', other);
	const { overlay, content } = style || {};
	const operateElements = elements || {};
	return (
		`<div class="modal____wrap ${s.modal}" style="z-index:${zIndex}">
			<div class="${s.cove}" ${overlay && `style="${inlineStyle(overlay)}"`}>
					<div class="${s.content}">
						<div class="${s.modules} ${s.level3}" ${content && `style="${inlineStyle(content)}"`}>
							<div>
								${operateElements.header || ''}
							</div>
							<div>
								${operateElements.main || ''}
							</div>
							<div>
								${operateElements.footer || ''}
							</div>
						</div>
						<div class="${s.modify} ${s.level1}" style="background-color:red; position: absolute">
							asd
						</div>
						<div class="${s.modify} ${s.level2}">
						</div>
						<div class="${s.modify} ${s.level4}">
						</div>
						<div class="${s.modify} ${s.level5}">
						</div>
					</div>
				</div>
			</div>
		</div>`
	);
}