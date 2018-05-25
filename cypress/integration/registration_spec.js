describe('register', function() {

var url = "http://localhost:8000/sessions/new"

  it("allows you to register and logs you in", function() {
    cy.visit(url)
    cy.get('input[name=name]').type('Mr Mark')
    cy.get('input[id=reg_mail]').type('marky.mark@funkybunch.com')
    cy.get('input[name=password]').type('funky1234')
    cy.get('input[name=phone]').type('0775553332')
    cy.get('input[name=conf_password]').type('funky1234')
    cy.get('button[name=register]').click()
    cy.get('.username').should('contain','Mr Mark')
  });

  it('fails to register you if you dont use a valid email' , function() {
    cy.visit(url)
    cy.get('input[name=name]').type('Mr Mark')
    cy.get('input[id=reg_mail]').type('marky.mark$funkybunch.com')
    cy.get('input[name=phone]').type('0775553332')
    cy.get('input[name=password]').type('funky1234')
    cy.get('input[name=conf_password]').type('funky1234')
    cy.get('button[name=register]').click()
    cy.title().should('eq', 'Login')
  });

  it('fails to register you if you dont use a valid password' , function() {
    cy.visit(url)
    cy.get('input[name=name]').type('Mr Mark')
    cy.get('input[id=reg_mail]').type('marky.mark@funkybunch.com')
    cy.get('input[name=phone]').type('0775553332')
    cy.get('input[name=password]').type('1')
    cy.get('input[name=conf_password]').type('1')
    cy.get('button[name=register]').click()
    cy.get('.errors').should('contain', 'Password not long enough')
  });

  it('fails to register you if you dont enter the same password twice' , function() {
    cy.visit(url)
    cy.get('input[name=name]').type('Mr Mark')
    cy.get('input[id=reg_mail]').type('marky.mark@funkybunch.com')
    cy.get('input[name=phone]').type('0775553332')
    cy.get('input[name=password]').type('funky1234')
    cy.get('input[name=conf_password]').type('wrongpassword')
    cy.get('button[name=register]').click()
    cy.get('.errors').should('contain', 'Passwords do not match')
  });

  it('fails if you enter an email that has already been registered', function(){
    cy.get('input[name=name]').type('Jane Doe')
    cy.get('input[id=reg_mail]').type('john.doe@email.com')
    cy.get('input[name=phone]').type('0775553332')
    cy.get('input[name=password]').type('2345')
    cy.get('input[name=conf_password]').type('2345')
    cy.get('button[name=register]').click()
    cy.get('.errors').should('contain', 'Email already registered')
  })

});
