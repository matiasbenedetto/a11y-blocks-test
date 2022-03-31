import { insertBlock } from '@wordpress/e2e-test-utils';

export default async function buttons() {
	await page.keyboard.type( 'Buttons' );
	await insertBlock( 'Buttons' );
	await page.keyboard.type( 'Content' );
}
