import puppeteer from 'puppeteer';
import modal from './virtualModal';
import '@babel/runtime/regenerator';

describe('Modal', () => {
	it('new Modal() should to be an object', () => {
		expect(Object.prototype.toString.apply(modal)).toBe('[object Object]');
	});

	it('Modal.state.id = modalId', () => {
		expect(modal.state.id).toBe('modalId');
	});

	// e2e测试
	it('Modal is working！', async () => {
		const browser = await puppeteer.launch({
			headless: true
		});
		const page = await browser.newPage();
		await page.goto('http://localhost:9000/');
		await page.click('div#example1');

		const finalText = await page.$eval('#close', el => el.textContent);
		expect(finalText).toBe('Click on me to close.');

		const finalHtml = await page.$eval('#close', el => el.outerHTML);
		expect((finalHtml.indexOf('id="close"') !== -1)).toBe(true);

	}, 10000);

	it('next', () => {
		expect((e => e)('1')).toBe('1');
	});
});

