/// <reference types="cypress" />

context('ixigua', () => {
    it('cy.getCookie() - get a browser cookie', () => {
        cy.on('window:before:load', (window) => {
            console.log(window.document.querySelector('video'))
        })
      cy.visit('https://www.ixigua.com/6532729660843753992')
    })
  })
  