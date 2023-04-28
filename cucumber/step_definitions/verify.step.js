const { Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');

Then(/^'(.+)' text displays$/, async function (text) {
    await this.driver.wait(until.elementLocated(By.xpath(`//span[text()="${text}"]`)),10000);
    await this.driver.quit();
});
