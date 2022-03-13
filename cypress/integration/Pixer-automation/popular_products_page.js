/// <reference types="cypress" />

describe('Explore Page functionality ', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))

        cy.viewport(1280,720)
        cy.visit('https://pixer-shop.vercel.app/')
        cy.get('[href="/popular-products"]').click()
        cy.url().should('eq',"https://pixer-shop.vercel.app/popular-products")
    })
})