import {
	createNewPost,
	publishPost,
	searchForBlock,
} from '@wordpress/e2e-test-utils';

export default async function pageList() {
	// Create a placeholder page so Page List block has something to render
	await createNewPost( {
		title: 'Placeholder Page1',
		postType: 'page',
	} );
	await publishPost();

	await createNewPost();
	await page.keyboard.type( 'Page List' );
	// Insert the Page List block this way because insertBlock() doesn't work for Page List
	await searchForBlock( 'Page List' );
	await page.keyboard.press( 'Tab' );
	await page.keyboard.press( 'Tab' );
	await page.keyboard.press( 'Enter' );
}
