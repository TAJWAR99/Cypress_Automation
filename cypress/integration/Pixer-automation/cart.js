/// <reference types="cypress" />

describe('Cart functionality ', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))

        cy.viewport(1280,720)
        cy.reload()
        cy.visit('https://pixer-shop.vercel.app/')

    })
    it('Click preview button on product image', () => {
        for(let i = 1; i<=3; i++){
            cy.get('.grid > div').first().then((text) => {
                var name = text.find('a').first().text()
                cy.log(name)
                cy.get('.grid > div').first().click()
                cy.get('h2').then((text) => {
                    expect(text.find('a').text()).to.be.eq(name)
                })
            })
            
            cy.contains('Add to Cart').click()
            cy.contains('Successfully added to the cart!')
            cy.get('.top-5 > .h-4 > path').click()

            //let quantity = i
            cy.log('Go to cart')
            cy.get('.relative > .h-5 > path').click()
            cy.get('.text-sm').contains('Shopping cart')

            cy.get('ul > li').first().then((elem) => {
                expect(elem.find('span').last().text()).to.be.eq(`X ${i}`)
            })
            cy.get('.-m-2 > .h-4 > path').click()
        }
        
    })
    it.only('Check total cost in the cart', () => {
        var itr = 3
        for(let i = 1; i<=itr; i++){
            cy.get('.grid > div').first().then((text) => {
                var name = text.find('a').first().text()
                cy.log(name)
                cy.get('.grid > div').first().click()
                cy.get('h2').then((text) => {
                    expect(text.find('a').text()).to.be.eq(name)
                })
            })
            
            cy.contains('Add to Cart').click()
            cy.contains('Successfully added to the cart!')
            cy.get('.top-5 > .h-4 > path').click()

            //let quantity = i
            cy.log('Go to cart')
            cy.get('.relative > .h-5 > path').click()
            cy.get('.text-sm').contains('Shopping cart')

            cy.get('ul > li').first().then((elem) => {
                expect(elem.find('span').last().text()).to.be.eq(`X ${i}`)
            })
            cy.get('.-m-2 > .h-4 > path').click()
        }
        cy.wait(2000)
        cy.get('.relative > .h-5 > path').click()
        cy.get('ul > li ').first().then((elem) => {
            var price = elem.find('p').last().find('span').first().text()
            var total = parseFloat(price.slice(1)) * itr
            cy.get('.border-t > .justify-between').then((prc) => {
                expect(prc.find('span').last().text().slice(1)).to.be.eq(`${total.toFixed(2)}`)
            })
                
        })

    })

})