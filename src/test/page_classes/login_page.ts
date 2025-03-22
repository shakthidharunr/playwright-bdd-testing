import { pageFixture } from "../../hooks/pageFixture";

export class LoginPage {

    private readonly welcomeTextSelector: string = 'h1';
    private readonly emailAddressSelector: string = '#userIdentifier';
    private readonly emailErrorMessageSelector: string = '#error-userIdentifier';
    private readonly continueButtonSelector: string = 'Continue';
    private readonly passwordErrorMessageSelector: string = '#error-password';
    private readonly forgotPasswordLinkSelector: string = 'Forgot password?';
    private readonly passwordSelector: string = '#password';

    async getWelcomeText() {
        const welcomeTextField = pageFixture.page.locator(this.welcomeTextSelector);
        await welcomeTextField.waitFor({ state: 'visible' });
        return welcomeTextField;
    }

    async getEmailAddress() {
        const emailField = pageFixture.page.locator(this.emailAddressSelector);
        await emailField.waitFor({ state: 'visible' });
        return emailField;
    }

    async getEmailErrorMessage() {
        return pageFixture.page.locator(this.emailErrorMessageSelector);
    }

    async getContinueButton() {
        return pageFixture.page.getByRole('button', { name: this.continueButtonSelector });
    }

    async getPasswordErrorMessage() {
        return pageFixture.page.getByRole('button', { name: this.passwordErrorMessageSelector });
    }

    async getForgotPasswordLink() {
        return pageFixture.page.getByRole('button', { name: this.forgotPasswordLinkSelector });
    }

    async getPassword() {
        return pageFixture.page.locator(this.passwordSelector);
    }

}