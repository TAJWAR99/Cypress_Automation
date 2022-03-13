/// <reference types="cypress" />

describe('Product functionality ', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))

        cy.viewport(1280,720)
        
        cy.visit('https://pixer-shop.vercel.app/')
        cy.reload()

    })
    it('Click preview button on product image', () => {
        cy.contains('Add to Cart').should('not.exist')
        cy.contains('Live Preview').should('not.exist')
        cy.get('.grid > div').first().then((text) => {
            var name = text.find('a').first().text()

            cy.get('.grid > div > div > div > button').first().click()
            
            cy.get('h2').then((text) => {
                expect(text.find('a').text()).to.be.eq(name)
            })
        })
        cy.contains('Add to Cart').should('exist')
        cy.contains('Live Preview').should('exist')
    })
    it('Click details button on product image', () => {
        cy.contains('Add to Cart').should('not.exist')
        cy.contains('Live Preview').should('not.exist')
        cy.get('.grid > div').first().then((text) => {
            var name = text.find('a').first().text()
            cy.log(name)
            cy.get('.grid > div > div > div > button').contains('Details').first().click()

            cy.get(':nth-child(1) > .bottom-0').then((text) => {
                expect(text.find('h1').text()).to.be.eq(name)
            })
        })
        cy.contains('Add to Cart').should('exist')
        cy.contains('Live Preview').should('exist')
        // cy.url().should('include','products/borobazar-react-next-grocery-template')
        cy.log('Go Back to home page')
        cy.contains('Back').click()
        cy.url().should('eq','https://pixer-shop.vercel.app/')

    })

})