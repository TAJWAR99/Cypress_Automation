/// reference types="cypress" />

describe('Check all the components of Navigation bar is working', () =>
{
	beforeEach(() => {
        Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))

        cy.viewport(1280,720)
        cy.visit('https://pixer-shop.vercel.app/')
    })
    // it("Pixer title is present", () => {
    // 	cy.contains("Pixer")
    // })
    it("Click burger menu to hide and open the menu options name", () => {
    	console.log("Hide options name")
    	cy.get('.transition-fill-colors > .h-6').click()
    	cy.get('.active-text-dark > .text-dark-100').should("not.be.visible")
    	cy.get('[href="/explore"] > .text-dark-100').should("not.be.visible").should("not.be.visible")
    	cy.get('[href="/popular-products"] > .text-dark-100').should("not.be.visible")
    	cy.get('[href="/authors"] > .text-dark-100').should("not.be.visible")
    	cy.get('[href="/contact-us"] > .text-dark-100').should("not.be.visible")
    	cy.get('[href="/profile"] > .text-dark-100').should("not.be.visible")
    	cy.get('[href="/help"] > .text-dark-100').should("not.be.visible")
 	
 		console.log("Open option names")
    	cy.get('.transition-fill-colors > .h-6').click()
    	cy.get('.active-text-dark > .text-dark-100').should("be.visible")
    	cy.get('[href="/explore"] > .text-dark-100').should("be.visible").should("be.visible")
    	//cy.get('[href="/popular-products"] > .text-dark-100').should(".be.visible")
    	cy.get('[href="/authors"] > .text-dark-100').should("be.visible")
    	cy.get('[href="/contact-us"] > .text-dark-100').should("be.visible")
    	cy.get('[href="/profile"] > .text-dark-100').should("be.visible")
    	cy.get('[href="/help"] > .text-dark-100').should("be.visible")
    })
    it("Click home option", () => {
    	cy.get('.active-text-dark').click()
    	cy.url().should('eq',"https://pixer-shop.vercel.app/")
    })
    it("Click explore option", () => {
    	cy.get('[href="/explore"]').click()
    	cy.url().should('eq',"https://pixer-shop.vercel.app/explore")
    })
    it("Click popular-products option", () => {
    	cy.get('[href="/popular-products"]').click()
    	cy.url().should('eq',"https://pixer-shop.vercel.app/popular-products")
    })
    it("Click top-authors option", () => {
    	cy.get('[href="/authors"]').click()
    	cy.url().should('eq',"https://pixer-shop.vercel.app/authors")
    })
    it("Click contact-us option", () => {
    	cy.get('[href="/contact-us"]').click()
    	cy.url().should('eq',"https://pixer-shop.vercel.app/contact-us")
    })
    it("Click settings option", () => {
    	cy.get('[href="/profile"]').click()
    	cy.url().should('eq',"https://pixer-shop.vercel.app/profile")
    })
    it("Click help option", () => {
    	cy.get('.mt-auto > [href="/help"]').click()
    	cy.url().should('eq',"https://pixer-shop.vercel.app/help")
    })
    it("Click Terms option", () => {
    	cy.get('[href="/terms"]').click()
    	cy.url().should('eq',"https://pixer-shop.vercel.app/terms")
    })
    it("Click Privacy option", () => {
    	cy.get('[href="/privacy"]').click()
    	cy.url().should('eq',"https://pixer-shop.vercel.app/privacy")
    })
    it("Click Help option", () => {
    	cy.get('.border-t > .flex > [href="/help"]').click()
    	cy.url().should('eq',"https://pixer-shop.vercel.app/help")
    })
    it("Click search icon option", () => {
    	cy.get('[aria-label="Search"] > .h-5').click()
    	cy.get('.search-header > .w-full')
    })
    it("Click cart icon option", () => {
    	cy.visit('https://pixer-shop.vercel.app/')
    	cy.get('.relative > .h-5 > path').click()
    	cy.get('.text-sm').contains('Shopping cart')
    })
    it.only("Click profile icon option", () => {
    	cy.get('[aria-label="User"] > .h-5').click()
    	cy.contains('Welcome Back, Get Login')
    	cy.contains('Get Login')
    })
})