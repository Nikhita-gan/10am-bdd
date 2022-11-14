import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("Visit the Google site", function () {

    cy.visit("https://www.google.com")
})

Then(`You see the {string} title on page`, function (title) {
    cy.title().should('include',title)

})
Given("visit the facebook page", function () {

    cy.visit("https://www.facebook.com")
})