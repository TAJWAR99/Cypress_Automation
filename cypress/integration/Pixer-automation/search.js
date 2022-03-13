/// <reference types="cypress" />

describe('Search page functionality ', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))

        cy.viewport(1280,720)
        cy.visit('https://pixer-shop.vercel.app/')
        cy.get('[aria-label="Search"] > .h-5').click()

    })
    it('Search a product', () => {
        cy.contains('Clear').should('not.exist')
        cy.get('.search-results').find('h3').should("have.length.gte",15)
        cy.get('.search-header').type('StoryHub')
        cy.get('.search-results').find('h3').should("have.length.lte",1)
        cy.contains('Clear').click()
        cy.get('.search-results').find('h3').should("have.length.gte",15)

        cy.get('.search-header').type('asdasdaa')
        cy.contains('No products found!').should('exist')

        cy.contains('Clear').click()
        cy.get('.search-results').find('h3').should("have.length.gte",15)
        cy.get('.absolute > .h-4 > path').click()
    })
})