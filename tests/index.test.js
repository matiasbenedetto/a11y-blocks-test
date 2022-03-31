import { createNewPost, openPreviewPage } from '@wordpress/e2e-test-utils';
import archives from './archives';
import buttons from './buttons';
import calendar from './calendar';
import image from './image';
import pageList from './page-list';
import paragraph from './paragraph';
import siteLogo from './site-logo';

describe( 'A11y tests for each block', () => {
	beforeAll( async () => {
		await page.setViewport( {
			width: 0,
			height: 0,
		} );
	} );

	beforeEach( async () => {
		await createNewPost();
	} );

	afterEach( async () => {
		const previewPage = await openPreviewPage();
		await previewPage.waitForSelector( '.wp-site-blocks' );
		await expect( previewPage ).toPassAxeTests( {
			include: '.entry-content',
		} );
		await previewPage.close();
	} );

	test( 'Archives block a11y', async () => {
		await archives();
	} );

	test( 'Buttons block a11y', async () => {
		await buttons();
	} );

	test( 'Calendar block a11y', async () => {
		await calendar();
	} );

	test( 'Image block a11y', async () => {
		await image();
	} );

	test( 'Page List block a11y', async () => {
		await pageList();
	} );

	test( 'Paragraph block a11y', async () => {
		await paragraph();
	} );

	test( 'Site Logo block a11y', async () => {
		await siteLogo();
	} );
} );
