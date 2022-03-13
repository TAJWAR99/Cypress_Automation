/// <reference types="cypress" />
/*
describe('Testing beecrowd website ', () => {
    it('Navigate to beecrowd', () => {
        cy.visit('https://www.beecrowd.com.br/judge/en/login/?origem=1')

    })
    it('Check if beecrowd title is present', () => {
    	//mocha
        cy.contains('beecrowd').should('exist')
    })
    it('Calculate the number of divs', () => {
    	cy.get('div').should('exist')
    	cy.get('div#container')
    	cy.get('div[id=container]')
    	//cy.get('.asyncComponent > div > a')
    	//cy.get('[data-testid=learnbtn]')
    })
})*/
/*
describe('Testing ChawkBazar website', () => {
	it('Navigate to chawkbazar', () => {
		cy.viewport(1280,720)
		//cy.viewport('iphone-x')
		cy.visit('https://chawkbazar-laravel-shop.vercel.app/')
	})
	it('Click demos drop down menu', () => {
		//cy.get('.menuBtn')
		cy.viewport(1280,720)
		cy.get('.menuBtn > span').click()
        //cy.get('.classname > .classname').find('#id').click()
	})
	
})*/
describe('Testing Codedamn website ', () => {
    it('Navigate to codedamn', () => {
    	cy.viewport(1024, 1366)
        cy.visit('https://codedamn.com/')
        cy.contains('Sign in').click()
    	cy.contains('Forgot your password?').should('exist')

    })
    it.only('Login page', () => {
        cy.viewport(1024, 720)
        cy.visit('https://codedamn.com/')
        //1. Sign in
        cy.contains('Sign in').click()
        //2. password reset page
        cy.contains('Forgot password?').click()
        //3. verify your links
        cy.url().should('include','/password-reset')
        //4. go back
        cy.log('Going back')
        cy.go('back')

        cy.contains('Register an account').click()
        //check for right page or verify url
        cy.url().should('include','/register')

    })
})

//cy.url().then(value => {
//     cy.log('The current url is ',value)
// })

// const token = "..............."
// before(() => {
//     cy.then(() => {
//         window.localStorage.setItem('__auth__token', token)
//     })
// })


//work in command prompt(cmd)
//hit ctrl+c
//cy.get('[data-testid=xtrem]').type('{ctrl}{c}')
//hit enter
//cy.get('[data-testid=xtrem]').type(`touch testScript.js{enter}`)

//Rename a file by clicking rightclick
//cy.contains('testScript.js').rightclick()
//cy.get('[data-testid=renamefileFolder]').type('newFile.js')
//cy.get('[data-testid=renameBtn]').click()


//cy.get('[name="q"').click()

//Upload image
//cy.get('#photo-upload').attachFile('images/pic1.jpg')

//submit a form
// cy.get('form').within($form) => {
//     cy.get('input[type="email"]').type('abc@gmail.com')
//     cy.get('input[type="password"]').type('abcde')
//     cy.root().submit()
// }

//cy.get("#primary-item").find("li").first()

//cy.get('a:contains("Login")').click()