import { insertBlock, publishPost } from '@wordpress/e2e-test-utils';

export default async function siteLogo() {
	await page.keyboard.type( 'Site Logo' );
	await insertBlock( 'Site Logo' );
	const inputElement = await page.$( "input[type='file']" );
	if ( inputElement ) {
		await inputElement.uploadFile( './assets/logo.png' );
		await page.waitForTimeout( 2000 );
		await publishPost();
		await page.waitForTimeout( 2000 );
		await page.click( '.editor-post-publish-panel__header > button' );
	}
}
