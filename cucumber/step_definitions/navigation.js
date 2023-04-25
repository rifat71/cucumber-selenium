const { Given, When } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');

Given(/^open a new browser window$/, async function () {
    this.driver = new Builder()
        .forBrowser('chrome')
        .build();
    this.driver.manage().window().maximize();
    this.isBrowserOpen = true;
});

When(/^I navigate to the '(.+)' page$/, async function (page) {
    const url = page === "login" ? `https://www.saucedemo.com` : `https://www.saucedemo.com/${page}`;

    await this.driver.get(url);
});
