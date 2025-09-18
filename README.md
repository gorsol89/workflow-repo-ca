# Workflow repo for the CA

## How to run
```bash
npm install
npm run preview


Scripts

npm run preview – start local server

npm run test – unit tests (Vitest)

npm run test:unit – unit tests once

npm run test:e2e – E2E tests (Playwright)

npm run test:e2e:ui – E2E tests with UI

npm run test:all – unit then E2E

npm run format / npm run lint – formatting & linting

Environment variables

Create a local .env (not committed) with:

E2E_EMAIL

E2E_PASSWORD

.env.example is included in the repo with the names only.
.env is listed in .gitignore.


What the tests check (CA)

Login

Valid creds from env → leaves /login/ and shows main heading

Invalid creds → visible error message

Navigation

Home (/) → click first venue → details page has a heading containing “Venue details”

Pull Request

Open a PR from workflow → main and do not merge (submit the PR link).

Other stuff

Screenshots of the teminal tests the day of delivery:


<img width="877" height="423" alt="Skjermbilde 2025-09-18 131202" src="https://github.com/user-attachments/assets/94d9c630-f51e-4425-9654-d625a7f249ef" />

<img width="840" height="350" alt="Skjermbilde 2025-09-18 131238" src="https://github.com/user-attachments/assets/af2b0d5a-8bec-42dd-8076-85534d5cb2f0" />



Acknowledgement

Chat GTP has in this assignment been my coworker and coach. He has helped me review my code, explain concepts in a way I understand better, and check for errors,  
but all implementation decisions, testing, and final code were done by me.



Also thanks to my teacher Connor Obrien for answering all my stupid questions during my work with the CA.
<img width="1024" height="1536" alt="ChatGPT Image Sep 18, 2025, 01_22_33 PM" src="https://github.com/user-attachments/assets/c128352a-70f1-425d-ba9a-b71913cb87af" />


