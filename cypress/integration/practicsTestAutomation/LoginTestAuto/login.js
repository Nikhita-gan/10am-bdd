///<reference types = "Cypress"/>

import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";

Given('Visit the PracticsTestAutomation site',function(){

    cy.visit('https://practicetestautomation.com/practice-test-login/')

})
When('Enter valid username',function(){

    cy.get('#username').type('student')
    
})
And('Enter valid password',function(){

    cy.get('#password').type('Password123')
})
Then('click on submit button',function(){

    cy.get('#submit').click()
})
And('You see the Logged In Successfully',function(){

    cy.get('.post-title').should('have.text','Logged In Successfully')
    cy.contains('Log out').click()
    cy.url().should('eq','https://practicetestautomation.com/practice-test-login/')
})

//Invalid creadantial

When('Enter Invalid username',function(){

    cy.get('#username').type('student')
    
})
And('Enter Invalid password',function(){

    cy.get('#password').type('Password')
})
And('You see error message',function(){

    cy.get('#error').should('have.text','Your password is invalid!')
})