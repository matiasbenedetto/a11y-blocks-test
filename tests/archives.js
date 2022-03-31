import {
	createNewPost,
	insertBlock,
	publishPost,
} from '@wordpress/e2e-test-utils';

export default async function archives() {
	// Create a placeholder post
	await page.keyboard.type( 'Placeholder post' );
	await publishPost();

	// Insert the Archives block
	await createNewPost();
	await page.keyboard.type( 'Archives' );
	await insertBlock( 'Archives' );
}
