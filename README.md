# Accessibility Gutenberg blocks test
**A tool to automate the a11y checks for Gutenberg blocks + WordPress themes**

âšī¸ Proof of concept motivated by: https://github.com/WordPress/gutenberg/issues/39266








**â ī¸ Warning**: Don't run this package over a production WordPress instance because it need to write some sample data to the site (example: It will upload a site logo if there if the site has not one defined previously). **Use it only with test WordPress instances**.

## đ FAQs
### Why?
Because we need a fast way to test each Gutenberg block for potential accesibility issues.

### How it works?
For each block this package follow these steps (using [Wordpress E2E test utilities](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-e2e-test-utils/)):
- Creates mock data if it's necesary
- Creates a new post
- Inserts blocks with mock data
- Previews the rendered block
- Tests the final bblock rendered output using [`axe-core`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-jest-puppeteer-axe/)
- Reports the results

## âļī¸ Instructions
- Start your WordPress test site
- Activate the theme you want to use to run the tests
- Clone this repo

- Move to the repo folder:

`cd a11y-blocks-test`

- Install dependecies:

`npm install`

- Run the tests with your WordPress credentials:

`WP_BASE_URL=http://localhost:4759 WP_USERNAME=admin WP_PASSWORD=password npm run test`

## đ§° Requirements
- A working WordPress instance
- Node
- npm

## Demo:
Visual demo about what the tests do:

https://user-images.githubusercontent.com/1310626/161099339-2deb7d38-54a2-48f4-86b5-221831b42799.mp4



## â Blocks currently being tested:
- Archives
- Buttons
- Calendar
- Image
- Page List
- Paragraph
- Site Logo


## TODO:
- Add tests for all blocks
- Improve test architecture



