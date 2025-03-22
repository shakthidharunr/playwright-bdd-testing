import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../page_classes/login_page';
import { pageFixture } from '../../hooks/pageFixture';


let loginPage: LoginPage

Then('I should be navigated to the Login page', { timeout: 10000 }, async function () {
    // Wait for the page to be fully loaded
    await pageFixture.page.waitForLoadState('load');

    loginPage = new LoginPage();
    const welcomeText = await loginPage.getWelcomeText();
    expect(welcomeText).toBeVisible();
});

Then('I should see the Email field', async function (){
    const emailField = await loginPage.getEmailAddress();
    expect(emailField).toBeVisible();
});

When('I enter {string} in the Email field', async function (invalid_email_address: string) {
    const emailField = await loginPage.getEmailAddress();
    await emailField.fill(invalid_email_address);
});

When('I click on the Continue button', async function () {
    const continueButton = await loginPage.getContinueButton();
    await continueButton.click();
});

Then('I should see the Email validation message', async function () {
    const emailErrorMessage = await loginPage.getEmailErrorMessage();
    expect(emailErrorMessage).toBeVisible();
});

Then('I should see the Password field', async () => {
    const passwordField = await loginPage.getPassword();
    expect(passwordField).toBeVisible();
});

Then('I should see the Forgot Password link', async () => {
    const forgotPassword = await loginPage.getForgotPasswordLink();
    expect(forgotPassword).toBeVisible();
});
