# Playwright BDD Project
This project uses Playwright and Cucumber for Behavior-Driven Development (BDD) testing.
GitHub Origin Repo: https://github.com/feeroz123/Playwright_BDD

## Tools Used
- **Playwright**: A framework for Web Testing and Automation.
- **Cucumber**: A tool for running automated tests written in plain language.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.

## Installation
1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Running Tests

To execute the tests, run the following command:
```sh
npx playwright test
```

## Configuration
- **Playwright Configuration**
The Playwright configuration is defined in playwright.config.js. It includes settings for test directory, parallel execution, retries, and more.

- **Cucumber Configuration**
The Cucumber configuration is defined in cucumber.json. It includes settings for timeout, paths, formatters, and more.


## CI/CD
The project uses GitHub Actions for continuous integration. The workflow is defined in .github/workflows/playwright.yml.

## Reports
Test reports are generated in the playwright-report and reports directories. The main report can be found at playwright-report/index.html.

## License
This project is licensed under the MIT License.

Feel free to customize the content as per your project's specific details.

