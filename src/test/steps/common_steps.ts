import { After, Before, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chromium, Page, Browser } from 'playwright';
import { pageFixture } from '../../hooks/pageFixture';


Then('I should see the page title as {string}', async (title: string) => {
    expect(await pageFixture.page.title()).toBe(title);
});
