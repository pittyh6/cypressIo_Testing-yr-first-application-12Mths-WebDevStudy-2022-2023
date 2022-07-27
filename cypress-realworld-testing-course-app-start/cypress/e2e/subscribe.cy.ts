// -----------------------------------------------------------------------------

import { eq } from "cypress/types/lodash"

//vvvv my way vvvv
describe("Subscribe to newsletter form", () => {
    // input field for newsletter
    const inputEmailNewsletter = () => cy.getByType('email')
    //button subscribe to newsletter
    const subscribeBtn = () => cy.getByType('submit')
    // msg sucess to subscribe to newsletter
    const msgEmailSuccess = () => cy.getByData("success-message")
    const msgEmailError = () => cy.getByData("error-message") 

    // email valid
    const validEmail = 'test@uol.com'
    const invalidEmail = 'testuol.com'
    const subscribedEmail = 'john@example.com'
    const emptyEmail = ' '

    beforeEach(() =>{
        cy.visit('http://localhost:3000')
    })

    it('subscribe valid email', () => {
        for(let i =0; i< 2; i++){
            if(i==0){
                inputEmailNewsletter().eq(i).type(validEmail)
                subscribeBtn().eq(i).click()
                msgEmailSuccess().contains('Success: '+ validEmail + ' has been successfully subscribed')
            }else if(i==1){
                inputEmailNewsletter().eq(i).type(validEmail)
                subscribeBtn().eq(i).click()
                cy.location("href").should("include","/?email-address=test%40uol.com")
            }else{
                console.log("ERROR - could not find the subscribe input and/or buttom")
            }
        }      
    })
    it('subscribe invalid email', () => {
        for(let i =0; i< 2; i++){
            if(i==0){
                inputEmailNewsletter().eq(i).type(invalidEmail)
                subscribeBtn().eq(i).click()
                msgEmailError().should('not.exist')
                msgEmailSuccess().should('not.exist')
                // cy.on('window:alert', (txtAlert) => {
                //     console.log("entrouuuuu")
                //     expect(txtAlert).to.contains('Please include a @ ')
                // })
            }else if(i==1){
                inputEmailNewsletter().eq(i).type(invalidEmail)
                subscribeBtn().eq(i).click()
                msgEmailError().should('not.exist')
                msgEmailSuccess().should('not.exist')
                // cy.on('window:alert', (txtAlert) => {
                //     console.log("entrouuuuu")
                //     expect(txtAlert).to.contains('Please include a @ ')
                // })
            }else{
                console.log("ERROR - could not find the subscribe input and/or buttom")
            }
        }      
    })
    it.only('subscribe empty email', () => {
        for(let i =0; i< 2; i++){
            if(i==0){
                inputEmailNewsletter().eq(i).type(emptyEmail)
                subscribeBtn().eq(i).click()
                msgEmailError().contains('Email is required')
            }else if(i==1){
                inputEmailNewsletter().eq(i).type(emptyEmail)
                subscribeBtn().eq(i).click()
                msgEmailError().contains('Email is required')
            }else{
                console.log("ERROR - could not find the subscribe input and/or buttom")
            }
        }      
    })
})






// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
//vvvv Course explanation vvvv
describe("Newsletter Subscribe Form",()=>{
    
    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })
    it("allows users to subscribe to the email list", () => {
        cy.getByData("email-input").type("test@uol.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains("test@uol.com")
        cy.getByData("success-message").contains("Success: test@uol.com has been successfully subscribed")
    })
    it("does NOT allow a invalid email address", () => {
        cy.getByData("email-input").type("testuol.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })
    it("does NOT allow users to subscribe if already subscribed", () => {
        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist").contains("john@example.com")
        cy.getByData("server-error-message").contains("Error: john@example.com already exists. Please use a different email address.")
    })
})
// -----------------------------------------------------------------------------