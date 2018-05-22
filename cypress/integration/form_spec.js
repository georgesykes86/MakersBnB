describe('listing input form', function (){
  var url = 'http://localhost:8000'
  it("should contain main fields", function() {
    cy.visit(url)
    cy.get('input[name=name]').type('Tom')
    cy.get('input[name=email]').type('tom@gmail.com')
    cy.get('input[name=phone]').type('+447568922100')
    cy.get('input[name=title]').type('Hollywood Mansion')
    cy.get('input[id=description]').type('my first listing')
    cy.get('input[id=price]').type(500)
    cy.get('button').click()

  })
});
