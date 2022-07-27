import { invoke } from "cypress/types/lodash"

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
describe.only("Desktop testing Nav Bar", () => {
    //Courses btn navbar
    const navCoursesMenu = () => cy.get('[id^=headlessui-popover-button-]').eq(1)
    //options courses
    const navCoursesItems = () => cy.getByData("courses-dropdown-menu").find('a')
    //click courses menu button dropdowm
    const clickCoursesMenuBtn = () => navCoursesMenu().click()


    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.viewport(1055,768)
    })

    it("verify if is in desktop version", () => {
        navCoursesMenu().should("exist")
    })

    it("Verify if has 3 courses on the navbar (home page)", ()=>{
        navCoursesMenu().click()
        
        for(let i = 0; i < 3; i++){            
            if( i == 0){
                navCoursesItems().eq(i).contains('1. Testing Your First Next.js Application')
                //navCoursesItems().eq(i).click()
            }else if( i == 1){
                navCoursesItems().eq(i).contains('2. Testing Foundations')
            }else if( i == 2){
                navCoursesItems().eq(i).contains('3. Cypress Fundamentals')
            }else{ 
                navCoursesItems().eq(i).contains('Error -  Course does not exist - Try again')
            }
        }
        
    })

    it.only("Selecting courses from navbar (home page) and verify route", ()=>{
        clickCoursesMenuBtn() 
        
        for(let i = 0; i < 3; i++){            
            if( i == 0){
                navCoursesItems().eq(i).click()
                cy.location("pathname").should('eq','/testing-your-first-application')
            }else if( i == 1){
                clickCoursesMenuBtn()
                navCoursesItems().eq(i).click()
                cy.location("pathname").should('eq','/testing-foundations')
            }else if( i == 2){
                clickCoursesMenuBtn()
                navCoursesItems().eq(i).click()
                cy.location("pathname").should('eq','/cypress-fundamentals')
            }else{ 
                navCoursesItems().eq(i).contains('Error -  Course does not exist - Try again')
            }
        }
    })
})