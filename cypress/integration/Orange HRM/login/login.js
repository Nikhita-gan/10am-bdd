///<reference types = "cypress"/>
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('Visit the Orange HRM site', function () {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})
When('Enter valid username', function () {

    cy.get('input[name="username"]').type('Admin')
})
And('Enter valid password', function () {

    cy.get('input[name="password"]').type('admin123')
})
Then('click on login button', function () {

    cy.get('button[type="submit"]').click()

})
And('You see the dashborad', function () { 
    cy.contains('PIM').should('be.visible')
    cy.contains('Dashboard').click()
    cy.contains('Launching Soon').should('be.visible')

})

//for in valid creadtial
When('Enter Invalid username', function () {

    cy.get('input[name="username"]').type('Admin')
})
And('Enter Invalid password', function () {

    cy.get('input[name="password"]').type('admin')
})
And('You see error message', function () { 
   
    cy.contains('Invalid credentials').should('be.visible')

})