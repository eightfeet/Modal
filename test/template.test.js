import creatTemplate from '~/modules/Modal/template/index.js';

// * @param {Object} elements {head: htmlDom, main: htmlDom, footer: htmlDom}
// * @param {*} config {zIndex, closable, style, animation}

describe('creat Modal Template string', () => {
	it('Missing required parameter "config"', () => {
		const template = creatTemplate();
		expect(template).toBe('Missing required parameter "config"');
	});

	it('has overlay Class', () => {
		const template = creatTemplate();
		expect(template).toBe();
	});
    
	it('has content wrap Class', () => {
		const template = creatTemplate();
		expect(template).toBe();
	});
});