import { insertBlock, publishPost } from '@wordpress/e2e-test-utils';

export default async function image() {
	await page.keyboard.type( 'Image' );
	await insertBlock( 'Image' );
	const inputElement = await page.$( "input[type='file']" );
	if ( inputElement ) {
		await inputElement.uploadFile( './assets/logo.png' );
		await page.waitForTimeout( 1000 );
	}
}
