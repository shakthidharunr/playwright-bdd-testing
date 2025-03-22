import { pageFixture } from '../../hooks/pageFixture';

export class HomePage {
    private readonly logoSelector: string = '.nav-logo-link';
    private readonly userButtonSelector: string = '.esr-user-dropdown-menu';
    private readonly cartButtonSelector: string = '#esr-cart-header-dropdown';
    private readonly signInSelector: string = 'Sign In';
    private readonly startHereSelector: string = '#esr-user-dropdown-menu p span';

    async getLogo() {
        return pageFixture.page.locator(this.logoSelector);
    }

    async getUserButton() {
        return pageFixture.page.locator(this.userButtonSelector);
    }

    async getCartButton() {
        return pageFixture.page.locator(this.cartButtonSelector);
    }

    async getSignIn() {
        return pageFixture.page.getByRole('button', {name: this.signInSelector});
    }

    async getStartHere() {
        return pageFixture.page.locator(this.startHereSelector);
    }
}