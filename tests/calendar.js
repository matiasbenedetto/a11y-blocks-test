import { insertBlock } from '@wordpress/e2e-test-utils';

export default async function calendar() {
	await page.keyboard.type( 'Calendar' );
	await insertBlock( 'Calendar' );
}
