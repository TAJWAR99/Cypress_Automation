/// <reference types="cypress" />

describe('Checkout functionality ', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))

        cy.viewport(1280,720)
        cy.reload()
        cy.visit('https://pixer-shop.vercel.app/')

    })
    it('Complete checkout', () => {
        cy.get('.grid > div').first().click()
        
        cy.contains('Add to Cart').click()
        cy.contains('Successfully added to the cart!')
        cy.get('.top-5 > .h-4 > path').click()

        cy.log('Go to cart')
        cy.get('.relative > .h-5 > path').click()
        cy.get('.text-sm').contains('Shopping cart')

        
        cy.contains('Proceed to checkout').click()

        cy.get('form').within(($form) => {
            cy.get('input[name="email"]').type('demo@gmail.com')
            cy.get('input[name="password"]').type('demodemo')

            cy.root().submit()
        })

        cy.contains('Check Availability').click()
        cy.wait(2000)

        cy.get('div').then((elem) => {
            var txt = elem.find('div > h2').first().text()
            cy.log(txt)
            if(txt == 'Contact Number'){
                cy.get('.form-control').invoke('val').then((elem) => {
                    var len = elem.length
                    cy.log(len)
                    if(len < 5){
                        cy.get('.arrow').click()
                        cy.get('.country > .country-name').each(($el,index,$list) => {
                            if($el.text() == 'Ukraine'){
                                cy.wrap($el).click()
                                cy.get('.form-control').type('01236478936')
                            }
                        })
                    }
                })
                cy.get('.__PrivateStripeElement > iframe').then($element => {

                  const $body = $element.contents().find('body')

                  let stripe = cy.wrap($body)
                  stripe.find('input[name="cardnumber"]').click().type('4242424242424242')
                  stripe = cy.wrap($body)
                  stripe.find('input[name="exp-date"]').click().type('4242')
                  stripe = cy.wrap($body)
                  stripe.find('input[name="cvc"]').click().type('4242424')
                })
                cy.contains('Confirm').click()
                cy.contains('Confirmation Done!')

            }
        })
    })
})