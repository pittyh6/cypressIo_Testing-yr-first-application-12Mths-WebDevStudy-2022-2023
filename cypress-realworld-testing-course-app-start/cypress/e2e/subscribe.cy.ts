// -----------------------------------------------------------------------------

import { eq } from "cypress/types/lodash"

//vvvv my way vvvv
describe.only("Subscribe to newsletter form", () => {
    // input field for newsletter
    const inputEmailNewsletter = () => cy.getByType('email')
    //button subscribe to newsletter
    const subscribeBtn = () => cy.getByType('submit')
    // msg sucess to subscribe to newsletter
    const msgSuccess = () => cy.getByData("success-message")

    // email valid
    const validEmail = 'test@uol.com'
    const invalidEmail = 'testuol.com'
    const subscribedEmail = 'john@example.com'
    const emptyEmail = ''

    beforeEach(() =>{
        cy.visit('http://localhost:3000')
    })

    it('subscribe valid email', () => {
        for(let i =0; i< 2; i++){
            if(i==0){
                inputEmailNewsletter().eq(i).type(validEmail)
                subscribeBtn().eq(i).click()
                msgSuccess().contains('Success: '+ validEmail + ' has been successfully subscribed')
            }else if(i==1){
                inputEmailNewsletter().eq(i).type(validEmail)
                subscribeBtn().eq(i).click()
                cy.location("href").should("include","/?email-address=test%40uol.com")
            }else{

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