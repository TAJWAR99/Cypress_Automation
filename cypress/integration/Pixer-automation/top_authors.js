/// <reference types="cypress" />

describe('Explore Page functionality ', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))

        cy.viewport(1280,720)
        cy.visit('https://pixer-shop.vercel.app/')
        cy.get('[href="/authors"]').click()
        cy.url().should('eq',"https://pixer-shop.vercel.app/authors")
    })
    it('Check search functionality giving invalid input', () => {
        cy.get('.grid > div').should('length.gt',0)
        cy.get('input[type="search"]').type('zxc')
        cy.wait(2000)
        cy.get('.grid > div').should('length.lte',0)
    })
    it('Check search functionality with valid name', () => {
        cy.get('.grid > div').should('length.gt',0)
        cy.get('input[type="search"]').type('Benta')
        cy.wait(2000)
        cy.get('.grid > div').should('length.gte',1)
    })
    it('Check clearing the search field', () => {
        cy.get('.grid > div').then((list) => {
            var len = list.length
            cy.get('input[type="search"]').type('Benta')
            cy.wait(2000)
            cy.get('.grid > div').its('length').should('lt',len)
            cy.get('input[type="search"]').clear()
            cy.get('.grid > div').its('length').should('eq',len)

        })

    })
    it('Click the author', () => {
        cy.get('[data-projection-id="1"]').then((elem) => {
            var name = elem.find('h3').text()
            console.log(name)
            cy.get('[data-projection-id="1"]').click()
            cy.get('h1').should('have.text',name)
        })
    })
})