describe('login', function() {
var url = "http://localhost:8000/sessions/new"
it("allows you to login", function() {
  cy.visit(url)
  cy.get('input[name=log_mail]').type('john.doe@email.com')
  cy.get('input[name=log_password]').type('1234')
  cy.get('button[name=login]').click()
  cy.get('.username').should('contain','John Doe')
});
});
