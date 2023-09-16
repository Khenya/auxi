describe('test calculadora', () =>{
    beforeEach(() =>{
      cy.visit('http://localhost:5173')
    })
    // SUMAR NÚMEROS NEGATIVOS
    it('Sumar -10 + 3', () => {
      cy.get('[id="boton--"]').click();
      cy.get('[id="boton-1"]').click();
      cy.get('[id="boton-0"]').click();
      cy.get('[id="boton-+"]').click();
      cy.get('[id="boton-3"]').click();
      cy.get('[id="boton-="]').click();
      cy.get('div').contains('-7')
    })
  })