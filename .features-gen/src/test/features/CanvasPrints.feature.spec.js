// Generated from: src\test\features\CanvasPrints.feature
import { test } from "playwright-bdd";

test.describe('ECP Canvas Prints Regression', () => {

  test('Canvas Prints category regression', { tag: ['@regression'] }, async ({ Given, page, And }) => { 
    await Given('the user launches live \'ECP\'', null, { page }); 
    await And('the user hovers over the Canvas category in the top navigation', null, { page }); 
    await And('the user clicks on the Canvas Prints sub-category under the Canvas Prints category', null, { page }); 
    await And('the user selects \'Size 8x8\' from the pricing grid', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('src\\test\\features\\CanvasPrints.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@regression"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given the user launches live 'ECP'","stepMatchArguments":[{"group":{"start":23,"value":"'ECP'","children":[{"children":[{"children":[]}]},{"start":24,"value":"ECP","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And the user hovers over the Canvas category in the top navigation","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And the user clicks on the Canvas Prints sub-category under the Canvas Prints category","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"And the user selects 'Size 8x8' from the pricing grid","stepMatchArguments":[{"group":{"start":17,"value":"'Size 8x8'","children":[{"children":[{"children":[]}]},{"start":18,"value":"Size 8x8","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end