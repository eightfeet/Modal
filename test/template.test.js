import creatTemplate from '~/modules/Modal/template/index.js';

// * @param {Object} elements {head: htmlDom, main: htmlDom, footer: htmlDom}
// * @param {*} config {zIndex, closable, style, animation}

describe('Create a Modal template', () => {
	it('The default value is correct without parameters', () => {
		const template = creatTemplate();
		console.log(template);
		expect((
			template.indexOf('modal_wrap') !== -1 &&
			template.indexOf('modal_overlay') !== -1 &&
			template.indexOf('modal_content_wrap') !== -1 &&
			template.indexOf('modal_content') !== -1 &&
			template.indexOf('modal_modules') !== -1 &&
			template.indexOf('animate_zoom_in') !== -1 &&
			template.indexOf('z-index:100; transition-duration: 0.3s; -webkit-transition-duration: 0.3s;') !== -1
		)).toBe(true);
	});
	it('', () => {

	});
});