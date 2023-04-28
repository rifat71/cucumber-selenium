const { By, Key } = require('selenium-webdriver');
const { When } = require('@cucumber/cucumber');
const Promise = require(`bluebird`);

When(/^I login with credentials :$/, async function (table) {
   const values = table.rowsHash();
   if (values.userId) {
      const userIdElement = await this.driver.findElement(By.id('input-1'))
      await userIdElement.clear();
      await userIdElement.sendKeys(values.userId, Key.ENTER);
      await Promise.delay(500);
   }
   if (values.password) {
      const userIdElement = await this.driver.findElement(By.id('input-2'))
      await userIdElement.clear();
      await userIdElement.sendKeys(values.userId, Key.ENTER);
      await Promise.delay(500);
   }
    await this.driver.findElement(By.xpath('//button/*/span[text()="Log In"]')).click();
});
// https://practicetestautomation.com/practice-test-login/
// https://www.linkedin.com/login
// https://www.linkedin.com/checkpoint/lg/login-submit
