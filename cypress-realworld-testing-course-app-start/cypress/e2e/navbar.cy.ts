// Mobile tests
describe("Mobile testing Nav Bar", () => {
    // *** VARIABLES *** 
    //mobile toggle open/close menu
    const navOpenMenu = () => cy.get('[id^=headlessui-popover-button-]').eq(2)
    const navCloseMenu = () => cy.getByTabIndex(0)
    // courses title and lessons (Mobile and descktop)
    const courseTitle0 = () => cy.getByData("course-0").find('a').eq(0)
    const courseTitle1 = () => cy.getByData("course-1").find('a').eq(0)
    const courseTitle2 = () => cy.getByData("course-2").find('a').eq(0)
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

    it("Selecting courses from navbar (home page) and verify route", () => {
        // course Testing Your First Next.js Application
        navOpenMenu().click()
        courseTitle0().click()
        cy.location("pathname").should("eq", "/testing-your-first-application")
        

        // course Testing Foundations
        navOpenMenu().click()
        courseTitle1().click()
        cy.location("pathname").should("eq", "/testing-foundations")
        navCloseMenu().click()

        // course Cypress Fundamentals
        navOpenMenu().click()
        courseTitle2().click()
        cy.location("pathname").should("eq", "/cypress-fundamentals")
        navCloseMenu().click()
    })  
    
})



// Desktop Testing nav Bar
