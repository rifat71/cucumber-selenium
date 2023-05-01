const { After, Before, Status } = require('@cucumber/cucumber');

Before(async function (scenario) {
    console.log("Start running scenario: " + scenario);
});

After(async function (scenario) {
    console.log("Scenario Closed");
    if (this.isBrowserOpen) {
        await this.driver.quit();
    }
});
