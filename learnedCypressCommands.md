# Web Developer Study
## 12 months web developer study. I decided to dedicate at least 12 months to learn web development.

![Begin Banner](/Documentation/top-1200x350.gif)

* Online courses, challenges and creation of my own projects.

## What I learned/used 
### Cypress 
* Cypress
    * .visit("") the url to open
    * .get("") get the element
    * .contains("") verify se element contains the text. Contains is case sensitive.
    * .only("") to run a specific test. 
        * it.only("...", () => {....})
    * .eq() when it is a array (0 ... array.length)
        * ... .eq(1)
    * .last()
    * beforeEach(() => { ... }) to run every time before a test.
        *  beforeEach(() =>{ cy.visit('http://localhost:3000') })
    * .type("typehereWhatYouWantTo") write in the field
    * .should('be.visible') the element is visible
    * .should("exist") the element exist in the page, like a successful subscription
    * .should("not.exist") the element do NOT exist in the page, like a successful subscription
    * .click() click in a button
    * .location("pathname").should("eq","/test-you-first-application")
        * location("pathname")  the location API to get the “pathname” which is the URL of our application.
    
    



    
    * custom commands
        * support folder
            * commands.ts
                * Cypress.Commands.add("nameCommand", (selector) => { return cy.get(`[data-test=${selector}]`) })





   

![End Banner](/Documentation/botton-1200x350.gif)