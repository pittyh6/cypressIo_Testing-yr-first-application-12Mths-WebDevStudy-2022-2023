// Mobile tests
describe("Mobile testing Nav Bar", () => {
    // *** VARIABLES *** 
    //mobile toggle open menu
    const navOpenMenu = () => cy.get("#headlessui-popover-button-5")
    // courses title and lessons (Mobile and descktop)
    const courseTitle0 = () => cy.getByData("course-0").find('a').eq(0)
    const courseTitle1 = () => cy.getByData("course-1").find('a').eq(1)
    const courseTitle2 = () => cy.getByData("course-2").find('a').eq(2)
    const courseLesson0 = () => cy.getByData("lesson-0")
    const courseLesson1 = () => cy.getByData("lesson-1")
    const courseLesson2 = () => cy.getByData("lesson-2")
    
    
    beforeEach(() => {
        cy.visit("http://localhost:3000")
        cy.viewport(360,760)
        
    })

    it("verify if is in mobile version", () => {        
        navOpenMenu().should("exist")
    })

    it.only("Selecting courses from navbar and verify route", () => {
        navOpenMenu().click()
        courseTitle0().click()
        cy.location("pathname").should("eq", "/testing-your-first-application")

    })
})