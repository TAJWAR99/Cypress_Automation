/// <reference types="cypress" />

describe('Settings Page functionality ', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))

        cy.viewport(1280,720)
        cy.visit('https://pixer-shop.vercel.app/')
        cy.get('[href="/profile"]').click()
        cy.url().should('eq',"https://pixer-shop.vercel.app/profile")
        cy.get('form').within(($form) => {
            cy.get('input[name="email"]').clear().type('customer@demo.com')
            cy.get('input[name="password"]').clear().type('demodemo')
            cy.root().submit()
        })
        cy.wait(2000)
    })
    it('Check password change functionality', () => {
        cy.contains('Password').click()
        cy.get('form').within(($form) => {
            cy.get('input[name="oldPassword"]').type('demodemo')
            cy.get('input[name="newPassword"]').type('demodemo')
            cy.get('input[name="confirmPassword"]').type('demodemo')
            cy.root().submit()
        })
    })
    it.only('Check cancel button functionality', () => {
        cy.contains('Password').click()
        cy.get('form').within(($form) => {
            cy.get('input[name="oldPassword"]').type('demodemo')
            cy.get('input[name="newPassword"]').type('demodemo')
            cy.get('input[name="confirmPassword"]').type('demodemo')
        })
        cy.wait(2000)
        cy.get('input[name="oldPassword"]').invoke('val').should('length.gte',6)
        cy.get('input[name="newPassword"]').invoke('val').should('length.gte',6)
        cy.get('input[name="confirmPassword"]').invoke('val').should('length.gte',6)

        cy.contains('Cancel').click()
        cy.get('input[name="oldPassword"]').should('have.text','')
        cy.get('input[name="newPassword"]').should('have.text','')
        cy.get('input[name="confirmPassword"]').should('have.text','')
    })
})