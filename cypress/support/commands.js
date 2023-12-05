// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//const cypress = require("cypress");

Cypress.Commands.add("login", (login, password) => {
    cy.contains("Log in").click();
    cy.get("#mail").type(login);
    cy.get("#pass").type(password);
    cy.contains("Submit").click();
  });
  
  Cypress.Commands.add("loginEmptyPass", (login) => {
    cy.contains("Log in").click();
    cy.get("#mail").type(login);
    cy.contains("Submit").click();
  });
  
  Cypress.Commands.add("addBook", (book) => {
    cy.contains("Add new").click();
    cy.get("input#title").type(book.title);
    cy.get("input#description").type(book.description);
    cy.get("input#authors").type(book.author);
    cy.get("input#favorite").click();
    cy.contains("Submit").click();
  });
  
  Cypress.Commands.add("addBookNoFavorite", (book) => {
    cy.contains("Add new").click();
    cy.get("input#title").type(book.title);
    cy.get("input#description").type(book.description);
    cy.get("input#authors").type(book.author);
    cy.contains("Submit").click();
  });
  
  Cypress.Commands.add("removeAllFavorite", () => {
    cy.visit("/favorites");
    cy.get(".mt-3").each(() => {
      cy.get(`.card-deck a:nth-child(${1}) .btn`).click();
    });
  });