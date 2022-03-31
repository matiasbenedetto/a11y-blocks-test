import { insertBlock } from '@wordpress/e2e-test-utils';

export default async function paragraph() {
	await page.keyboard.type( 'Paragraph' );
	await insertBlock( 'Paragraph' );
	await page.keyboard.type( 'Content' );
}
