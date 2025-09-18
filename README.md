# Workflow repo for Gøril Solheim 🐱

This is my Workflow CA repo.

## Tech Stack & Tools

- **Tailwind CSS**
- **ESLint**
- **Prettier**
- **Husky**
- **Vitest**
- **Playwright**
## Usage & Commands

### Tailwind CSS
- Configured in `tailwind.config.js`.
- Start Tailwind with:
  ```bash
  npm run dev

This runs in watch mode and updates your CSS automatically.
Don’t forget to include the built CSS in your HTML.

### ESLint
- Check your code with:
	```
	npx eslint .
	```
- ESLint will scan your JS files and point out issues (and suggest fixes).

### Prettier
- Format your code with:
	```
	npx prettier --write .
	```
- This makes sure everything is styled consistently.

### Husky
Git hooks live in the .husky folder.

Husky runs checks (like linting/formatting) before you can commit.


### Vitest
- To run tests, use:
	```
	npm test
	```
Test files follow the *.test.js


### Playwright
- Run 2e2 tests with:
- To run Playwright tests, use:
	```
	npx playwright test
	```
- To open the Playwright test runner UI:
	```
	npx playwright test --ui
	```
- To run tests and show the actual browser windows (headed mode):
	```
	npx playwright test --headed
	```
- To run tests step by step for debugging:
	```
	npx playwright test --debug
	```
- Test files are in the /test/2e2

- **Environment variables for Playwright tests:**
	Add a `.env` file in your project root with:
	```
	TEST_USER_EMAIL=email
	TEST_USER_PASSWORD=password


## Proof of Testing

Here’s proof that my tests ran (screenshot or it didn’t happen):

<img width="877" height="423" alt="Skjermbilde 2025-09-18 131202" src="https://github.com/user-attachments/assets/95214a05-364f-45f0-a1b1-507089266a21" />

<img width="840" height="350" alt="Skjermbilde 2025-09-18 131238" src="https://github.com/user-attachments/assets/596f0ca8-433d-4a13-be7d-2801ba01ab4b" />


## Acknowledgements

ChatGPT – my coding buddy/coach/therapist. Explained stuff, reviewed my code, and hold my hand when I was unsure and afraid. But: all final decisions, errors, and chaos are mine.

Connor O’Brien 🐱🤠✌️– my teacher, who answered all my dumb questions.

<img width="1024" height="1536" alt="ChatGPT Image Sep 18, 2025, 01_22_33 PM" src="https://github.com/user-attachments/assets/c128352a-70f1-425d-ba9a-b71913cb87af" />


