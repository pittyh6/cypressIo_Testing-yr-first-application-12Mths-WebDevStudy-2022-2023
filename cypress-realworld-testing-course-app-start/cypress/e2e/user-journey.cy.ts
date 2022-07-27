describe("User Journey", () => {
        
    it("a user can find a course on the home page and complete the courses lessons", () =>{
        cy.visit("http://localhost:3000")
        cy.getByData("course-0").find("a").eq(3).click()
        cy.location("pathname").should("eq", "/testing-your-first-application")
        cy.getByData("next-lesson-button").click()
        cy.location("pathname").should("eq", "/testing-your-first-application/app-install-and-overview")
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").should("exist").click()
        cy.location("pathname").should("eq","/testing-your-first-application/installing-cypress-and-writing-our-first-test")
        cy.get("h1").contains("Installing Cypress and writing our first test")

        //Second page of first course
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").click()
        cy.location("pathname").should("eq", "/testing-your-first-application/setting-up-data-before-each-test")

        //Third page of first course
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").contains("Complete Course").click()
        cy.location("pathname").should("eq", "/")

    })
    it('verify homepage complete courses lessons is in bluebg',() => {
        cy.getByData("lesson-complete-0").should('have.class', 'bg-blue-600')
    })
    it('verify homepage NOT complete courses lessons is in whitebg',() => {
        cy.getByData("lesson-upcoming-0").should('have.class', 'bg-white')
    })
})