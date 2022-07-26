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

    it.only("does NOT allow users to subscribe if already subscribed", () => {
        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist").contains("john@example.com")
        cy.getByData("server-error-message").contains("Error: john@example.com already exists. Please use a different email address.")
    })
})