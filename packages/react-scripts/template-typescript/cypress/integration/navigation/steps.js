import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const url = 'http://localhost:8080';

Given('I open Landing page', () => {
  cy.visit(url);
});

Then('I see {string} in user navigation', username => {
  cy.contains(username).click();
});

Then('I click {string}', label => {
  cy.contains(label).click();
});
