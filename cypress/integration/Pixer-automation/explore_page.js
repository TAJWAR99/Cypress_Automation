/// <reference types="cypress" />

describe('Explore Page functionality ', () => {
    beforeEach(() => {
        Cypress.on('uncaught:exception', err => !err.message.includes('ResizeObserver loop limit exceeded'))

        cy.viewport(1280,720)
        cy.visit('https://pixer-shop.vercel.app/')
        cy.get('[href="/explore"]').click()
        cy.url().should('eq',"https://pixer-shop.vercel.app/explore")
    })
    it("Click left and right banner slider", () => {
        //cy.get('#promoCarousel').get('img').invoke('attr','src').should('eq','data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2774%27%20height=%2724%27/%3e')
        //cy.get('.prev').click()
        cy.get('.swiper-slide-active > span > img').invoke('attr','src').should('eq','/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.c8e30101.png&w=3840&q=75')
        cy.get('.next').click()
        cy.get('.swiper-slide-active > span > img').invoke('attr','src').should('not.eq','/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.c8e30101.png&w=3840&q=75')
        cy.wait(3000)
        cy.get('.prev').click()
        cy.get('.swiper-slide-active > span > img').invoke('attr','src').should('eq','/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.c8e30101.png&w=3840&q=75')
    })
    it.only('Click next and Previous button to scroll horizontally', () => {
        cy.get('.-mb-7 > :nth-child(12)').should('not.be.visible')
        cy.get('.-mb-7 > :nth-child(13)').should('not.be.visible')


        cy.get('[title="Next"]').click()
        cy.get('.-mb-7 > :nth-child(12)').should('be.visible')
        cy.get('.-mb-7 > :nth-child(13)').should('be.visible')

        cy.get('[title="Prev"]').click()
        cy.get('.-mb-7 > :nth-child(12)').should('not.be.visible')
        cy.get('.-mb-7 > :nth-child(13)').should('not.be.visible')
    })
    it('Click Load more button', () => {
        
        cy.get('.pb-9').find("h3").should("have.length",15)

        cy.get('body').then((body) => {
            if(body.find('button:contains(Load more)').length > 0){
                cy.contains('Load more').click()
            }
        })
        cy.get('.pb-9').find("h3").should("length.gt",15)
    })
})