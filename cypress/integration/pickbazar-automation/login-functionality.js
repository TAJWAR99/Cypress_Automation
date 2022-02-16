/// <reference types="cypress" />

describe('Login functionality ', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))

        cy.viewport(1280,720)
        cy.visit('https://shop-pickbazar-rest.vercel.app/')
    })

    it('Sign in with invalid email and valid password', ()=> {
        

        cy.log('Click join button')
        cy.contains('Join').click()

        cy.contains('The credentials was wrong!').should('not.exist')


        cy.get('#email').clear().type('admin@gmail.com')

        cy.get('#password').clear().type('demodemo')

        cy.get('form > .mt-8 > .inline-flex').click()

        cy.contains('The credentials was wrong!').should('exist')



    })
// })
// describe('Login functionality ', () => {
    it('Sign in with valid email and invalid password', ()=> {
        Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))

        cy.viewport(1280,720)
        cy.visit('https://shop-pickbazar-rest.vercel.app/')

        cy.log('Click join button')
        cy.contains('Join').click()

        cy.contains('The credentials was wrong!').should('not.exist')


        cy.get('#email').clear().type('customer@demo.com')

        cy.get('#password').clear().type('admin')

        cy.get('form > .mt-8 > .inline-flex').click()

        cy.contains('The credentials was wrong!').should('exist')

    })
// })
// describe('Login functionality ', () => {
    it('Sign in with invalid email and invalid password', ()=> {
        Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))

        cy.viewport(1280,720)
        cy.visit('https://shop-pickbazar-rest.vercel.app/')

        cy.log('Click join button')
        cy.contains('Join').click()

        cy.contains('The credentials was wrong!').should('not.exist')


        cy.get('#email').clear().type('admin@gmail.com')

        cy.get('#password').clear().type('admin')

        cy.get('form > .mt-8 > .inline-flex').click()

        cy.contains('The credentials was wrong!').should('exist')

    })
// })
// describe('Login functionality ', () => {
    it('Sign in with valid email and valid password', ()=> {
        Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))

        cy.viewport(1280,720)
        cy.visit('https://shop-pickbazar-rest.vercel.app/')

        cy.log('Click join button')
        cy.contains('Join').click()

        cy.contains('The credentials was wrong!').should('not.exist')
        //cy.contains('The credentials was wrong!', { timeout: 10 * 1000}).should('not.exist')
        //cy.get('id').should('contain.text','The credentials was wrong!')


        cy.get('#email').clear().type('customer@demo.com')

        cy.get('#password').clear().type('demodemo')

        // cy.pause()
        // cy.debug()

        cy.get('form > .mt-8 > .inline-flex').click()

        cy.url().should('eq','https://shop-pickbazar-rest.vercel.app/')
        //cy.url().should('include','/password-reset')

    })
})