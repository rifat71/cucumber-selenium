const { When } = require('@cucumber/cucumber');
const { setTextBox, clickOnElement } = require('../../../utils/elements');

When(/^I login as :$/, async function (table) {
    const values = table.rowsHash();
   
});
