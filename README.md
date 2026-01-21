# YouVerifyTask
This automated QA Task is written with Cypress
 
 Steps to run the code
- Clone the repo
- npm install
- npx cypress open                                                            
- Run the specs after opening cypress
- You can run the spec scripts after opening the cypress GUI.
- You can as well run the E2E test with the followng
    - npx cypress run --spec "cypress/e2e/login.cy.js"
    - npx cypress run --spec "cypress/e2e/search_checkout.cy.js"
- If you ran into error running above E2E test. Run below Script
    - rm -rf cypress/reports && npx cypress run
    - npm install
    - npx cypress run

## Test Report

The HTML report is generated after test execution.

![Test Report](screenshots/report.png)
![Product Search](screenshots/product-search.png)

- Report will be saved in /cypress/reports/html/
- You can open the index.html file in that directory to also see the report.

## CI/CD Pipeline

Once any update is pushed, the CI/CD pipeline runs automatically.

![CI/CD Step 1](screenshots/1.png)
![CI/CD Step 2](screenshots/2.png)
![CI/CD Step 3](screenshots/3.png)

- Github CI/CD workflow is in .github/workflows/cypress.yml

- Tests pass 100% locally. CI/CD failures are due to environment timeouts on GitHub runners.


