const { Given, When } = require('@cucumber/cucumber');
const { Builder } = require('selenium-webdriver');
const Promise = require(`bluebird`);

Given(/^open a new browser window$/, async function () {
    this.driver = new Builder()
        .forBrowser('chrome')
        .build();
    this.driver.manage().window().maximize();
    this.isBrowserOpen = true;
});

When(/^I navigate to the '(.+)' page$/, async function (page) {
    const url = `https://www.hackerrank.com/auth/${page}`;
    await this.driver.get(url);
    await Promise.delay(500);
});
