//<reference types = "cypress"/>
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('Visit the Practics automation test site', function () {
    cy.visit('https://practice.automationtesting.in/my-account/')

})
When('Enter valid username and password', function (dataTable) {
    dataTable.hashes().forEach(function(el){
        cy.get('#username').type(el.username)
        cy.get('#password').type(el.password)
    })
    cy.log('step1')
})

Then('click on login button', function () {

    cy.get('[name="login"]').click()

})
And('You see the dashborad', function () { 
    cy.get('[class="woocommerce-MyAccount-content"]>p>strong').should('have.text','nik22')

})
When("Enter valid {string} and {string}",function(username,password){

    cy.get('#username').type(username)
    cy.get('#password').type(password)
})

And('valid the dashborad with string name',function(){
    // let user = username.split('')
    // cy.log(user)
    cy.get('[class="woocommerce-MyAccount-content"]>p>strong').should('have.text','nik22')

})