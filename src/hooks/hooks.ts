import { Before, After } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright/test";
import { pageFixture } from "./pageFixture";

let page: Page;
let browser: Browser;

Before(async function () {
    browser = await chromium.launch({ headless: false, channel: 'chrome' });
    page = await browser.newPage();
    pageFixture.page = page;
});

After(async function () {
    try {
        if (pageFixture.page) {
            await pageFixture.page.close();
        }
    } catch (error) {
        console.error('Error closing the page:', error);
    }

    try {
        if (browser) {
            await browser.close();
        }
    } catch (error) {
        console.error('Error closing the browser:', error);
    }
});
