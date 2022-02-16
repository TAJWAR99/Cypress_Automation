/// <reference types="cypress" />

describe('NavBar', ()=> {
	it('Check if the navigation options are clickable', ()=> {
		Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))

		cy.viewport(1280,720)
		cy.visit('https://shop-pickbazar.vercel.app/')

		cy.get('#headlessui-menu-button-1').click()
		cy.wait(1000)
		cy.get('#headlessui-menu-button-1').click()

		cy.get(':nth-child(1) > .font-normal').click()
		cy.wait(1000)
		cy.go('back')

		cy.get(':nth-child(2) > .font-normal').click()
		cy.wait(1000)
		cy.go('back')

		cy.get(':nth-child(3) > .font-normal').click()
		cy.wait(1000)
		cy.go('back')

		cy.get(':nth-child(4) > .font-normal').click()
		cy.wait(1000)
		cy.get('.inline-flex > .overflow-hidden > div > img').click()


	})
})
describe('NavBar', ()=> {
	it('Check if the click navigate to proper page', ()=> {
		Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))

		cy.viewport(1280,720)
		cy.visit('https://shop-pickbazar.vercel.app/')

		// cy.get('#headlessui-menu-button-1').click()
		// cy.wait(1000)
		// cy.get('#headlessui-menu-button-1').click()

		cy.get(':nth-child(1) > .font-normal').click()
		cy.url().should('eq','https://shop-pickbazar.vercel.app/shops')
		cy.wait(500)
		cy.go('back')

		cy.get(':nth-child(2) > .font-normal').click()
		cy.url().should('eq','https://shop-pickbazar.vercel.app/offers')
		cy.wait(500)
		cy.go('back')

		cy.get(':nth-child(3) > .font-normal').click()
		cy.url().should('eq','https://shop-pickbazar.vercel.app/help')
		cy.wait(500)
		cy.go('back')

		cy.get(':nth-child(4) > .font-normal').click()
		cy.url().should('eq','https://shop-pickbazar.vercel.app/contact')
		cy.wait(500)
		cy.go('back')


	})
})