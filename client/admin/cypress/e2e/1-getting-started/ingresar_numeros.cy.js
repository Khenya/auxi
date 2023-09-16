describe('test calculadora', () =>{
    beforeEach(() =>{
      cy.visit('http://localhost:5173')
    })
    // VERIFICAR QUE INGRESASTE NUMEROS
    it('Sumar ningun numero', () => {
      cy.get('[id="boton-="]').click();
    })
})