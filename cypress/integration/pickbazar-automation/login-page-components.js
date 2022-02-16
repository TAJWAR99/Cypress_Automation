/// <reference types="cypress" />

describe('Login Page', () => {
    it('Check Sign in page contents are present', ()=> {
        Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))

    	cy.viewport(1280,720)
    	cy.visit('https://shop-pickbazar-rest.vercel.app/')

        cy.log('Go to sign in page')
        cy.contains('Join').click()

    	cy.contains('PickBazar').should('exist')

        cy.get('input#email')

        cy.get('input#password')

        cy.log('Check for password hidden icon')
        cy.get('.w-6')

    	cy.contains('Forgot password?').should('exist')

    	cy.contains('Login').should('exist')

    	cy.contains('Login with Google').should('exist')

    	cy.contains('Login with Mobile number').should('exist')

    	cy.contains('Register').should('exist')
    })
})
describe('Login Page', ()=> {
    it('Check the login page components functionality', ()=> {
        Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))
        
        cy.viewport(1280,720)
        cy.visit('https://shop-pickbazar-rest.vercel.app/')   
             
        cy.log('Go to sign in page')
        cy.contains('Join').click()

        cy.get('body').click(0,0);
        cy.wait(1000)
        cy.contains('Join').click()

        cy.log('Type email address')
        cy.get('input#email').clear().type('email@gmail.com')
        cy.log('Type password')
        cy.get('input#password').clear().type('adminpass')

        cy.log('Check for password hidden icon functionality')
        cy.get('.w-6').click()
        cy.wait(2000)
        cy.get('.w-6').click()
        cy.wait(2000)
        
        cy.contains('Forgot password?').click()
        cy.contains('Login').click()

        cy.contains('Login with Mobile number').click()
        cy.get('.ms-1').click()

        cy.contains('Register').click()
        cy.contains('Login').click()

        cy.contains('Login with Google').click()
    })
})
describe('Login Page', () => {
    it('Check Error messages for sign in page requirements', ()=> {
        Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))

        cy.viewport(1280,720)
        cy.visit('https://shop-pickbazar-rest.vercel.app/')

        cy.log('Go to sign in page')
        cy.contains('Join').click()

        cy.get('input#email').clear()

        cy.get('input#password').clear()

        cy.get('form > .mt-8 > .inline-flex').click()

        cy.contains('You must need to provide your email address').should('exist')
        cy.contains('You must need to provide your password').should('exist')
    })
})