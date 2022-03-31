# Accessibility Gutenberg blocks test
**A tool to automate the a11y checks of each Gutenberg block rendering the block as the final user will receive it (theme particularities included).**

**⚠️ Warning**: Don't run this package over a production WordPress instance because it need to write some sample data to the site (example: It will upload a site logo if there if the site has not one defined previously). **Use it only with test WordPress instances**.

## 🙋 FAQs
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

## ▶️ Instructions
Clone this repo


Move to the repo folder:

`cd a11y-blocks-test`


Install dependecies:

`npm install`


Run the tests with your WordPress credentials:

`WP_BASE_URL=http://localhost:4759 WP_USERNAME=admin WP_PASSWORD=password npm run test`

## 🧰 Requirements
- A working WordPress instance
- Node
- npm

## Demo:


## ✅ Blocks currently being tested:
- Archives
- Buttons
- Calendar
- Image
- Page List
- Paragraph
- Site Logo



