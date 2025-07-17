// Generated from: src\test\features\homePage.feature
import { test } from "playwright-bdd";

test.describe('Verify Home Page features', () => {

  test('Verify web application loading', async ({ Given, page }) => { 
    await Given('I launch the application', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\test\\features\\homePage.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I launch the application","stepMatchArguments":[]}]},
]; // bdd-data-end