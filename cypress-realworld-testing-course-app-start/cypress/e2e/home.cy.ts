describe('home page', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:3000')
  })

  context("hero section", () =>{
    it('the h1 contains the correct text', () => {
      cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
    })
  
    it("the feature on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })
  
  context.only("Courses section",() => {
    it("Course: testing Your First Next.js Application",() => {
      cy.getByData("course-0").find("a").eq(3).contains("Get started")
      cy.getByData("course-0").find("a").last().click()
      cy.location("pathname").should("eq","/testing-your-first-application")
    })
    it("Course: Testing Foundations", () => {
      cy.getByData("course-1").find("a").last().click()
      cy.location("pathname").should("eq", "/testing-foundations")
    })

    it("Course: Cypress Fundamentals", () => {
      cy.getByData("course-2").find("a").last().click()
      cy.location("pathname").should("eq", "/cypress-fundamentals")
    })
  })
})