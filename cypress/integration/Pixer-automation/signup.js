/// <reference types="cypress" />

describe('SignUp functionality ', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))

        cy.viewport(1280,720)
        cy.visit('https://pixer-shop.vercel.app/')
        cy.get('[aria-label="User"] > .h-5').click()
        cy.contains('Wrong username or password').should('not.exist')
        cy.contains("Create Account").click()
        cy.contains("Create your account. Already have account?")
    })

    it('Signup without name, email and password input', ()=> {        
        
        cy.get('button[type="submit"]').click()
        cy.contains('name is a required field').should('exist')
        cy.contains('email is a required field').should('exist')
        cy.contains('password must be at least 6 characters').should('exist')

    })
    it('Signup without name and email input but password input', ()=> {
        
        cy.get('input[type="password"]').type('taj1234')
        cy.get('button[type="submit"]').click()
    
        cy.contains('name is a required field').should('exist')
        cy.contains('email is a required field').should('exist')
        cy.contains('password must be at least 6 characters').should('not.exist')

    })
    it('Signup with name and email but without password input', ()=> {
        
        cy.get('input[type="text"]').type('sihan')
        cy.get('input[type="email"]').type('sihan123@gmail.com')
        cy.get('button[type="submit"]').click()
    
        cy.contains('name is a required field').should('not.exist')
        cy.contains('email is a required field').should('not.exist')
        cy.contains('password must be at least 6 characters').should('exist')

    })
    it('Signup with invalid email format but valid name and password', ()=> {
        
        cy.get('input[type="text"]').type('sihan')
        cy.get('input[type="email"]').type('sihangmail.com')
        cy.get('input[type="password"]').type('taj1234')
        cy.get('button[type="submit"]').click()
    
        cy.contains('name is a required field').should('not.exist')
        cy.contains('email must be a valid email').should('exist')
        cy.contains('password must be at least 6 characters').should('not.exist')

    })
    it('Signup with invalid password length but valid name and email', ()=> {

        cy.get('input[type="text"]').type('sihan')
        cy.get('input[type="email"]').type('sihan@gmail.com')
        cy.get('input[type="password"]').type('taj12')
        cy.get('button[type="submit"]').click()
    
        cy.contains('name must be a valid name').should('not.exist')
        cy.contains('email is a required field').should('not.exist')
        cy.contains('password must be at least 6 characters').should('exist')

    })
    it('Signup with existing email account but valid name and password', ()=> {

        cy.get('input[type="text"]').type('sihan')
        cy.get('input[type="email"]').type('taj@gmail.com')
        cy.get('input[type="password"]').type('taj1234')
        cy.get('button[type="submit"]').click()
    
        cy.contains('name must be a valid name').should('not.exist')
        cy.contains('The email has already been taken.').should('exist')
        cy.contains('password must be at least 6 characters').should('not.exist')

    })
    it('Signup with valid name, email and password input', ()=> {

        cy.get('input[type="text"]').type('sihan')
        cy.get('input[type="email"]').type('sihan@gmail.com')
        cy.get('input[type="password"]').type('taj1234')
        cy.get('button[type="submit"]').click()
    
        cy.contains('name must be a valid name').should('not.exist')
        cy.contains('email is a required field').should('not.exist')
        cy.contains('password must be at least 6 characters').should('not.exist')
    })
    it('Signup with invalid name format but valid email and password input', ()=> {

        cy.get('input[type="text"]').type('112233')
        cy.get('input[type="email"]').type('sihan123@gmail.com')
        cy.get('input[type="password"]').type('taj1234')
        cy.get('button[type="submit"]').click()
    
        cy.contains('name must be a valid name').should('exist')
        cy.contains('email is a required field').should('not.exist')
        cy.contains('password must be at least 6 characters').should('not.exist')
    })
    it('Click cross icon to go back', () => {
        cy.get('.top-5 > .h-4 > path')
        cy.url().should('eq','https://pixer-shop.vercel.app/')
    })
})