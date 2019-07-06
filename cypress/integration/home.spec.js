/* global describe it cy */
describe('Task actions', () => {
  it('displays the element in the list', () => {
    const elemntList = 'Learn more about test';

    cy.visit('http://localhost:3000');

    cy.get('div[data-test="newElementName"]');

    cy.get('input[name="name"]').type(elemntList);

    cy.get('[data-test="addNewElementButton"]').click();

    cy.contains(elemntList);
  });

  it('displays error message "Please enter a task"', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-test="addNewElementButton"]').click();

    cy.get('div[data-test="errorMessage"]');

    cy.contains('Please enter a task');
  });

  it('displays error message "Please enter no less than 2 characters"', () => {
    const elemntList = 'L';

    cy.visit('http://localhost:3000');

    cy.get('input[name="name"]').type(elemntList);

    cy.get('[data-test="addNewElementButton"]').click();

    cy.get('div[data-test="errorMessage"]');

    cy.contains('Please enter no less than 2 characters');
  });

  it('displays error message "Please enter no more than 40 characters"', () => {
    const elemntList = 'Please enter no more than 40 characters Please enter no more than 40 characters Please enter no more than 40 characters';

    cy.visit('http://localhost:3000');

    cy.get('input[name="name"]').type(elemntList);

    cy.get('[data-test="addNewElementButton"]').click();

    cy.get('div[data-test="errorMessage"]');

    cy.contains('Please enter no more than 40 characters');
  });

  it('elimine the "First task" the list', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-test="removeElement-0"]').click();

    cy.get('button[data-test="removeElement-0"]').should('not.exist');
  });
});
