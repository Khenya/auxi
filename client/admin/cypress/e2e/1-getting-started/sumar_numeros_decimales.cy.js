describe('test calculadora', () =>{
    beforeEach(() =>{
      cy.visit('http://localhost:5173')
    })
    // SUMAR 
    it('Sumar 1.7 + 0.2', () => {
      cy.get('[id="boton-1"]').click();
      cy.get('[id="boton-."]').click();
      cy.get('[id="boton-7"]').click();
      cy.get('[id="boton-+"]').click();
      cy.get('[id="boton-0"]').click();
      cy.get('[id="boton-."]').click();
      cy.get('[id="boton-2"]').click();
      cy.get('[id="boton-="]').click();
      cy.get('div').contains('1.9')
    })
  })