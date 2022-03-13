/// <reference types="cypress" />

describe("Forget password functionality", () => {
	beforeEach(() => {
		Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))

		cy.viewport(1280,720)
        cy.visit('https://pixer-shop.vercel.app/')
        cy.get('[aria-label="User"] > .h-5').click()
        cy.contains("Forgot Password?").click()
        cy.contains("Reset Your Password")
	})
	it("Enter non-existing email address", () => {
		cy.get("input[type=email]").type("xyz@gmail.com")
		cy.contains("Reset Password").click()
		cy.contains("This email address doesn't exist").should("exist")
		cy.contains("Check Your Email").should("not.exist")
	})
	it("Enter existing email address which redirects to token input", () => {
		cy.get("input[type=email]").type("taj@gmail.com")
		cy.contains("Reset Password").click()
		cy.contains("This email address doesn't exist").should("not.exist")
		cy.contains("Check Your Email").should("exist")
	})
	it("Enter wrong token input", () => {
		cy.get("input[type=email]").type("taj@gmail.com")
		cy.contains("Reset Password").click()
		cy.contains("This email address doesn't exist").should("not.exist")
		cy.contains("Check Your Email").should("exist")
		cy.get("input[name=token]").type('asdasd5465454sdad')
		cy.contains("Verify Token").click()
		cy.contains("invalid token").should("exist")
	})
	it("Enter Back button to go back", () => {
		cy.get("input[type=email]").type("taj@gmail.com")
		cy.contains("Reset Password").click()
		cy.contains("This email address doesn't exist").should("not.exist")
		cy.contains("Check Your Email").should("exist")
		cy.contains("Back").click()
	})
})