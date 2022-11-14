//<reference types = "cypress"/>

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('Visit the GreenKart site to purches vegetable', function () {

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

})
When('Enter the first letter ca in search vegetable tab', function () {
   cy.get('[class="search-keyword"]').type('ca')
   cy.get('[type="submit"]').click()
})

And('select the carrot and place the order', function () {

    cy.get('h4[class="product-name"]').each(function(el){
      //cy.log(el.text())
      if(el.text() == 'Carrot - 1 Kg'){
        cy.get('[class="product-action"]').eq(1).click()
      }

    })
    cy.get('[alt="Cart"]').click()
    cy.get('[class="action-block"]').first().click()

})
Then('select the country and check the checkbox and we see the thank you message', function () { 
    
  
  cy.contains('Place Order').click()
    cy.get('select').select('India')
    cy.get('[class="chkAgree"]').check()
    cy.contains('Proceed').click()

})
And('You see the thank you message',function(){

  cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')
})

//For dynamic value
When('Enter the first letter {string} in search vegetable tab',function(el){

  cy.get('[class="search-keyword"]').type(el)
   cy.get('[type="submit"]').click()

})
And('select the {string} and place the order',function(veggies){


  cy.get('h4[class="product-name"]').each(function(el,index){

      let veg = el.text().replace('- 1 Kg',' ').trim()
    if(veggies === veg)
    
    {
      cy.get('[class="product-action"]').eq(index).click()
    }

  })
  cy.get('[alt="Cart"]').click()
  cy.get('[class="action-block"]').first().click()
  
})