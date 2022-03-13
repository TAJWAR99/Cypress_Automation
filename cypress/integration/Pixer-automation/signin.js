/// <reference types="cypress" />

describe('Login functionality ', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))

        cy.viewport(1280,720)
        cy.visit('https://pixer-shop.vercel.app/')
        cy.get('[aria-label="User"] > .h-5').click()
        cy.contains("Join your account. Don’t have account?")
        cy.contains('Wrong username or password').should('not.exist')
    })
    it('Sign in without email and password input', ()=> {
        
        cy.get('button[type="submit"]').click()
    
        cy.contains('email is a required field').should('exist')
        cy.contains('password is a required field').should('exist')

    })
    it('Sign in without email input but valid password input', ()=> {
        
        cy.get('input[type="password"]').type('taj1234')
        cy.get('button[type="submit"]').click()
    
        cy.contains('email is a required field').should('exist')
        cy.contains('password is a required field').should('not.exist')

    })
    it('Sign in with valid email but without password input', ()=> {
        
        cy.get('input[type="email"]').type('taj123@gmail.com')
        cy.get('button[type="submit"]').click()
    
        cy.contains('email is a required field').should('not.exist')
        cy.contains('password is a required field').should('exist')

    })
    it('Sign in with invalid email and valid password', ()=> {
        
        cy.get('input[type="email"]').type('taj123@gmail.com')
        cy.get('input[type="password"]').type('taj1234')
        cy.get('button[type="submit"]').click()
    
        cy.contains('Wrong username or password').should('exist')

    })
    it('Sign in with valid email and invalid password', ()=> {

        cy.get('input[type="email"]').type('taj@gmail.com')
        cy.get('input[type="password"]').type('taj123456')
        cy.get('button[type="submit"]').click()   

        cy.contains('Wrong username or password').should('exist')
    })
    it('Sign in with invalid email and invalid password', ()=> {

        cy.get('input[type="email"]').type('taj1234@gmail.com')
        cy.get('input[type="password"]').type('taj123456')
        cy.get('button[type="submit"]').click()

        cy.contains('Wrong username or password').should('exist')

    })
    it('Click cross button to go back', () => {
        cy.get('.top-5 > .h-4').click()
        cy.url().should('eq','https://pixer-shop.vercel.app/')
    })
    it('Sign in with valid email and valid password', ()=> {

        cy.get('input[type="email"]').type('taj@gmail.com')
        cy.get('input[type="password"]').type('taj1234')
        cy.get('button[type="submit"]').click()
    
        cy.url().should('eq','https://pixer-shop.vercel.app/')

    })
})