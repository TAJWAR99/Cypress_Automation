/// <reference types="cypress" />

describe('Home Page functionality ', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))

        cy.viewport(1280,720)
        cy.visit('https://pixer-shop.vercel.app/')

    })
    it('Click next and Previous button to scroll horizontally', () => {
        cy.get('.-mb-7 > :nth-child(12)').should('not.be.visible')
        cy.get('.-mb-7 > :nth-child(13)').should('not.be.visible')


        cy.get('[title="Next"]').click()
        cy.get('.-mb-7 > :nth-child(12)').should('be.visible')
        cy.get('.-mb-7 > :nth-child(13)').should('be.visible')

        cy.get('[title="Prev"]').click()
        cy.get('.-mb-7 > :nth-child(12)').should('not.be.visible')
        cy.get('.-mb-7 > :nth-child(13)').should('not.be.visible')
    })
    it('Click Load more button', () => {
        
        cy.get('.pt-5').find("h3").should("have.length",15)

        cy.get('body').then((body) => {
            if(body.find('button:contains(Load more)').length > 0){
                cy.contains('Load more').click()
            }
        })
        cy.get('.pt-5').find("h3").should("length.gt",15)
    })
})